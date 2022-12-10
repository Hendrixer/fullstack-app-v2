import 'css-reset-and-normalize'
import '@/styles/global.css'
import { Inter } from '@next/font/google'

const inter = Inter({
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
