import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";
import Navbar from "@/Components/Home/Navbar";
import Footer from "@/Components/Home/Footer";

export async function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return {
      title: "Product Not Found | Resonance Elite",
    };
  }

  return {
    title: `${product.name} | ${product.brand} | Resonance Elite`,
    description: `${product.description} Buy ${product.name} by ${product.brand} at ${product.priceFormatted}. SKU: ${product.sku}. Available at Resonance Elite Pakistan.`,
    keywords: [
      product.name,
      product.brand,
      product.category,
      product.group,
      `${product.brand} ${product.category}`,
      "buy car audio Pakistan",
      "Resonance Elite",
    ],
    openGraph: {
      title: `${product.name} | ${product.brand} | Resonance Elite`,
      description: `${product.description} Priced at ${product.priceFormatted}.`,
      url: `https://resonanceelite.com/products/${id}`,
      siteName: "Resonance Elite",
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 630,
          alt: `${product.name} by ${product.brand}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${product.brand} | Resonance Elite`,
      description: `${product.description} Priced at ${product.priceFormatted}.`,
      images: [product.images[0]],
    },
    alternates: {
      canonical: `https://resonanceelite.com/products/${id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) notFound();

  const relatedProducts = products
    .filter(
      (p) =>
        String(p.id) !== String(id) &&
        (p.group === product.group ||
          p.category === product.category ||
          p.brand === product.brand)
    )
    .slice(0, 4);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    image: product.images[0],
    offers: {
      "@type": "Offer",
      priceCurrency: "PKR",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Resonance Elite",
      },
    },
    category: `${product.group} > ${product.category}`,
    url: `https://resonanceelite.com/products/${id}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Navbar/>
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      <Footer/>
    </>
  );
}