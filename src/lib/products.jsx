const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const categoryGroups = {
  "Car Audio": ["Amplifiers", "Subwoofers", "Speakers", "DSPs", "Cables & Wiring", "Accessories"],
  "Home Audio": ["Amplifiers", "Subwoofers", "Speakers"],
};

export const brands = [
  "Brax", "Blam", "Morel", "Gladen", "Helix",
  "Mosconi", "Match", "DD Audio", "DB Drive", "DB Link",
];

const mapProductData = (p) => ({
  id: p.id,
  name: p.name,
  brand: p.brand,
  sku: p.sku,
  group: p.audio_type,
  category: p.category,
  description: p.description,
  price: p.price,
  priceFormatted: `PKR ${Number(p.price).toLocaleString()}`,
  stock: p.stock_quantity,
  inStock: p.stock_status === "in_stock",
  warehouse: p.warehouse,
  images: p.images?.length
    ? p.images.map((img) => img.startsWith('http') ? img : `${BACKEND_URL}${img}`)
    : ["https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1200&auto=format&fit=crop"],
});

export async function getProducts() {
  try {
    const res = await fetch(`${API_URL}/products`, { cache: "no-store" });
    if (!res.ok) return [];

    const data = await res.json();
    return Array.isArray(data) ? data.map(mapProductData) : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(`${API_URL}/products/${id}`, { cache: "no-store" });
    if (!res.ok) return null;

    const p = await res.json();
    return p ? mapProductData(p) : null;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}