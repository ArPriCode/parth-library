import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { BookingForm } from "@/components/booking-form"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, ArrowLeft } from "lucide-react"
import { Toaster } from "@/components/toaster"

export default async function BookPlanPage({
  params,
}: {
  params: { plan: string }
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login?callbackUrl=/book/" + params.plan)
  }

  // Decode the plan type from the URL
  const planType = decodeURIComponent(params.plan)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="w-full border-b border-gray-800 bg-black py-4">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">Parth Library</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container max-w-md">
          <Link href="/#pricing" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to pricing</span>
          </Link>

          <Card className="border-none bg-gray-800 shadow-lg">
            <CardContent className="p-6 space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold">Book Your Spot</h1>
                <p className="text-gray-400">Complete your booking for {planType}</p>
              </div>

              <BookingForm planType={planType} />
            </CardContent>
          </Card>
        </div>
      </main>

      <Toaster />
    </div>
  )
}
