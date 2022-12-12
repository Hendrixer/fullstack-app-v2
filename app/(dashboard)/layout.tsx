import 'css-reset-and-normalize'
import '@/styles/global.css'
import { Inter } from '@next/font/google'

const inter = Inter({
  variable: '--font-inter',
})

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        dash
        {children}
      </body>
    </html>
  )
}
