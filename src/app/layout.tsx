import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Stacq | Human-Curated Resources',
    template: '%s | Stacq',
  },
  description: 'A simple way to save, organize, and discover useful resources — curated by humans. Join the waitlist for early access.',
  metadataBase: new URL('https://stacq.app'),
  openGraph: {
    title: 'Stacq | Human-Curated Resources',
    description: 'Stop digging through SEO spam. Discover resources that actually helped people.',
    url: 'https://stacq.app',
    siteName: 'Stacq',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stacq | Human-Curated Resources',
    description: 'Stop digging through SEO spam. Discover resources that actually helped people.',
    creator: '@stacq_app',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export const viewport = {
  themeColor: '#1db954',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
