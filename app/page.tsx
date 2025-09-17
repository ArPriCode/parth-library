import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Wifi, Droplet, Zap, BookOpen, Sun, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Toaster } from "@/components/toaster"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">Parth Library</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              About
            </Link>
            <Link href="#facilities" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Facilities
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Pricing
            </Link>
            <Link href="#location" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Location
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block">
              <Button variant="outline" className="gap-2 border-gray-700 text-white hover:bg-gray-800">
                Login
              </Button>
            </Link>
            <Link href="#pricing">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Book Your Spot</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-emerald-900/70 z-10" />
          <div className="relative h-[70vh] md:h-[80vh]">
            <Image
              src="/images/library-interior.jpg"
              alt="Parth Library Study Space"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container">
              <div className="max-w-2xl space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-white">
                  Fuel Your Focus. <br />
                  Empower Your Future.
                </h1>
                <p className="text-lg text-white/90 max-w-[600px]">
                  A serene and fully equipped study hub for ambitious students preparing for competitive exams.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      Book Your Spot
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 max-w-md">
                  <blockquote className="italic text-white">
                    "A room without books is like a body without a soul."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-900">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-emerald-900/50 px-3 py-1 text-sm text-emerald-400">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  A Peaceful Haven for Serious Learners
                </h2>
                <p className="text-gray-300 text-lg">
                  Parth Library is a serene and fully equipped study hub guided by Surendra Sir. With uninterrupted
                  WiFi, drinking water, natural lighting, and peaceful surroundings, it's the perfect destination for
                  ambitious students preparing for SSC, UPSC, CGL, Banking, and more.
                </p>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-emerald-900/50 p-2">
                    <BookOpen className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Lead Mentor</h3>
                    <p className="text-gray-300">Dr.Surendra Sir</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-emerald-900/50 p-2">
                    <Phone className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Contact</h3>
                    <p className="text-gray-300">+91 95809 82613</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-emerald-900/50 p-2">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Location</h3>
                    <p className="text-gray-300">R2MJ+3R4, Babhnauli, Babhanouli, Uttar Pradesh 277121</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Photo%20on%2018-05-25%20at%2010.12%E2%80%AFPM.jpg-sVris5Evhqmd2klonJky6kmHgEjh6E.jpeg"
                  alt="Parth Library Study Space"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-emerald-900/50 px-3 py-1 text-sm text-emerald-400">
                Facilities
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Everything You Need to Excel
              </h2>
              <p className="text-gray-300 text-lg">
                Our library is equipped with all the amenities needed for focused and productive study sessions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="border-none bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-emerald-900/50 p-4">
                    <Wifi className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="font-medium text-lg text-white">Free WiFi</h3>
                  <p className="text-gray-300 text-sm">Uninterrupted high-speed internet for research</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-emerald-900/50 p-4">
                    <Droplet className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="font-medium text-lg text-white">24/7 Water Supply</h3>
                  <p className="text-gray-300 text-sm">Clean drinking water available at all times</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-emerald-900/50 p-4">
                    <Sun className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="font-medium text-lg text-white">Natural Lighting</h3>
                  <p className="text-gray-300 text-sm">Well-lit environment to reduce eye strain</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-emerald-900/50 p-4">
                    <Zap className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="font-medium text-lg text-white">Power Backup</h3>
                  <p className="text-gray-300 text-sm">Continuous electricity with backup systems</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-emerald-900/50 p-4">
                    <Clock className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="font-medium text-lg text-white">Flexible Hours</h3>
                  <p className="text-gray-300 text-sm">Extended operating hours for your convenience</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-emerald-900/50 p-4">
                    <BookOpen className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="font-medium text-lg text-white">Daily Newspapers</h3>
                  <p className="text-gray-300 text-sm">Stay updated with current affairs</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-emerald-900/50 p-4">
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
                      className="h-6 w-6 text-emerald-400"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium text-lg text-white">Quiet Environment</h3>
                  <p className="text-gray-300 text-sm">Peaceful atmosphere for deep concentration</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-emerald-900/50 p-4">
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
                      className="h-6 w-6 text-emerald-400"
                    >
                      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium text-lg text-white">Ergonomic Furniture</h3>
                  <p className="text-gray-300 text-sm">Comfortable seating for long study sessions</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px] max-w-4xl mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-05-18-22-01-44.jpg-qZG9XSKZ34Dr6CqWuZtWDfFt3yKDsf.jpeg"
                  alt="Student studying at Parth Library"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-gray-900">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-emerald-900/50 px-3 py-1 text-sm text-emerald-400">
                Pricing Plans
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Affordable Plans for Everyone
              </h2>
              <p className="text-gray-300 text-lg">Choose a plan that works best for your study needs and schedule.</p>
              <div className="bg-amber-900/30 text-amber-400 px-4 py-2 rounded-md inline-block mt-4">
                <p className="font-medium">Limited Seats Available!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="border-none bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">Monthly (12 Hours)</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">₹500</span>
                    <span className="text-gray-300 ml-2">/month</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-emerald-400 mr-2" />
                      <span className="text-gray-300">30 days access</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-emerald-400 mr-2" />
                      <span className="text-gray-300">12 hours per day</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-emerald-400 mr-2" />
                      <span className="text-gray-300">All amenities included</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-emerald-400 mr-2" />
                      <span className="text-gray-300">Mentor guidance (weekly)</span>
                    </li>
                  </ul>
                  <Link href="/login">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none bg-gradient-to-br from-gray-800 to-gray-900 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs inline-block mb-2">
                    MOST POPULAR
                  </div>
                  <h3 className="text-xl font-bold text-white">Monthly (24 Hours)</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">₹800</span>
                    <span className="text-gray-300 ml-2">/month</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-emerald-400 mr-2" />
                      <span className="text-gray-300">30 days access</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-emerald-400 mr-2" />
                      <span className="text-gray-300">24 hours per day</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-emerald-400 mr-2" />
                      <span className="text-gray-300">All amenities included</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-emerald-400 mr-2" />
                      <span className="text-gray-300">Reserved seating</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-emerald-400 mr-2" />
                      <span className="text-gray-300">Mentor guidance (bi-weekly)</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-emerald-400 mr-2" />
                      <span className="text-gray-300">Study material access</span>
                    </li>
                  </ul>
                  <Link href="/login">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-emerald-900/50 px-3 py-1 text-sm text-emerald-400">
                Our Location
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Find Us Easily</h2>
              <p className="text-gray-300 text-lg">
                We're conveniently located on R2MJ+3R4, Babhnauli, Babhanouli, Uttar Pradesh 277121, Near BSNL Tower.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-emerald-900/50 p-2">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Address</h3>
                    <p className="text-gray-300">
                      R2MJ+3R4, Babhnauli, Babhanouli, Uttar Pradesh 277121, Near BSNL Tower
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-emerald-900/50 p-2">
                    <Clock className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Operating Hours</h3>
                    <p className="text-gray-300">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-300">Sunday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-emerald-900/50 p-2">
                    <Phone className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Contact</h3>
                    <p className="text-gray-300">+91 95809 82613</p>
                  </div>
                </div>
                <div className="pt-4">
                  <a
                    href="https://maps.google.com/?q=R2MJ%2B3R4+Babhnauli+Babhanouli+Uttar+Pradesh+277121"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                      <MapPin className="h-4 w-4" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden border-4 border-gray-800 shadow-xl relative">
                <Image src="/images/map-placeholder.jpg" alt="Map to Parth Library" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://maps.google.com/?q=R2MJ%2B3R4+Babhnauli+Babhanouli+Uttar+Pradesh+277121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <MapPin className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-emerald-900/50 px-3 py-1 text-sm text-emerald-400">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Get in Touch</h2>
                <p className="text-gray-300 text-lg">
                  Have questions or want to book a spot? Reach out to us through any of these channels.
                </p>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-emerald-900/50 p-2">
                    <Phone className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Call Us</h3>
                    <p className="text-gray-300">+91 95809 82613</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-emerald-900/50 p-2">
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
                      className="h-6 w-6 text-emerald-400"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">WhatsApp</h3>
                    <p className="text-gray-300">+91 95809 82613</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-emerald-900/50 p-2">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Visit Us</h3>
                    <p className="text-gray-300">Garwar Ratsar Road Near BSNL Tower</p>
                  </div>
                </div>
                <div className="pt-4 flex gap-4">
                  <a href="tel:+919580982613">
                    <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                  <a href="https://wa.me/919580982613" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2 border-gray-700 text-white hover:bg-gray-800">
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
                        className="h-4 w-4"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <Card className="border-none bg-gray-800 shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">Send us a Message</h3>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-emerald-400" />
                <span className="text-xl font-bold">Parth Library</span>
              </div>
              <p className="text-gray-400 mb-4">A serene and fully equipped study hub for ambitious students.</p>
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Parth Library. All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#facilities" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#location" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Location
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Information</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  <span className="text-gray-400">R2MJ+3R4, Babhnauli, Babhanouli, Uttar Pradesh 277121</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span className="text-gray-400">+91 95809 82613</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span className="text-gray-400">Mon-Sat: 8:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Call Button */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a href="tel:+919580982613">
          <Button size="lg" className="rounded-full h-14 w-14 bg-emerald-600 hover:bg-emerald-700 shadow-lg">
            <Phone className="h-6 w-6" />
            <span className="sr-only">Call Now</span>
          </Button>
        </a>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a href="https://wa.me/919580982613" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="rounded-full h-14 w-14 bg-green-600 hover:bg-green-700 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              strokeWidth="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="sr-only">WhatsApp</span>
          </Button>
        </a>
      </div>

      <Toaster />
    </div>
  )
}
