import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { getMyBookings } from "@/app/actions/booking"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const bookings = await getMyBookings()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Welcome, {session.user.name}</h1>
          <p className="text-gray-400">Manage your bookings and account</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Your Bookings</h2>

          {bookings.length === 0 ? (
            <Card className="border-none bg-gray-800 shadow-md">
              <CardContent className="p-6">
                <p className="text-gray-300">You don't have any bookings yet.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {bookings.map((booking) => (
                <Card key={booking.id} className="border-none bg-gray-800 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-white">{booking.planType}</h3>
                        <p className="text-sm text-gray-400">
                          {formatDate(booking.startDate)} - {formatDate(booking.endDate)}
                        </p>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          booking.status === "CONFIRMED"
                            ? "bg-green-900/30 text-green-400"
                            : booking.status === "PENDING"
                              ? "bg-amber-900/30 text-amber-400"
                              : "bg-red-900/30 text-red-400"
                        }`}
                      >
                        {booking.status}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
