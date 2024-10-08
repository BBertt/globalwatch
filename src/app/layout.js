import localFont from "next/font/local";
import Head from "next/head";

import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GlobalWatch",
  description:
    "Get updated on the latest news of Global Crisis and those that are in need.",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <>
        <Navbar />
        <main>{children}</main>
      </>
    </html>
  );
};

export default Layout;
