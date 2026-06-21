"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, X, Upload } from "lucide-react";
import api from "@/lib/axios";

const BRANDS = ["Brax", "Blam", "Morel", "Gladen", "Helix", "Mosconi", "Match", "DD Audio", "DB Drive", "DB Link"];
const CATEGORY_GROUPS = {
  "Car Audio": ["Amplifiers", "Subwoofers", "Speakers", "DSPs", "Cables & Wiring", "Accessories"],
  "Home Audio": ["Amplifiers", "Subwoofers", "Speakers"],
};
const WAREHOUSES = ["Warehouse 1", "Warehouse 2", "Warehouse 3"];

const emptyForm = {
  name: "", brand: "Brax", sku: "", audio_type: "Car Audio",
  category: "Amplifiers", description: "", price: "",
  warehouse: "Warehouse 1", stock_status: "in_stock", stock_quantity: "",
};

const generateSKU = (brand, category) => {
  const brandCode = brand.replace(/\s+/g, "").substring(0, 3).toUpperCase();
  const catCode = category.replace(/\s+/g, "").substring(0, 3).toUpperCase();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${brandCode}-${catCode}-${random}`;
};

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [images, setImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch {
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const openAdd = () => {
    setEditProduct(null);
    const sku = generateSKU(emptyForm.brand, emptyForm.category);
    setForm({ ...emptyForm, sku });
    setImages([]);
    setError("");
    setShowModal(true);
  };

  const openEdit = (product) => {
    setEditProduct(product);
    setForm({
      name: product.name,
      brand: product.brand,
      sku: product.sku,
      audio_type: product.audio_type,
      category: product.category,
      description: product.description,
      price: product.price,
      warehouse: product.warehouse || "Warehouse 1",
      stock_status: product.stock_status,
      stock_quantity: product.stock_quantity,
    });
    setImages([]);
    setError("");
    setShowModal(true);
  };

  const handleSubmit = async () => {
    setError("");
    setSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([k, v]) => formData.append(k, v));
      images.forEach((img) => formData.append("images[]", img));

      if (editProduct) {
        await api.post(`/products/${editProduct.id}/update`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await api.post("/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      setShowModal(false);
      fetchProducts();
    } catch (err) {
      const errors = err.response?.data?.errors;
      if (errors) {
        setError(Object.values(errors).flat().join(", "));
      } else {
        setError(err.response?.data?.message || "Something went wrong.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setDeleteId(null);
      fetchProducts();
    } catch {
      setDeleteId(null);
    }
  };

  const categories = CATEGORY_GROUPS[form.audio_type] || [];

  return (
    <div className="w-full min-w-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white text-sm font-light tracking-[4px] uppercase">Products</h2>
          <p className="text-zinc-500 text-xs mt-1">{products.length} total products</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-1.5 bg-white text-zinc-900 px-3 py-2 text-xs font-bold tracking-[2px] uppercase rounded-sm hover:bg-zinc-100 transition shrink-0"
        >
          <Plus size={13} />
          <span className="hidden sm:inline">Add Product</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <div className="text-zinc-500 text-xs tracking-wider text-center py-12">Loading...</div>
      ) : products.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-8 text-center">
          <p className="text-zinc-500 text-xs tracking-wider uppercase">No products yet</p>
        </div>
      ) : (
        <div className="w-full overflow-x-auto rounded-sm border border-zinc-800">
          <table className="w-full text-xs" style={{ minWidth: "320px" }}>
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900">
                <th className="text-left px-3 py-3 text-zinc-400 tracking-[2px] uppercase font-medium">Product</th>
                <th className="text-left px-3 py-3 text-zinc-400 tracking-[2px] uppercase font-medium hidden sm:table-cell">Brand</th>
                <th className="text-left px-3 py-3 text-zinc-400 tracking-[2px] uppercase font-medium hidden md:table-cell">Warehouse</th>
                <th className="text-left px-3 py-3 text-zinc-400 tracking-[2px] uppercase font-medium">Stock</th>
                <th className="text-right px-3 py-3 text-zinc-400 tracking-[2px] uppercase font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-900">
              {products.map((p) => (
                <tr key={p.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition">
                  <td className="px-3 py-3">
                    <div className="text-white font-medium text-xs leading-snug">{p.name}</div>
                    <div className="text-zinc-500 text-[10px] mt-0.5">{p.sku}</div>
                    <div className="text-zinc-500 text-[10px] mt-0.5 sm:hidden">{p.brand}</div>
                    <div className="text-white text-[10px] mt-0.5 sm:hidden">PKR {Number(p.price).toLocaleString()}</div>
                  </td>
                  <td className="px-3 py-3 text-zinc-400 hidden sm:table-cell">{p.brand}</td>
                  <td className="px-3 py-3 text-zinc-400 hidden md:table-cell">{p.warehouse || "-"}</td>
                  <td className="px-3 py-3">
                    <span className={`px-1.5 py-1 rounded-sm text-[9px] font-bold tracking-wider uppercase whitespace-nowrap ${
                      p.stock_status === "in_stock"
                        ? "bg-emerald-900/50 text-emerald-400"
                        : "bg-red-900/50 text-red-400"
                    }`}>
                      {p.stock_status === "in_stock" ? `In (${p.stock_quantity})` : "Out"}
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => openEdit(p)}
                        className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-sm transition"
                      >
                        <Pencil size={12} />
                      </button>
                      <button
                        onClick={() => setDeleteId(p.id)}
                        className="p-1.5 text-zinc-400 hover:text-red-400 hover:bg-red-900/30 rounded-sm transition"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowModal(false)} />
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-t-lg sm:rounded-sm w-full sm:max-w-lg max-h-[92vh] overflow-y-auto">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 sticky top-0 bg-zinc-900 z-10">
              <h3 className="text-white text-xs font-bold tracking-[3px] uppercase">
                {editProduct ? "Edit Product" : "Add Product"}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-zinc-400 hover:text-white p-1">
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-5 py-5 space-y-4">
              {error && (
                <div className="px-4 py-3 bg-red-950/50 border border-red-800/50 rounded-sm">
                  <p className="text-red-400 text-xs">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Product Name */}
                <div className="col-span-1 sm:col-span-2">
                  <label className="text-[10px] font-bold tracking-[3px] uppercase text-zinc-400 block mb-1.5">Product Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-white/40"
                  />
                </div>

                {/* Brand */}
                <div>
                  <label className="text-[10px] font-bold tracking-[3px] uppercase text-zinc-400 block mb-1.5">Brand</label>
                  <select
                    value={form.brand}
                    onChange={(e) => {
                      const newBrand = e.target.value;
                      setForm((p) => ({
                        ...p,
                        brand: newBrand,
                        sku: generateSKU(newBrand, p.category),
                      }));
                    }}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-white/40"
                  >
                    {BRANDS.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </div>

                {/* SKU */}
                <div>
                  <label className="text-[10px] font-bold tracking-[3px] uppercase text-zinc-400 block mb-1.5">SKU</label>
                  <div className="flex gap-2">
                    <input
                      value={form.sku}
                      readOnly
                      className="w-full bg-zinc-800/50 border border-zinc-700 text-zinc-400 text-sm px-3 py-2.5 rounded-sm focus:outline-none cursor-default"
                    />
                    <button
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, sku: generateSKU(p.brand, p.category) }))}
                      className="px-3 py-2.5 bg-zinc-700 hover:bg-zinc-600 text-zinc-300 text-sm rounded-sm transition shrink-0"
                      title="Regenerate SKU"
                    >
                      ↻
                    </button>
                  </div>
                </div>

                {/* Audio Type */}
                <div>
                  <label className="text-[10px] font-bold tracking-[3px] uppercase text-zinc-400 block mb-1.5">Audio Type</label>
                  <select
                    value={form.audio_type}
                    onChange={(e) => {
                      const newType = e.target.value;
                      const newCat = CATEGORY_GROUPS[newType][0];
                      setForm((p) => ({
                        ...p,
                        audio_type: newType,
                        category: newCat,
                        sku: generateSKU(p.brand, newCat),
                      }));
                    }}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-white/40"
                  >
                    <option>Car Audio</option>
                    <option>Home Audio</option>
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label className="text-[10px] font-bold tracking-[3px] uppercase text-zinc-400 block mb-1.5">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => {
                      setForm((p) => ({
                        ...p,
                        category: e.target.value,
                        sku: generateSKU(p.brand, e.target.value),
                      }));
                    }}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-white/40"
                  >
                    {categories.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>

                {/* Description */}
                <div className="col-span-1 sm:col-span-2">
                  <label className="text-[10px] font-bold tracking-[3px] uppercase text-zinc-400 block mb-1.5">Description</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                    rows={3}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-white/40 resize-none"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="text-[10px] font-bold tracking-[3px] uppercase text-zinc-400 block mb-1.5">Price (PKR)</label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-white/40"
                  />
                </div>

                {/* Warehouse */}
                <div>
                  <label className="text-[10px] font-bold tracking-[3px] uppercase text-zinc-400 block mb-1.5">Warehouse</label>
                  <select
                    value={form.warehouse}
                    onChange={(e) => setForm((p) => ({ ...p, warehouse: e.target.value }))}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-white/40"
                  >
                    {WAREHOUSES.map((w) => <option key={w}>{w}</option>)}
                  </select>
                </div>

                {/* Stock Status */}
                <div>
                  <label className="text-[10px] font-bold tracking-[3px] uppercase text-zinc-400 block mb-1.5">Stock Status</label>
                  <select
                    value={form.stock_status}
                    onChange={(e) => setForm((p) => ({ ...p, stock_status: e.target.value }))}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-white/40"
                  >
                    <option value="in_stock">In Stock</option>
                    <option value="out_of_stock">Out of Stock</option>
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label className="text-[10px] font-bold tracking-[3px] uppercase text-zinc-400 block mb-1.5">Quantity</label>
                  <input
                    type="number"
                    value={form.stock_quantity}
                    onChange={(e) => setForm((p) => ({ ...p, stock_quantity: e.target.value }))}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-white/40"
                  />
                </div>

                {/* Images */}
                <div className="col-span-1 sm:col-span-2">
                  <label className="text-[10px] font-bold tracking-[3px] uppercase text-zinc-400 block mb-1.5">Images</label>
                  <label className="flex items-center gap-2 cursor-pointer border border-dashed border-zinc-700 rounded-sm px-4 py-3 hover:border-zinc-500 transition">
                    <Upload size={14} className="text-zinc-400 shrink-0" />
                    <span className="text-zinc-400 text-xs">
                      {images.length > 0 ? `${images.length} file(s) selected` : "Upload images (webp, jpg, png)"}
                    </span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => setImages(Array.from(e.target.files))}
                    />
                  </label>
                </div>

              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-4 border-t border-zinc-800 flex gap-3 justify-end sticky bottom-0 bg-zinc-900">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-xs font-bold tracking-[2px] uppercase text-zinc-400 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="px-6 py-2 bg-white text-zinc-900 text-xs font-bold tracking-[2px] uppercase rounded-sm hover:bg-zinc-100 transition disabled:opacity-50"
              >
                {submitting ? "Saving..." : editProduct ? "Update" : "Add Product"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setDeleteId(null)} />
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-sm w-full max-w-sm p-6">
            <h3 className="text-white text-xs font-bold tracking-[3px] uppercase mb-2">Delete Product</h3>
            <p className="text-zinc-400 text-xs mb-6">Are you sure? This action cannot be undone.</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 text-xs font-bold tracking-[2px] uppercase text-zinc-400 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="px-6 py-2 bg-red-600 text-white text-xs font-bold tracking-[2px] uppercase rounded-sm hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}