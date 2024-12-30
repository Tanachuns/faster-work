import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Fasterwork.vercel.app แหล่งรวมฟรีแลนซ์ใจร้อน นอนคุก อย่าซีเล็ง เดี๋ยวซู้หริ่ง",
  description: "เร็วกว่าก็พอป่ะ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Fasterwork.vercel.app แหล่งรวมฟรีแลนซ์ใจร้อน นอนคุก อย่าซีเล็ง
          เดี๋ยวซู้หริ่ง
        </title>
        <meta
          name="title"
          content="Fasterwork.vercel.app แหล่งรวมฟรีแลนซ์ใจร้อน นอนคุก อย่าซีเล็ง เดี๋ยวซู้หริ่ง"
        />
        <meta
          name="description"
          content="คัดเฉพาะฟรีแลนซ์ผู้เชี่ยวชาญกว่า 35 ล้านคน อริสระภาพทางการจ้างงานและความรวดเร็ว ไม่เสียเวลาคัดกรอง ไม่เสียเวลาตรวจสอบ ไม่เสียเวลารับประกัน"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fasterwork.vercel.app/" />
        <meta
          property="og:title"
          content="Fasterwork.vercel.app แหล่งรวมฟรีแลนซ์ใจร้อน นอนคุก อย่าซีเล็ง เดี๋ยวซู้หริ่ง"
        />
        <meta
          property="og:description"
          content="คัดเฉพาะฟรีแลนซ์ผู้เชี่ยวชาญกว่า 35 ล้านคน อริสระภาพทางการจ้างงานและความรวดเร็ว ไม่เสียเวลาคัดกรอง ไม่เสียเวลาตรวจสอบ ไม่เสียเวลารับประกัน"
        />
        <meta property="og:image" content="/meta.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fasterwork.vercel.app/" />
        <meta
          property="twitter:title"
          content="Fasterwork.vercel.app แหล่งรวมฟรีแลนซ์ใจร้อน นอนคุก อย่าซีเล็ง เดี๋ยวซู้หริ่ง"
        />
        <meta
          property="twitter:description"
          content="คัดเฉพาะฟรีแลนซ์ผู้เชี่ยวชาญกว่า 35 ล้านคน อริสระภาพทางการจ้างงานและความรวดเร็ว ไม่เสียเวลาคัดกรอง ไม่เสียเวลาตรวจสอบ ไม่เสียเวลารับประกัน"
        />
        <meta property="twitter:image" content="/meta.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
