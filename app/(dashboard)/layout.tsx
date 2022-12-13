import 'css-reset-and-normalize'
import '@/styles/global.css'
import { Inter } from '@next/font/google'
import styles from './dashboard.module.css'
import Sidebar from '@/components/Sidebar/Sidebar'

const inter = Inter({
  variable: '--font-inter',
})

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className={styles.body}>
        <div className={styles.dashboard}>
          <header className={styles.header}>header</header>
          <div className={styles.container}>
            <aside className={styles.sidebar}>
              <Sidebar />
            </aside>
            <main className={styles.main}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
