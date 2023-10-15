import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import { Sen } from 'next/font/google'
import FooterTest from "@/components/footer/FooterTest";


export const metadata: Metadata = {
  title: "Newtok Technologies",
  description: "Technology for smart Inventions",
  icons: {
    icon: ['/favicon/favicon.svg'],
    apple: ['/favicon/apple-touch-icon.png?v=4'],
    shortcut: ['/favicon/apple-touch-icon.png']
  },
  manifest: '/favicon/site.webmanifest'
};

const sen = Sen({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
      </head>
      <body className={ sen.className + " bg-backgound "}>
        <Navbar />
        {children}
        <FooterTest />
      </body>
    </html>
  );
}
