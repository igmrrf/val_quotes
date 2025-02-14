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
  title: "Valentine's Quote Generator",
  description: "Generate sweet and personalized Valentine's Day messages for your loved ones",
  keywords: ["valentine", "love quotes", "romance", "valentine's day", "AI quote generator"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Valentine's Quote Generator",
    description: "Generate sweet and personalized Valentine's Day messages for your loved ones",
    url: "https://your-domain.com",
    siteName: "Valentine's Quote Generator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Valentine's Quote Generator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentine's Quote Generator",
    description: "Generate sweet and personalized Valentine's Day messages for your loved ones",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
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
