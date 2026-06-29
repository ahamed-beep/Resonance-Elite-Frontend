"use client";

import { useState } from "react";
import { ShieldCheck, Package, Mail, LogOut, Menu, X } from "lucide-react";
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
    <div className="min-h-screen bg-zinc-950 flex overflow-x-hidden selection:bg-white selection:text-zinc-950 antialiased">
      
      {/* Sidebar - Fully Responsive Slide over / Static Toggle */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen shrink-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Brand Header */}
        <div className="px-6 h-16 min-h-[64px] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center shadow-md shrink-0">
              <ShieldCheck size={16} className="text-zinc-900" />
            </div>
            <div>
              <p className="text-white text-xs font-light tracking-[3px] uppercase whitespace-nowrap">
                Resonance
              </p>
              <p className="text-zinc-500 text-[9px] tracking-[2px] uppercase">
                Elite Admin
              </p>
            </div>
          </div>
          
          {/* Close Sidebar button explicitly layout for mobile */}
          <button 
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-zinc-400 hover:text-white transition-colors p-1"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setActiveSection(key);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-xs tracking-[2px] uppercase font-medium transition-all duration-200 text-left min-h-[42px] ${
                activeSection === key
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              <Icon size={15} className="shrink-0" />
              <span className="truncate">{label}</span>
            </button>
          ))}
        </nav>

        {/* Logout Bottom Trigger */}
        <div className="p-3 border-t border-zinc-800 bg-zinc-900/50">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-sm text-xs tracking-[2px] uppercase font-medium text-zinc-400 hover:text-red-400 hover:bg-red-950/20 transition-all duration-200 text-left min-h-[42px]"
          >
            <LogOut size={15} className="shrink-0" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Backdrop overlay for mobile screen viewports */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xs lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Primary Display Content Context Panel */}
      <div className="flex-1 flex flex-col min-h-screen w-full lg:max-h-screen lg:overflow-y-auto">
        
        {/* Top Sticky Dashboard Navigation Control Bar */}
        <header className="h-16 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="lg:hidden text-zinc-400 hover:text-white transition-colors p-1"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu size={20} />
            </button>
            
            <div className="flex items-center gap-2">
              <div
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  activeSection === "products" ? "bg-blue-400 animate-pulse" : "bg-emerald-400 animate-pulse"
                }`}
              />
              <span className="text-zinc-300 text-[10px] font-semibold tracking-[2px] uppercase select-none">
                {activeSection === "products" ? "Products Management" : "Contacts Feed"}
              </span>
            </div>
          </div>

          <div className="text-zinc-600 text-[10px] tracking-[2px] uppercase hidden sm:block font-medium">
            Resonance Elite
          </div>
        </header>

        {/* Dynamic Section Wrapper Viewport */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] min-[2560px]:max-w-[2100px] w-full mx-auto">
          <div className="w-full animate-in fade-in duration-300">
            {renderSection(activeSection)}
          </div>
        </main>
      </div>
    </div>
  );
}