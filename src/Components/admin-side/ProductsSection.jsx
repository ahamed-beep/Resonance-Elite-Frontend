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

  // Sync scroll lock with modal layout state
  useEffect(() => {
    if (showModal || deleteId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [showModal, deleteId]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get("/products");
      setProducts(res.data?.products || res.data?.data || res.data || []);
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
      name: product.name || "",
      brand: product.brand || "Brax",
      sku: product.sku || "",
      audio_type: product.audio_type || "Car Audio",
      category: product.category || "Amplifiers",
      description: product.description || "",
      price: product.price || "",
      warehouse: product.warehouse || "Warehouse 1",
      stock_status: product.stock_status || "in_stock",
      stock_quantity: product.stock_quantity || "",
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
      setImages([]);
      await fetchProducts();
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
      setProducts((prev) => prev.filter((p) => p.id !== id));
      setDeleteId(null);
      await api.delete(`/products/${id}`);
    } catch {
      fetchProducts();
      setDeleteId(null);
    }
  };

  const categories = CATEGORY_GROUPS[form.audio_type] || [];

  return (
    <div className="w-full min-w-0">
      
      {/* Header Container */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="min-w-0">
          <h2 className="text-white text-xs sm:text-sm font-light tracking-[3px] sm:tracking-[4px] uppercase truncate">Products</h2>
          <p className="text-zinc-500 text-[11px] sm:text-xs mt-1">{products.length} total products</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-1.5 bg-white text-zinc-900 px-3 py-2 text-xs font-bold tracking-[2px] uppercase rounded-sm hover:bg-zinc-100 transition shrink-0 active:scale-95"
        >
          <Plus size={13} />
          <span>Add <span className="hidden sm:inline">Product</span></span>
        </button>
      </div>

      {/* Main Table Interface */}
      {loading ? (
        <div className="text-zinc-500 text-xs tracking-wider text-center py-12 animate-pulse">Loading components...</div>
      ) : products.length === 0 ? (
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-sm p-8 text-center">
          <p className="text-zinc-500 text-xs tracking-wider uppercase">No products cataloged yet</p>
        </div>
      ) : (
        <div className="w-full overflow-x-auto rounded-sm border border-zinc-800 bg-zinc-900/40 custom-scrollbar">
          <table className="w-full text-xs min-w-[500px] table-auto">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900 select-none text-zinc-400 font-medium tracking-[2px] uppercase text-[10px]">
                <th className="text-left px-4 py-3.5">Product Info</th>
                <th className="text-left px-4 py-3.5 hidden sm:table-cell">Brand</th>
                <th className="text-left px-4 py-3.5 hidden md:table-cell">Warehouse</th>
                <th className="text-left px-4 py-3.5">Stock</th>
                <th className="text-right px-4 py-3.5">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-900/20 divide-y divide-zinc-800/40">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-zinc-800/30 transition-colors duration-150">
                  <td className="px-4 py-3">
                    <div className="text-white font-medium text-xs leading-snug break-words max-w-[180px] sm:max-w-none">{p.name}</div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-zinc-500 text-[10px] mt-1">
                      <span>{p.sku}</span>
                      <span className="sm:hidden text-zinc-600">&bull;</span>
                      <span className="sm:hidden text-zinc-400">{p.brand}</span>
                    </div>
                    <div className="text-zinc-300 font-mono text-[10px] mt-1">PKR {Number(p.price || 0).toLocaleString()}</div>
                  </td>
                  <td className="px-4 py-3 text-zinc-400 hidden sm:table-cell whitespace-nowrap">{p.brand}</td>
                  <td className="px-4 py-3 text-zinc-400 hidden md:table-cell whitespace-nowrap">{p.warehouse || "-"}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`inline-flex px-1.5 py-0.5 rounded-sm text-[9px] font-bold tracking-wider uppercase ${
                      p.stock_status === "in_stock"
                        ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/30"
                        : "bg-red-950/60 text-red-400 border border-red-800/30"
                    }`}>
                      {p.stock_status === "in_stock" ? `In (${p.stock_quantity || 0})` : "Out"}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => openEdit(p)}
                        className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-sm transition"
                        title="Edit entry"
                      >
                        <Pencil size={13} />
                      </button>
                      <button
                        onClick={() => setDeleteId(p.id)}
                        className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-950/40 rounded-sm transition"
                        title="Remove entry"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Dynamic Modal Context */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xs" onClick={() => setShowModal(false)} />
          
          <div className="relative bg-zinc-900 border-t sm:border border-zinc-800 rounded-t-xl sm:rounded-sm w-full sm:max-w-lg max-h-[88vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col transform transition-transform duration-300">
            
            {/* Modal Sticky Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 sticky top-0 bg-zinc-900 z-10 shrink-0">
              <h3 className="text-white text-xs font-bold tracking-[3px] uppercase">
                {editProduct ? "Edit Specification" : "Add New System"}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-zinc-400 hover:text-white p-1.5 hover:bg-zinc-800 rounded-sm transition">
                <X size={15} />
              </button>
            </div>

            {/* Modal Scrollable Fields */}
            <div className="px-5 py-5 space-y-4 flex-1 overflow-y-auto custom-scrollbar">
              {error && (
                <div className="px-4 py-3 bg-red-950/40 border border-red-900/50 rounded-sm">
                  <p className="text-red-400 text-xs leading-relaxed">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1 sm:col-span-2">
                  <label className="text-[9px] font-bold tracking-[2px] uppercase text-zinc-400 block mb-1.5">Product Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full bg-zinc-800 border border-zinc-700/80 text-white text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-white/30 text-[14px] h-10"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold tracking-[2px] uppercase text-zinc-400 block mb-1.5">Brand</label>
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
                    className="w-full bg-zinc-800 border border-zinc-700/80 text-white text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-white/30 h-10"
                  >
                    {BRANDS.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-[9px] font-bold tracking-[2px] uppercase text-zinc-400 block mb-1.5">SKU Parameter</label>
                  <div className="flex gap-1.5">
                    <input
                      value={form.sku}
                      readOnly
                      className="w-full bg-zinc-800/40 border border-zinc-700/60 text-zinc-400 text-sm px-3 py-2 rounded-sm focus:outline-none cursor-default select-none h-10 truncate"
                    />
                    <button
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, sku: generateSKU(p.brand, p.category) }))}
                      className="px-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 text-sm rounded-sm transition shrink-0 flex items-center justify-center h-10 active:bg-zinc-600"
                      title="Regenerate dynamic code"
                    >
                      ↻
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-bold tracking-[2px] uppercase text-zinc-400 block mb-1.5">Audio Class</label>
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
                    className="w-full bg-zinc-800 border border-zinc-700/80 text-white text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-white/30 h-10"
                  >
                    <option>Car Audio</option>
                    <option>Home Audio</option>
                  </select>
                </div>

                <div>
                  <label className="text-[9px] font-bold tracking-[2px] uppercase text-zinc-400 block mb-1.5">Category Node</label>
                  <select
                    value={form.category}
                    onChange={(e) => {
                      setForm((p) => ({
                        ...p,
                        category: e.target.value,
                        sku: generateSKU(p.brand, e.target.value),
                      }));
                    }}
                    className="w-full bg-zinc-800 border border-zinc-700/80 text-white text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-white/30 h-10"
                  >
                    {categories.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <label className="text-[9px] font-bold tracking-[2px] uppercase text-zinc-400 block mb-1.5">Technical Profile Description</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                    rows={3}
                    className="w-full bg-zinc-800 border border-zinc-700/80 text-white text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-white/30 resize-none text-[14px]"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold tracking-[2px] uppercase text-zinc-400 block mb-1.5">Price (PKR)</label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
                    className="w-full bg-zinc-800 border border-zinc-700/80 text-white text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-white/30 text-[14px] h-10"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold tracking-[2px] uppercase text-zinc-400 block mb-1.5">Warehouse Location</label>
                  <select
                    value={form.warehouse}
                    onChange={(e) => setForm((p) => ({ ...p, warehouse: e.target.value }))}
                    className="w-full bg-zinc-800 border border-zinc-700/80 text-white text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-white/30 h-10"
                  >
                    {WAREHOUSES.map((w) => <option key={w}>{w}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-[9px] font-bold tracking-[2px] uppercase text-zinc-400 block mb-1.5">Stock Status</label>
                  <select
                    value={form.stock_status}
                    onChange={(e) => setForm((p) => ({ ...p, stock_status: e.target.value }))}
                    className="w-full bg-zinc-800 border border-zinc-700/80 text-white text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-white/30 h-10"
                  >
                    <option value="in_stock">In Stock</option>
                    <option value="out_of_stock">Out of Stock</option>
                  </select>
                </div>

                <div>
                  <label className="text-[9px] font-bold tracking-[2px] uppercase text-zinc-400 block mb-1.5">Quantity Reserve</label>
                  <input
                    type="number"
                    value={form.stock_quantity}
                    onChange={(e) => setForm((p) => ({ ...p, stock_quantity: e.target.value }))}
                    className="w-full bg-zinc-800 border border-zinc-700/80 text-white text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-white/30 text-[14px] h-10"
                  />
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <label className="text-[9px] font-bold tracking-[2px] uppercase text-zinc-400 block mb-1.5">Media Assets</label>
                  <label className="flex items-center gap-2.5 cursor-pointer border border-dashed border-zinc-700 hover:border-zinc-500 rounded-sm px-4 py-3.5 transition bg-zinc-800/10 min-h-[46px]">
                    <Upload size={14} className="text-zinc-400 shrink-0" />
                    <span className="text-zinc-400 text-xs truncate select-none">
                      {images.length > 0 ? `${images.length} asset(s) loaded` : "Upload raw binaries (webp, jpg, png)"}
                    </span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => setImages(Array.from(e.target.files || []))}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Modal Sticky Footer */}
            <div className="px-5 py-4 border-t border-zinc-800 flex gap-2 justify-end sticky bottom-0 bg-zinc-900 shrink-0">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-xs font-bold tracking-[2px] uppercase text-zinc-400 hover:text-white transition h-10 rounded-sm"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="px-5 py-2 bg-white text-zinc-900 text-xs font-bold tracking-[2px] uppercase rounded-sm hover:bg-zinc-100 transition disabled:opacity-50 min-w-[100px] h-10"
              >
                {submitting ? "Processing..." : editProduct ? "Update" : "Deploy System"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Destructive Confirmation Overlay */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-in fade-in duration-150">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xs" onClick={() => setDeleteId(null)} />
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-sm w-full max-w-sm p-5 sm:p-6 shadow-2xl transform transition-all">
            <h3 className="text-white text-xs font-bold tracking-[2px] uppercase mb-2">Purge Configuration</h3>
            <p className="text-zinc-400 text-xs mb-6 leading-relaxed">Are you absolutely sure? This hardware entity will be permanently unlinked from data nodes.</p>
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 text-xs font-bold tracking-[2px] uppercase text-zinc-400 hover:text-white transition h-9"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDelete(deleteId)}
                className="px-5 py-2 bg-red-600 text-white text-xs font-bold tracking-[2px] uppercase rounded-sm hover:bg-red-700 transition h-9 min-w-[80px]"
              >
                Purge
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}