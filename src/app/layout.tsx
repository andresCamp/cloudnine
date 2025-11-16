import { type Metadata } from 'next'
import { Outfit } from 'next/font/google'

import '@/styles/tailwind.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: 'Cloudnine',
    default: 'Cloudnine | Design-Led Web Projects',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full bg-neutral-950 text-base antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
