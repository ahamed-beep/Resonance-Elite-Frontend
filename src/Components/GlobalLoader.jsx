"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "3px",
        backgroundColor: "#000",
        zIndex: 9999,
        animation: "globalLoaderBar 0.4s ease-in-out",
      }}
    >
      <style>{`
        @keyframes globalLoaderBar {
          0% { width: 0%; opacity: 1; }
          100% { width: 100%; opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}