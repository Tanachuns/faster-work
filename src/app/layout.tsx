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
  title: "Fasterwork.vercel.app แหล่งรวมฟรีแลนซ์สายซิ่ง",
  description: "แค่เร็วกว่าก็พอป่ะ",
  metadataBase: new URL("https://fasterwork.vercel.app/"),
  icons: "/meta.png",
  twitter: {
    card: "summary_large_image",
    title: "Fasterwork.vercel.app แหล่งรวมฟรีแลนซ์สายซิ่ง",
    description: "แค่เร็วกว่าก็พอป่ะ",
    creator: "@tanachuns",
    images: ["/meta.png"],
  },
  openGraph: {
    title: "Fasterwork.vercel.app แหล่งรวมฟรีแลนซ์สายซิ่ง",
    description: "แค่เร็วกว่าก็พอป่ะ",
    images: ["/meta.png"],
  },
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
