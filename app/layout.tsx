import 'css-reset-and-normalize'
import './global.css'
import { Inter } from '@next/font/google'

const inter = Inter()

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
