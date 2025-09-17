import type React from "react"
import Link from "next/link"
import { BookOpen, User, Calendar, LogOut } from "lucide-react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="w-full border-b border-gray-800 bg-black py-4">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">Parth Library</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">{session.user.email}</span>
            <form action="/api/auth/signout" method="POST">
              <button type="submit" className="text-gray-400 hover:text-white">
                <LogOut className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 border-r border-gray-800 bg-gray-900 p-6 hidden md:block">
          <nav className="space-y-6">
            <div>
              <h3 className="text-xs uppercase text-gray-400 font-semibold tracking-wider mb-3">Dashboard</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                  >
                    <User className="h-5 w-5" />
                    <span>Overview</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/bookings"
                    className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>My Bookings</span>
                  </Link>
                </li>
              </ul>
            </div>

            {session.user.role === "ADMIN" && (
              <div>
                <h3 className="text-xs uppercase text-gray-400 font-semibold tracking-wider mb-3">Admin</h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/admin/bookings"
                      className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                    >
                      <Calendar className="h-5 w-5" />
                      <span>All Bookings</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/messages"
                      className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <span>Messages</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="container max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  )
}
