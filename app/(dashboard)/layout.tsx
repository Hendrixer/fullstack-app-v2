import '@/styles/global.css'
import { Inter } from '@next/font/google'
import Sidebar from '@/components/Sidebar'
import clsx from 'clsx'
import GlassPane from '@/components/GlassPane'

const inter = Inter({
  variable: '--font-inter',
})

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en" className={clsx(inter.variable, 'dark')}>
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
          <div>
            <header>header</header>
            <div>
              <aside>
                <Sidebar />
              </aside>
              <main>{children}</main>
            </div>
          </div>
        </GlassPane>
      </body>
    </html>
  )
}
