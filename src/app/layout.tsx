import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Sen } from "next/font/google";
import FooterTest from "@/components/footer/FooterTest";
import Document from "./_document";
import Preloader from "@/components/preloader/Preloader";

export const metadata: Metadata = {
  title: "Newtok Technologies",
  description: "Technology for smart Inventions",
  icons: {
    icon: ["/favicon/favicon.svg"],
    apple: ["/favicon/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon/apple-touch-icon.png"],
  },
  manifest: "/favicon/site.webmanifest",
};
const sen = Sen({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:alt" content="thumbnail" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
      </head>
      <body className={sen.className + " bg-backgound relative"}>
        <Preloader>
          <Navbar />
          {children}
          <FooterTest />
          <Document />
        </Preloader>
      </body>
    </html>
  );
}
