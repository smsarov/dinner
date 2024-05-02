import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "deener",
  description: "you are what you eat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </head>
      <body className={inter.className}>
        <div className="w-screen h-dvh flex flex-col items-center">
          <Header></Header>
          {children}
        </div>
      </body>
    </html>
  );
}
