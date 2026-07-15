import LenisProvider from "../providers/LenisProvider";
import "./globals.css";
 import BackgroundParticles from "../components/BackgroundParticles"
import Cursor from "../components/Cursor";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/providers/ThemeProvider";
import Loader from "@/components/Loader";

export const metadata = {
  title: "Abere Oluwatomide | Full Stack Developer",
  description: "Modern 3D Portfolio built with Next.js and Three.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider> 
        <BackgroundParticles />
        <Cursor />
    
         <LenisProvider>
          {children}
         </LenisProvider> 
         </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}