import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Linux Admin Packages Prague | Professional Linux Administration Services",
  description: "Hire expert Linux administrators in Prague. Professional Linux admin packages with 24/7 support, server management, and technical expertise. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
