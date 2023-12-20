import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mAI Toolbox',
  description: 'Your All-in-One AI Solution. From image generation to a chat with language translation to having your own custom AI companion, unlock the power of AI with mAI Toolbox. Elevate creativity and simplify tasks with our user-friendly toolbox.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
