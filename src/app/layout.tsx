import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Sb-Ads-Income',
  description: 'Advertising / Affiliate network dashboard'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-gray-50 text-gray-800">
          <div className="max-w-4xl mx-auto p-6">{children}</div>
        </main>
      </body>
    </html>
  )
}
