import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Daniel Pilant — Portfolio",
  description: "Building products. Leading communities. Learning endlessly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="ltr" suppressHydrationWarning>
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
