import { getMyBookings } from "@/app/actions/booking"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

export default async function BookingsPage() {
  const bookings = await getMyBookings()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">My Bookings</h1>
          <p className="text-gray-400">View and manage your bookings</p>
        </div>

        <div className="space-y-4">
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
                        <p className="text-sm text-gray-400 mt-2">
                          <span className="font-medium">Booked on:</span> {formatDate(booking.createdAt)}
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
