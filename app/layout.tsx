import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Head from 'next/head'
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MAGICCAT",
  description: "MAGICCAT - The magical wizard cat meme token on the ODIN.FUN platform",
  icons: {
    icon: '/cat1.png',
    shortcut: '/cat1.png',
    apple: '/cat1.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://magiccat.fun',
    title: 'MAGICCAT',
    description: 'The magical wizard cat meme token on the ODIN.FUN platform',
    siteName: 'MAGICCAT',
    images: [
      {
        url: '/cat1.png',
        width: 1200,
        height: 630,
        alt: 'MAGICCAT Token',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAGICCAT',
    description: 'The magical wizard cat meme token on the ODIN.FUN platform',
    images: ['/cat1.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/cat1.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/cat1.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/cat1.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://magiccat.fun" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiccat.fun" />
        <meta property="og:title" content="MAGICCAT" />
        <meta property="og:description" content="The magical wizard cat meme token on the ODIN.FUN platform" />
        <meta property="og:image" content="/cat1.png" />
        <meta property="og:site_name" content="MAGICCAT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MAGICCAT" />
        <meta name="twitter:description" content="The magical wizard cat meme token on the ODIN.FUN platform" />
        <meta name="twitter:image" content="/cat1.png" />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </>
  )
}

import './globals.css'