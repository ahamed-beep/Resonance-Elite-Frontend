"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ShieldCheck, Lock, Mail } from "lucide-react";
import api from "@/lib/axios";

export default function AdminLoginClient() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await api.post("/admin/login", form);
      localStorage.setItem("admin_token", res.data.token);
      localStorage.setItem("admin_user", JSON.stringify(res.data.user));
      router.push("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-white selection:text-zinc-950">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/30 via-zinc-950 to-zinc-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] pointer-events-none" />

      {/* Main Glassmorphic Wrapper */}
      <div className="relative w-full max-w-[400px] sm:max-w-md my-auto">
        {/* Top Minimal Line Accent */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-sm" />

        {/* Card Body */}
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 border-t-0 rounded-b-sm px-5 py-8 sm:px-8 sm:py-10 shadow-2xl">
          
          {/* Header Branding */}
          <div className="flex flex-col items-center mb-6 sm:mb-8 text-center">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-sm flex items-center justify-center mb-3 sm:mb-4 shadow-lg shrink-0">
              <ShieldCheck size={20} className="text-zinc-900 sm:w-[22px] sm:h-[22px]" />
            </div>
            
            <h1 className="text-white text-base sm:text-lg font-light tracking-[4px] sm:tracking-[6px] uppercase whitespace-nowrap">
              Resonance
            </h1>
            
            <span className="text-zinc-500 text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] uppercase mt-1">
              Elite Admin
            </span>
            
            <div className="w-8 h-[1px] bg-zinc-800 mt-4" />
          </div>

          {/* Error Message Box */}
          {error && (
            <div className="mb-5 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-red-950/40 border border-red-900/50 rounded-sm animate-in fade-in duration-200">
              <p className="text-red-400 text-xs tracking-wide leading-relaxed">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5" noValidate>
            
            {/* Email Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-[9px] sm:text-[10px] font-semibold tracking-[2px] sm:tracking-[3px] uppercase text-zinc-400 block"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  placeholder="admin@resonanceelite.com"
                  className="w-full bg-zinc-800/50 border border-zinc-700/80 text-white text-sm pl-10 pr-4 py-3 rounded-sm placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-800 transition-all duration-200 text-[14px] sm:text-sm h-11"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="text-[9px] sm:text-[10px] font-semibold tracking-[2px] sm:tracking-[3px] uppercase text-zinc-400 block"
              >
                Password
              </label>
              <div className="relative">
                <Lock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={form.password}
                  onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                  placeholder="••••••••••••"
                  className="w-full bg-zinc-800/50 border border-zinc-700/80 text-white text-sm pl-10 pr-11 py-3 rounded-sm placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-800 transition-all duration-200 text-[14px] sm:text-sm h-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none h-full px-1 flex items-center justify-center"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-white text-zinc-900 py-3 text-[11px] sm:text-xs font-bold tracking-[2px] sm:tracking-[3px] uppercase rounded-sm hover:bg-zinc-100 active:bg-zinc-200 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2.5 shadow-sm min-h-[44px]"
            >
              {loading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <ShieldCheck size={13} className="shrink-0" />
                  <span>Access Dashboard</span>
                </>
              )}
            </button>
          </form>

          {/* Footer Notice */}
          <div className="mt-8 pt-5 sm:pt-6 border-t border-zinc-800 text-center">
            <p className="text-zinc-600 text-[9px] sm:text-[10px] tracking-wider uppercase leading-relaxed max-w-[280px] sm:max-w-none mx-auto">
              Restricted Access &mdash; Authorized Personnel Only
            </p>
          </div>
        </div>

        {/* Bottom Decorative Subtle Glow Line */}
        <div className="h-[1px] w-3/4 mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
}