"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  XCircle,
  Truck,
  ShieldCheck,
  RotateCcw,
  MessageCircle,
} from "lucide-react";

export default function ProductDetailClient({ product, relatedProducts }) {
  const [quantity, setQuantity] = useState(1);

  const handleWhatsApp = () => {
    const qtyString = quantity > 1 ? ` (Quantity: ${quantity})` : "";
    const message = `Salam, I am interested in purchasing "${product.name}"${qtyString} [SKU: ${product.sku}]. Please let me know the availability status.`;

    window.open(
      `https://wa.me/923214334425?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white antialiased overflow-x-hidden">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 min-[1920px]:px-12 py-4 md:py-6"
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-xs md:text-sm min-[1920px]:text-base text-zinc-400 tracking-wide uppercase list-none p-0 m-0">
          <li>
            <Link href="/" className="hover:text-black transition-colors whitespace-nowrap">
              Home
            </Link>
          </li>

          <li aria-hidden="true" className="text-zinc-300 select-none">
            /
          </li>

          <li>
            <Link
              href="/products"
              className="hover:text-black transition-colors whitespace-nowrap"
            >
              Products
            </Link>
          </li>

          <li aria-hidden="true" className="text-zinc-300 select-none">
            /
          </li>

          <li
            className="text-zinc-800 font-medium normal-case max-w-[180px] sm:max-w-[300px] md:max-w-xs truncate"
            aria-current="page"
          >
            {product.name}
          </li>
        </ol>
      </nav>

      <main className="max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 min-[1920px]:px-12 pb-16 md:pb-20 min-[1920px]:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 min-[1920px]:gap-24 items-start">
          
          <div className="w-full lg:sticky lg:top-8">
            <div className="aspect-[4/3] w-full overflow-hidden border border-zinc-200 bg-zinc-50 rounded-sm group cursor-zoom-in relative">
              <Image
                src={product.images?.[0] || "/placeholder.webp"}
                alt={`${product.name} by ${product.brand} — ${product.category}`}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-contain object-center transition-transform duration-700 ease-out lg:group-hover:scale-105"
              />
            </div>
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-between space-y-8 lg:space-y-10">
            <div className="space-y-6 min-[1920px]:space-y-8">
              
              {/* Brand + Stock Status */}
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-3 border-b border-zinc-100 pb-3">
                  <span className="text-[10px] sm:text-xs min-[1920px]:text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                    {product.brand} &middot; {product.category}
                  </span>

                  {product.inStock ? (
                    <span className="flex items-center gap-1.5 text-[10px] sm:text-xs min-[1920px]:text-sm text-emerald-600 font-medium uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                      <CheckCircle
                        size={12}
                        className="stroke-[2.5]"
                        aria-hidden="true"
                      />
                      In Stock ({product.stock})
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-[10px] sm:text-xs min-[1920px]:text-sm text-zinc-400 font-medium uppercase tracking-wider bg-zinc-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                      <XCircle
                        size={12}
                        className="stroke-[2.5]"
                        aria-hidden="true"
                      />
                      Out of Stock
                    </span>
                  )}
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl min-[2560px]:text-5xl text-zinc-900 font-light tracking-tight leading-snug break-words">
                  {product.name}
                </h1>

                <p className="text-xs min-[1920px]:text-sm text-zinc-400 font-mono tracking-wider">
                  SKU: {product.sku}
                </p>
              </div>

              {/* Price Container */}
              <div className="border border-zinc-200/60 p-4 sm:p-5 min-[1920px]:p-7 rounded-sm bg-zinc-50/50">
                <span className="text-[10px] sm:text-xs min-[1920px]:text-sm font-semibold tracking-wider text-zinc-400 uppercase block mb-1">
                  Est. Investment
                </span>
                <div className="text-2xl sm:text-3xl min-[1920px]:text-4xl min-[2560px]:text-5xl font-light text-zinc-900 tracking-tight">
                  {product.priceFormatted}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h2 className="text-[10px] sm:text-xs min-[1920px]:text-sm font-bold tracking-widest text-zinc-900 uppercase">
                  Overview Description
                </h2>
                <p className="text-sm md:text-base min-[1920px]:text-lg min-[2560px]:text-xl text-zinc-600 leading-relaxed min-[1920px]:leading-8 font-light tracking-wide break-words">
                  {product.description}
                </p>
              </div>

              {/* Quantity + WhatsApp Controls */}
              <div className="space-y-4 pt-4 border-t border-zinc-100">
                {product.inStock && (
                  <div className="flex flex-wrap items-center justify-between sm:justify-start gap-4">
                    <span className="text-[10px] sm:text-xs min-[1920px]:text-sm font-bold tracking-widest text-zinc-900 uppercase whitespace-nowrap">
                      Quantity
                    </span>

                    <div
                      className="flex items-center border border-zinc-200 rounded-sm bg-white shadow-sm h-10 min-[1920px]:h-12"
                      role="group"
                      aria-label="Quantity selector"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setQuantity((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={quantity <= 1}
                        aria-label="Decrease quantity"
                        className="px-3 sm:px-4 h-full text-sm font-medium text-zinc-500 hover:bg-zinc-50 hover:text-black disabled:opacity-30 transition-all active:bg-zinc-100 flex items-center justify-center"
                      >
                        &minus;
                      </button>

                      <span
                        aria-live="polite"
                        aria-label={`Quantity: ${quantity}`}
                        className="px-3 text-sm font-mono font-medium text-zinc-900 select-none min-w-[2.5rem] text-center"
                      >
                        {quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setQuantity((prev) =>
                            Math.min(prev + 1, product.stock)
                          )
                        }
                        disabled={quantity >= product.stock}
                        aria-label="Increase quantity"
                        className="px-3 sm:px-4 h-full text-sm font-medium text-zinc-500 hover:bg-zinc-50 hover:text-black disabled:opacity-30 transition-all active:bg-zinc-100 flex items-center justify-center"
                      >
                        &#43;
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  disabled={!product.inStock}
                  aria-label={`Order ${product.name} via WhatsApp`}
                  className="w-full bg-zinc-950 text-white border border-zinc-950 py-3.5 sm:py-4 min-[1920px]:py-5 text-xs md:text-sm min-[1920px]:text-base font-semibold tracking-widest uppercase rounded-sm hover:bg-transparent hover:text-zinc-950 transition-all duration-300 ease-in-out flex items-center justify-center gap-2.5 disabled:opacity-30 disabled:pointer-events-none shadow-sm active:bg-zinc-900"
                >
                  <MessageCircle
                    size={15}
                    className="fill-current stroke-none"
                    aria-hidden="true"
                  />
                  <span>Secure via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Value Pillars - Wrapped and Grid Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 pt-6 border-t border-zinc-100 text-center">
              <div className="flex flex-col items-center gap-1.5 p-3 sm:p-2 hover:bg-zinc-50 rounded-sm transition-colors">
                <Truck
                  size={16}
                  className="text-zinc-400 stroke-[1.5]"
                  aria-hidden="true"
                />
                <span className="text-[10px] sm:text-xs min-[1920px]:text-sm tracking-wider text-zinc-600 font-medium whitespace-nowrap">
                  Premium Delivery
                </span>
              </div>

              <div className="flex flex-col items-center gap-1.5 p-3 sm:p-2 hover:bg-zinc-50 rounded-sm transition-colors">
                <ShieldCheck
                  size={16}
                  className="text-zinc-400 stroke-[1.5]"
                  aria-hidden="true"
                />
                <span className="text-[10px] sm:text-xs min-[1920px]:text-sm tracking-wider text-zinc-600 font-medium whitespace-nowrap">
                  100% Authentic
                </span>
              </div>

              <div className="flex flex-col items-center gap-1.5 p-3 sm:p-2 hover:bg-zinc-50 rounded-sm transition-colors">
                <RotateCcw
                  size={16}
                  className="text-zinc-400 stroke-[1.5]"
                  aria-hidden="true"
                />
                <span className="text-[10px] sm:text-xs min-[1920px]:text-sm tracking-wider text-zinc-600 font-medium whitespace-nowrap">
                  Elite Support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts?.length > 0 && (
          <section
            aria-label="Related products"
            className="mt-20 md:mt-24 min-[1920px]:mt-32 border-t border-zinc-100 pt-10 md:pt-12 min-[1920px]:pt-16"
          >
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div className="space-y-1">
                <h2 className="text-base md:text-lg min-[1920px]:text-2xl min-[2560px]:text-3xl font-light tracking-tight text-zinc-900">
                  Related Equipment
                </h2>
                <p className="text-xs min-[1920px]:text-base text-zinc-400">
                  Handpicked additions built for sound synergy
                </p>
              </div>

              <Link
                href="/products"
                className="text-xs min-[1920px]:text-base font-semibold tracking-widest uppercase text-zinc-400 hover:text-black transition-colors border-b border-transparent hover:border-black pb-0.5 shrink-0"
              >
                View All
              </Link>
            </div>

            {/* Grid Optimized: 1 column on Mobile, 2 on Tablet, 4 on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 min-[1920px]:gap-8 min-[2560px]:gap-12">
              {relatedProducts.map((p) => (
                <article
                  key={p.id}
                  className="group border border-zinc-100 bg-white rounded-sm overflow-hidden hover:border-zinc-300 transition-all duration-300 hover:shadow-sm"
                >
                  <Link
                    href={`/products/${p.id}`}
                    className="block aspect-[4/3] overflow-hidden bg-zinc-50 relative"
                    aria-label={`View ${p.name}`}
                  >
                    <Image
                      src={p.images?.[0] || "/placeholder.webp"}
                      alt={`${p.name} by ${p.brand}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      className="object-contain object-center transition-transform duration-700 ease-out lg:group-hover:scale-105"
                    />
                  </Link>

                  <div className="p-4 min-[1920px]:p-6 space-y-1.5">
                    <span className="text-[10px] min-[1920px]:text-sm font-bold tracking-widest text-zinc-400 uppercase block">
                      {p.brand}
                    </span>

                    <Link href={`/products/${p.id}`} className="block">
                      <h3 className="text-sm min-[1920px]:text-lg font-light text-zinc-800 group-hover:text-black transition-colors line-clamp-1 break-words">
                        {p.name}
                      </h3>
                    </Link>

                    <div className="text-xs min-[1920px]:text-base font-mono text-zinc-600 pt-1">
                      {p.priceFormatted}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}