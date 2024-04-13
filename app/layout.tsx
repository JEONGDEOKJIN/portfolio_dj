import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DJ Portfolio",
  description: "Generated by DJ NEXT.js 14 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <ThemeProvider
          attribute="class"
          // defaultTheme="dark" // dark 모드
          defaultTheme="system"  // light 모드
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}