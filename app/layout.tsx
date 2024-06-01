import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme-provider"
import {
  ClerkProvider
} from '@clerk/nextjs'
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/lg-logo-1.png",
    shortcut: "/lg-logo-1.png",
    apple: "/lg-logo-4.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <ClerkProvider>
      <html lang={locale}>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
          suppressHydrationWarning={true}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
