"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "Registration failed")
        setIsLoading(false)
        return
      }

      router.push("/login?registered=true")
    } catch (error) {
      setError("Something went wrong. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="w-full border-b border-gray-800 bg-black py-4">
        <div className="container">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">Parth Library</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12">
        <Card className="w-full max-w-md border-none bg-gray-800 shadow-lg">
          <CardContent className="p-6 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Create an Account</h1>
              <p className="text-gray-400">Register to book your spot at Parth Library</p>
            </div>

            {error && <div className="bg-red-900/30 text-red-400 px-4 py-2 rounded-md">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="+91 9876543210"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register"}
              </Button>
            </form>

            <div className="text-center text-sm text-gray-400">
              <p>
                Already have an account?{" "}
                <Link href="/login" className="text-emerald-400 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
