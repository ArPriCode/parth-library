"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function createBooking(formData: FormData) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return { error: "You must be logged in to book a seat" }
    }

    const planType = formData.get("planType") as string
    const startDate = new Date(formData.get("startDate") as string)

    // Calculate end date (30 days from start date)
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + 30)

    if (!planType || !startDate) {
      return { error: "All fields are required" }
    }

    await prisma.booking.create({
      data: {
        userId: session.user.id,
        planType,
        startDate,
        endDate,
        status: "PENDING",
      },
    })

    revalidatePath("/dashboard")
    return { success: "Booking created successfully!" }
  } catch (error) {
    console.error("Error creating booking:", error)
    return { error: "Failed to create booking. Please try again." }
  }
}

export async function getMyBookings() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      redirect("/login")
    }

    const bookings = await prisma.booking.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return bookings
  } catch (error) {
    console.error("Error fetching bookings:", error)
    return []
  }
}
