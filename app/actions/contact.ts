"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    if (!name || !phone || !message) {
      return {
        error: "All fields are required",
      }
    }

    await prisma.contactMessage.create({
      data: {
        name,
        phone,
        message,
        status: "UNREAD",
      },
    })

    revalidatePath("/")
    return { success: "Message sent successfully!" }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { error: "Failed to send message. Please try again." }
  }
}
