import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '棋趣世外 - 创意棋盘游戏',
  description: '多功能创意棋盘游戏，让孩子们在游戏中学习与成长',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <footer className="main-footer">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 棋趣世外. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 