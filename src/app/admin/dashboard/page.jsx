"use client";

import { useState } from "react";
import { ShieldCheck, Package, Mail, LogOut, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import ProductsSection from "@/Components/admin-side/ProductsSection";
import ContactsSection from "@/Components/admin-side/ContactsSection";





function renderSection(activeSection) {
  switch (activeSection) {
    case "products":
      return <ProductsSection />;
    case "contacts":
      return <ContactsSection />;
    default:
      return <ProductsSection />;
  }
}

export default function AdminDashboardPage() {
  const [activeSection, setActiveSection] = useState("products");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await api.post("/admin/logout");
    } catch {}
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    router.push("/admin/login");
  };

  const navItems = [
    { key: "products", label: "Products", icon: Package },
    { key: "contacts", label: "Contacts", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:flex`}
      >
        <div className="px-6 py-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <ShieldCheck size={16} className="text-zinc-900" />
            </div>
            <div>
              <p className="text-white text-xs font-light tracking-[4px] uppercase">
                Resonance
              </p>
              <p className="text-zinc-500 text-[9px] tracking-[3px] uppercase">
                Elite Admin
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => {
                setActiveSection(key);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-xs tracking-[2px] uppercase font-medium transition-all duration-200 ${
                activeSection === key
                  ? "bg-white text-zinc-900"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-zinc-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-sm text-xs tracking-[2px] uppercase font-medium text-zinc-400 hover:text-red-400 hover:bg-red-950/30 transition-all duration-200"
          >
            <LogOut size={15} />
            Logout
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-14 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between px-6 sticky top-0 z-30 backdrop-blur-sm">
          <button
            className="lg:hidden text-zinc-400 hover:text-white"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                activeSection === "products" ? "bg-blue-400" : "bg-emerald-400"
              }`}
            />
            <span className="text-zinc-400 text-[10px] tracking-[3px] uppercase">
              {activeSection === "products" ? "Products" : "Contacts"}
            </span>
          </div>
          <div className="text-zinc-600 text-[10px] tracking-wider uppercase hidden sm:block">
            Resonance Elite
          </div>
        </header>

        <main className="flex-1 p-6">
          {renderSection(activeSection)}
        </main>
      </div>
    </div>
  );
}