"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function getAllBookings() {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
      redirect("/login")
    }

    const bookings = await prisma.booking.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return bookings
  } catch (error) {
    console.error("Error fetching all bookings:", error)
    return []
  }
}

export async function updateBookingStatus(bookingId: string, status: string) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
      return { error: "Unauthorized" }
    }

    await prisma.booking.update({
      where: {
        id: bookingId,
      },
      data: {
        status,
      },
    })

    revalidatePath("/admin/bookings")
    return { success: "Booking status updated successfully!" }
  } catch (error) {
    console.error("Error updating booking status:", error)
    return { error: "Failed to update booking status. Please try again." }
  }
}

export async function getAllContactMessages() {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
      redirect("/login")
    }

    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return messages
  } catch (error) {
    console.error("Error fetching contact messages:", error)
    return []
  }
}

export async function updateMessageStatus(messageId: string, status: string) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
      return { error: "Unauthorized" }
    }

    await prisma.contactMessage.update({
      where: {
        id: messageId,
      },
      data: {
        status,
      },
    })

    revalidatePath("/admin/messages")
    return { success: "Message status updated successfully!" }
  } catch (error) {
    console.error("Error updating message status:", error)
    return { error: "Failed to update message status. Please try again." }
  }
}
