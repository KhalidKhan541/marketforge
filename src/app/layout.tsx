import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { SidebarProvider } from '@/contexts/SidebarContext'
import { NotificationProvider } from '@/contexts/NotificationContext'
import { Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = { title: 'MarketForge — Enterprise E-commerce Platform', description: 'Products, Orders, Customers, Marketing, Payments, Shipping, Analytics, POS — all in one platform.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" suppressHydrationWarning><body className={inter.className}><ThemeProvider><SidebarProvider><NotificationProvider><Toaster position="top-right" />{children}</NotificationProvider></SidebarProvider></ThemeProvider></body></html>)
}
