"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { createBooking } from "@/app/actions/booking"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

interface BookingFormProps {
  planType: string
}

export function BookingForm({ planType }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      // Add the plan type to the form data
      formData.append("planType", planType)

      const result = await createBooking(formData)

      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      } else if (result.success) {
        toast({
          title: "Success",
          description: result.success,
        })
        // Redirect to dashboard
        router.push("/dashboard")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <label htmlFor="startDate" className="text-sm font-medium text-gray-300">
          Start Date
        </label>
        <input
          id="startDate"
          name="startDate"
          type="date"
          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Confirm Booking"}
      </Button>
    </form>
  )
}
