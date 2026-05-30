import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const zynoFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-zyno',
});

export const metadata: Metadata = {
  title: "Mrinmoy's Portfolio",
  description: "Welcome to my portfolio website",
  icons: {
    icon: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${zynoFont.variable} scroll-smooth`}>
      <body>
        {children}
      </body>
    </html>
  )
}
