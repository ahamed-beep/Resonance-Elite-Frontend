// app/layout.jsx

import { Suspense } from "react";
import GlobalLoader from "@/Components/GlobalLoader";
import "./globals.css";

export const metadata = {
  title: "Resonance Elite | Premium Car & Home Audio Pakistan",
  description:
    "Resonance Elite offers premium car and home audio products and services in Pakistan — Helix, Brax, Morel, Mosconi, DD Audio and more.",
  verification: {
    google: "aRXEfUWYLmuSGlZXDBwSj1EMJ34TTVmETkZ868xKNQk",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Suspense fallback={null}>
          <GlobalLoader />
        </Suspense>
        {children}
      </body>
    </html>
  );
}