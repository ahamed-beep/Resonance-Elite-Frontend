import "./globals.css";

export const metadata = {
  title: "My App",
  description: "My App Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{/* ← bas ye add karo */}
        {children}
      </body>
    </html>
  );
}