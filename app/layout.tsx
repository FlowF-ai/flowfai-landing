import type { Metadata } from "next"
// import { Roboto_Mono } from "next/font/google"
import "./globals.css"
import ThemeProvider from "./components/ThemeProvider"
import React from "react"
import { config } from "@/lib/utils"

// const roboto = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['400', '700'],
//   variable: '--font-roboto-mono',
//   preload: true,
//   fallback: ['monospace'],
//   adjustFontFallback: true
// })

export const metadata: Metadata = {
  title: "FlowFai",
  description: "Your AI-powered DeFi platform",
  icons: {
    icon: config.isProd ? '/flowfai-landing/favicon.ico' : '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link 
        rel="icon" 
        href={config.isProd ? '/flowfai-landing/favicon.ico' : '/favicon.ico'} 
        sizes="any"
      />
        <style>{`
          /* Prevenir FOUT */
          html {
            visibility: visible;
            opacity: 1;
          }
        `}</style>
      </head>
      <body className="font-mono antialiased">{/* className={`${roboto.variable} font-mono antialiased`} */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}