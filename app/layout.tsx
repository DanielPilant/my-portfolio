// app/layout.tsx
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],            // Suitable for English/ASCII text
  variable: "--font-jetbrains",  // The CSS var name that will be connected to Tailwind
  display: "swap",
});

export const metadata = {
  title: "Daniel Pilant — Portfolio",
  description: "Building products. Leading communities. Learning endlessly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="ltr" suppressHydrationWarning className={jetbrainsMono.variable}>
      <body className="bg-neutral-950 text-neutral-50 antialiased transition-colors duration-300">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
