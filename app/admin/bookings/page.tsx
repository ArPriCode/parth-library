import { getAllBookings, updateBookingStatus } from "@/app/actions/admin"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

export default async function AdminBookingsPage() {
  const bookings = await getAllBookings()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">All Bookings</h1>
          <p className="text-gray-400">Manage all student bookings</p>
        </div>

        <div className="space-y-4">
          {bookings.length === 0 ? (
            <Card className="border-none bg-gray-800 shadow-md">
              <CardContent className="p-6">
                <p className="text-gray-300">No bookings found.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {bookings.map((booking) => (
                <Card key={booking.id} className="border-none bg-gray-800 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <h3 className="font-medium text-white">{booking.user.name}</h3>
                        <p className="text-sm text-gray-400">{booking.user.email}</p>
                        <p className="text-sm text-gray-400 mt-2">
                          <span className="font-medium">Plan:</span> {booking.planType}
                        </p>
                        <p className="text-sm text-gray-400">
                          <span className="font-medium">Period:</span> {formatDate(booking.startDate)} -{" "}
                          {formatDate(booking.endDate)}
                        </p>
                        <p className="text-sm text-gray-400">
                          <span className="font-medium">Booked on:</span> {formatDate(booking.createdAt)}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium self-start ${
                            booking.status === "CONFIRMED"
                              ? "bg-green-900/30 text-green-400"
                              : booking.status === "PENDING"
                                ? "bg-amber-900/30 text-amber-400"
                                : "bg-red-900/30 text-red-400"
                          }`}
                        >
                          {booking.status}
                        </div>
                        <div className="flex gap-2 mt-2">
                          <form
                            action={async () => {
                              "use server"
                              await updateBookingStatus(booking.id, "CONFIRMED")
                            }}
                          >
                            <Button
                              type="submit"
                              className="bg-green-600 hover:bg-green-700 text-xs h-8"
                              disabled={booking.status === "CONFIRMED"}
                            >
                              Confirm
                            </Button>
                          </form>
                          <form
                            action={async () => {
                              "use server"
                              await updateBookingStatus(booking.id, "CANCELLED")
                            }}
                          >
                            <Button
                              type="submit"
                              className="bg-red-600 hover:bg-red-700 text-xs h-8"
                              disabled={booking.status === "CANCELLED"}
                            >
                              Cancel
                            </Button>
                          </form>
                        </div>
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
