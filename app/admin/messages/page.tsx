import { getAllContactMessages, updateMessageStatus } from "@/app/actions/admin"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

export default async function AdminMessagesPage() {
  const messages = await getAllContactMessages()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Contact Messages</h1>
          <p className="text-gray-400">Manage all contact form submissions</p>
        </div>

        <div className="space-y-4">
          {messages.length === 0 ? (
            <Card className="border-none bg-gray-800 shadow-md">
              <CardContent className="p-6">
                <p className="text-gray-300">No messages found.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {messages.map((message) => (
                <Card key={message.id} className="border-none bg-gray-800 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <h3 className="font-medium text-white">{message.name}</h3>
                        <p className="text-sm text-gray-400">{message.phone}</p>
                        <div className="mt-4 p-4 bg-gray-900 rounded-md">
                          <p className="text-gray-300">{message.message}</p>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                          <span className="font-medium">Received:</span> {formatDate(message.createdAt)}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium self-start ${
                            message.status === "READ"
                              ? "bg-blue-900/30 text-blue-400"
                              : message.status === "REPLIED"
                                ? "bg-green-900/30 text-green-400"
                                : "bg-amber-900/30 text-amber-400"
                          }`}
                        >
                          {message.status}
                        </div>
                        <div className="flex gap-2 mt-2">
                          <form
                            action={async () => {
                              "use server"
                              await updateMessageStatus(message.id, "READ")
                            }}
                          >
                            <Button
                              type="submit"
                              className="bg-blue-600 hover:bg-blue-700 text-xs h-8"
                              disabled={message.status !== "UNREAD"}
                            >
                              Mark as Read
                            </Button>
                          </form>
                          <form
                            action={async () => {
                              "use server"
                              await updateMessageStatus(message.id, "REPLIED")
                            }}
                          >
                            <Button
                              type="submit"
                              className="bg-green-600 hover:bg-green-700 text-xs h-8"
                              disabled={message.status === "REPLIED"}
                            >
                              Mark as Replied
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
