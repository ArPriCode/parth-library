export type User = {
  id: string
  name: string
  email: string
  role: string
}

export type Booking = {
  id: string
  userId: string
  planType: string
  startDate: Date
  endDate: Date
  status: string
  createdAt: Date
}

export type ContactMessage = {
  id: string
  name: string
  phone: string
  message: string
  createdAt: Date
  status: string
}
