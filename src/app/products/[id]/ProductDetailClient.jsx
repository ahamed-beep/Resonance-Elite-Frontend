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
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white antialiased">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-6">
        <ol className="flex items-center gap-2 text-xs md:text-sm text-zinc-400 tracking-wide uppercase list-none p-0 m-0">
          <li>
            <Link href="/" className="hover:text-black transition-colors duration-200">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-zinc-300">/</li>
          <li>
            <Link href="/products" className="hover:text-black transition-colors duration-200">
              Products
            </Link>
          </li>
          <li aria-hidden="true" className="text-zinc-300">/</li>
          <li className="text-zinc-800 font-medium normal-case line-clamp-1" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Image */}
          <div className="w-full">
            <div className="aspect-[4/3] overflow-hidden border border-zinc-200 bg-zinc-50 rounded-sm group cursor-zoom-in relative">
              <img
                src={product.images[0]}
                alt={`${product.name} by ${product.brand} — ${product.category}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out lg:group-hover:scale-110"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between lg:h-full space-y-8 lg:space-y-0">
            <div className="space-y-6">

              {/* Brand + Stock */}
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-3 border-b border-zinc-100 pb-3">
                  <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                    {product.brand} &middot; {product.category}
                  </span>
                  {product.inStock ? (
                    <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full">
                      <CheckCircle size={12} className="stroke-[2.5]" aria-hidden="true" />
                      In Stock ({product.stock})
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium uppercase tracking-wider bg-zinc-100 px-2.5 py-1 rounded-full">
                      <XCircle size={12} className="stroke-[2.5]" aria-hidden="true" />
                      Out of Stock
                    </span>
                  )}
                </div>

                <h1 className="text-xl md:text-2xl text-zinc-900 font-light tracking-tight leading-snug">
                  {product.name}
                </h1>
                <p className="text-xs text-zinc-400 font-mono tracking-wider">SKU: {product.sku}</p>
              </div>

              {/* Price */}
              <div className="border border-zinc-200/60 p-5 rounded-sm bg-zinc-50/50">
                <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase block mb-1">
                  Est. Investment
                </span>
                <div className="text-2xl font-light text-zinc-900 tracking-tight">
                  {product.priceFormatted}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold tracking-widest text-zinc-900 uppercase">
                  Overview Description
                </h2>
                <p className="text-sm text-zinc-600 leading-7 font-light tracking-wide">
                  {product.description}
                </p>
              </div>

              {/* Quantity + WhatsApp */}
              <div className="space-y-4 pt-4 border-t border-zinc-100">
                {product.inStock && (
                  <div className="flex items-center justify-between sm:justify-start gap-6">
                    <span className="text-xs font-bold tracking-widest text-zinc-900 uppercase">
                      Quantity
                    </span>
                    <div className="flex items-center border border-zinc-200 rounded-sm bg-white shadow-sm" role="group" aria-label="Quantity selector">
                      <button
                        onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                        disabled={quantity <= 1}
                        aria-label="Decrease quantity"
                        className="px-3.5 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-50 hover:text-black disabled:opacity-30 transition-all active:bg-zinc-100"
                      >
                        &minus;
                      </button>
                      <span
                        aria-live="polite"
                        aria-label={`Quantity: ${quantity}`}
                        className="px-4 text-sm font-mono font-medium text-zinc-900 select-none min-w-[2rem] text-center"
                      >
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity((prev) => Math.min(prev + 1, product.stock))}
                        disabled={quantity >= product.stock}
                        aria-label="Increase quantity"
                        className="px-3.5 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-50 hover:text-black disabled:opacity-30 transition-all active:bg-zinc-100"
                      >
                        &#43;
                      </button>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleWhatsApp}
                  disabled={!product.inStock}
                  aria-label={`Order ${product.name} via WhatsApp`}
                  className="w-full bg-zinc-950 text-white border border-zinc-950 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-transparent hover:text-zinc-950 transition-all duration-300 ease-in-out flex items-center justify-center gap-2.5 disabled:opacity-30 disabled:pointer-events-none shadow-sm active:bg-zinc-900"
                >
                  <MessageCircle size={14} className="fill-current stroke-none" aria-hidden="true" />
                  <span>Secure via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Value Pillars */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 pt-8 border-t border-zinc-100 text-center">
              <div className="flex flex-col items-center gap-1.5 p-2 hover:bg-zinc-50 rounded-sm transition-colors duration-200">
                <Truck size={16} className="text-zinc-400 stroke-[1.5]" aria-hidden="true" />
                <span className="text-xs tracking-wider text-zinc-600 font-medium">Premium Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2 hover:bg-zinc-50 rounded-sm transition-colors duration-200">
                <ShieldCheck size={16} className="text-zinc-400 stroke-[1.5]" aria-hidden="true" />
                <span className="text-xs tracking-wider text-zinc-600 font-medium">100% Authentic</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2 hover:bg-zinc-50 rounded-sm transition-colors duration-200">
                <RotateCcw size={16} className="text-zinc-400 stroke-[1.5]" aria-hidden="true" />
                <span className="text-xs tracking-wider text-zinc-600 font-medium">Elite Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section aria-label="Related products" className="mt-24 border-t border-zinc-100 pt-12">
            <div className="flex items-end justify-between mb-8">
              <div className="space-y-1">
                <h2 className="text-md md:text-lg font-light tracking-tight text-zinc-900">
                  Related Equipment
                </h2>
                <p className="text-xs text-zinc-400">Handpicked additions built for sound synergy</p>
              </div>
              <Link
                href="/products"
                className="text-xs font-semibold tracking-widest uppercase text-zinc-400 hover:text-black transition-colors duration-200 border-b border-transparent hover:border-black pb-0.5"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      src={p.images[0]}
                      alt={`${p.name} by ${p.brand}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-700 ease-out lg:group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-4 space-y-1.5">
                    <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase block">
                      {p.brand}
                    </span>
                    <Link href={`/products/${p.id}`} className="block">
                      <h3 className="text-sm font-light text-zinc-800 group-hover:text-black transition-colors duration-200 line-clamp-1">
                        {p.name}
                      </h3>
                    </Link>
                    <div className="text-xs font-mono text-zinc-600 pt-1">{p.priceFormatted}</div>
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