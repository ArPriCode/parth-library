import { NextResponse } from "next/server"
import { hash } from "bcrypt"
import prisma from "@/lib/db"

export async function POST(req: Request) {
  try {
    const { name, email, phone, password } = await req.json()

    // Validate input
    if (!name || !email || !phone || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role: "USER", // Default role
      },
    })

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: userWithoutPassword,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error registering user:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}
