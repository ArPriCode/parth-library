# 📚 Parth Library

A modern, full-stack library management system built with Next.js, TypeScript, and modern web technologies.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Authentication**: Secure user authentication with NextAuth.js
- **Database**: Type-safe database access with Prisma
- **UI Components**: Beautiful, accessible components with Radix UI and shadcn/ui
- **Responsive Design**: Mobile-first, responsive layout with Tailwind CSS
- **Form Handling**: Robust form management with React Hook Form and Zod validation
- **Data Visualization**: Interactive charts with Recharts
- **Notifications**: Toast notifications with Sonner

## 🛠️ Tech Stack

- **Frontend**: 
  - Next.js 15
  - React 19
  - TypeScript
  - Tailwind CSS
  - Radix UI
  - shadcn/ui

- **Backend**:
  - Next.js API Routes
  - Prisma (ORM)
  - NextAuth.js

- **Database**:
  - Prisma (supports PostgreSQL, MySQL, SQLite, etc.)

- **Development Tools**:
  - ESLint
  - Prettier
  - TypeScript
  - PostCSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or pnpm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Arun2024-AI/parth-library.git
   cd parth-library
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Update the environment variables in .env.local
   ```

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
parth-library/
├── app/                  # App router pages and layouts
├── components/           # Reusable UI components
├── lib/                  # Utility functions and configurations
├── prisma/               # Prisma schema and migrations
├── public/               # Static assets
└── styles/               # Global styles
```

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines to get started.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)

## 📬 Contact

Project Link: [https://github.com/Arun2024-AI/parth-library](https://github.com/Arun2024-AI/parth-library)

---

Built with ❤️ by [Your Name]
