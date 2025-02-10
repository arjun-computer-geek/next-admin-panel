import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import NavbarSidebarLayout from "@/components/NavbarSidebarLayout";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin dashboard",
  description: "A simple admin dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
      >
        <NavbarSidebarLayout>
          {children}
        </NavbarSidebarLayout>
      </body>
    </html>
  );
}
