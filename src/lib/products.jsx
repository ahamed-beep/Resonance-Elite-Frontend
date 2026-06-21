const API_URL = "http://127.0.0.1:8000/api";

export const categoryGroups = {
  "Car Audio": ["Amplifiers", "Subwoofers", "Speakers", "DSPs", "Cables & Wiring", "Accessories"],
  "Home Audio": ["Amplifiers", "Subwoofers", "Speakers"],
};

export const brands = [
  "Brax", "Blam", "Morel", "Gladen", "Helix",
  "Mosconi", "Match", "DD Audio", "DB Drive", "DB Link",
];

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`, { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return data.map((p) => ({
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
      ? p.images.map((img) => `http://127.0.0.1:8000${img}`)
      : ["https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1200&auto=format&fit=crop"],
  }));
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  const p = await res.json();
  return {
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
      ? p.images.map((img) => `http://127.0.0.1:8000${img}`)
      : ["https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1200&auto=format&fit=crop"],
  };
}