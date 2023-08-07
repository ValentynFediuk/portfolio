import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'public/main.css'
import cn from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: `Front-end developer's portfolio`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-black text-white')}>
      <div className='container mx-auto px-4'>
        {children}
      </div>
      </body>
    </html>
  )
}
