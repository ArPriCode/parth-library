"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "@/app/actions/contact"
import { toast } from "@/components/ui/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData)

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
        // Reset the form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form.reset()
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
    <form id="contact-form" action={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your name"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-300">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your phone number"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="flex min-h-[120px] w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your message"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
