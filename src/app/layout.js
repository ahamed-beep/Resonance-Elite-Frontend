// app/layout.jsx

import "./globals.css";

export const metadata = {
  title: "Resonance Elite | Premium Car & Home Audio Pakistan",
  description:
    "Resonance Elite offers premium car and home audio products and services in Pakistan — Helix, Brax, Morel, Mosconi, DD Audio and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}