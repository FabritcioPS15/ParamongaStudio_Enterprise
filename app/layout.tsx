import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Footer, Navbar } from '@/components/site'

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: { default: 'Paramonga Grupo Editorial', template: '%s | Paramonga' },
  description: 'Una editorial peruana que publica historias, ideas y memoria.',
  openGraph: {
    title: 'Paramonga Grupo Editorial',
    description: 'Historias que abren conversaciones.',
    type: 'website',
  },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#FBF7EF' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable} bg-[#FBF7EF] text-[#4A1942] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
