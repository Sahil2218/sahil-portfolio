import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sahil — Portfolio",
  description: "Developer Portfolio built with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0B0B0C] text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}
