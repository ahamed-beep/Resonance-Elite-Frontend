"use client";

import { useState, useMemo, useEffect, startTransition, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  ChevronRight,
  Grid3x3,
  List,
  ArrowUpDown,
  SlidersHorizontal,
  X,
} from "lucide-react";

export default function ProductsClient({ initialProducts, brands, categoryGroups }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeGroup = searchParams.get("group") || "All";
  const activeCategory = searchParams.get("category") || "All";
  const activeBrand = searchParams.get("brand") || "All";

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState({
    "Car Audio": true,
    "Home Audio": true,
  });
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Adjusted from 12 to 6 products per page as requested
  const itemsPerPage = 6;

  useEffect(() => {
    const handler = setTimeout(() => {
      startTransition(() => setDebouncedSearch(search));
    }, 180);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeGroup, activeCategory, activeBrand, debouncedSearch]);

  const toggleGroup = (group) => {
    setExpandedGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const updateURLParams = useCallback(
    (paramsObject) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(paramsObject).forEach(([key, value]) => {
        if (value === "All") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  const clearAll = useCallback(() => {
    setSearch("");
    setMobileFiltersOpen(false);
    router.push(pathname, { scroll: false });
  }, [router, pathname]);

  const getCategoryCount = (group, category) =>
    initialProducts.filter((p) => p.group === group && p.category === category).length;

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = initialProducts.filter((product) => {
      const brandMatch = activeBrand === "All" || product.brand === activeBrand;
      const groupMatch = activeGroup === "All" || product.group === activeGroup;
      const categoryMatch = activeCategory === "All" || product.category === activeCategory;
      if (!brandMatch || !groupMatch || !categoryMatch) return false;
      if (!debouncedSearch) return true;
      const q = debouncedSearch.toLowerCase();
      return (
        product.name.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q)
      );
    });

    if (sortBy === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") filtered = [...filtered].sort((b, a) => b.price - a.price);

    return filtered;
  }, [activeBrand, activeGroup, activeCategory, debouncedSearch, sortBy, initialProducts]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedProducts.slice(start, start + itemsPerPage);
  }, [filteredAndSortedProducts, currentPage]);

  const hasActiveFilters =
    activeBrand !== "All" || activeGroup !== "All" || activeCategory !== "All" || search;

  const FilterSidebarContent = () => (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs uppercase tracking-[3px] text-zinc-400 font-medium">Categories</h3>
          <div className="h-px flex-1 ml-3 bg-zinc-200"></div>
        </div>

        <div className="space-y-1.5">
          {Object.keys(categoryGroups).map((group) => (
            <div key={group} className="border border-zinc-100 rounded-sm overflow-hidden">
              <button
                type="button"
                onClick={() => {
                  toggleGroup(group);
                  if (activeGroup === group && activeCategory === "All") {
                    updateURLParams({ group: "All", category: "All" });
                  } else {
                    updateURLParams({ group, category: "All" });
                  }
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 transition-colors text-left ${
                  activeGroup === group && activeCategory === "All"
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-50 hover:bg-zinc-100 text-zinc-800"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-wider">{group}</span>
                {expandedGroups[group] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>

              {expandedGroups[group] && (
                <div className="p-1 space-y-0.5 border-t border-zinc-100 bg-white">
                  {categoryGroups[group].map((cat) => {
                    const isSelected = activeGroup === group && activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          isSelected
                            ? updateURLParams({ group, category: "All" })
                            : updateURLParams({ group, category: cat });
                          setMobileFiltersOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 transition-all duration-200 text-xs flex justify-between items-center rounded-sm ${
                          isSelected
                            ? "bg-black text-white font-medium"
                            : "text-zinc-600 hover:bg-zinc-50"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className={`text-[10px] ${isSelected ? "text-white/80" : "text-zinc-400"}`}>
                          {getCategoryCount(group, cat)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <div className="pt-4 border-t border-zinc-200">
          <p className="text-xs text-zinc-400 mb-2 tracking-wider uppercase font-medium">Active Filters</p>
          <div className="flex flex-wrap gap-1.5">
            {activeBrand !== "All" && (
              <span className="text-[10px] bg-zinc-100 px-2 py-1 text-zinc-700 font-medium rounded-sm">
                Brand: {activeBrand}
              </span>
            )}
            {activeGroup !== "All" && (
              <span className="text-[10px] bg-zinc-100 px-2 py-1 text-zinc-700 font-medium rounded-sm">
                Type: {activeGroup}
              </span>
            )}
            {activeCategory !== "All" && (
              <span className="text-[10px] bg-zinc-100 px-2 py-1 text-zinc-700 font-medium rounded-sm">
                Category: {activeCategory}
              </span>
            )}
            {search && (
              <span className="text-[10px] bg-zinc-100 px-2 py-1 text-zinc-700 font-medium rounded-sm truncate max-w-[120px]">
                Search: {search}
              </span>
            )}
            <button
              type="button"
              onClick={clearAll}
              className="text-[10px] bg-black text-white px-2.5 py-1 hover:bg-zinc-800 transition font-medium rounded-sm"
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-full max-w-[260px] flex-col overflow-y-auto bg-white p-4 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-black">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 text-zinc-500 hover:text-black focus:outline-none"
                aria-label="Close filters"
              >
                <X size={18} />
              </button>
            </div>
            <FilterSidebarContent />
          </div>
        </div>
      )}

      {/* Fluid Layout Shell */}
      <div className="max-w-[1440px] 2xl:max-w-[1920px] 3xl:max-w-[2560px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 md:py-6">
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-6">
          
          {/* Desktop Filter Sidebar */}
          <aside
            aria-label="Product filters"
            className="hidden lg:block lg:w-64 xl:w-72 shrink-0 sticky top-4 h-[calc(100vh-32px)] overflow-y-auto pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <FilterSidebarContent />
          </aside>

          {/* Main Workspace */}
          <main className="flex-1">
            <div className="bg-white pb-3 mb-4 border-b border-zinc-100 space-y-3">
              
              {/* Search Matrix Panel */}
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1 w-full">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder="Search premium components..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search products"
                    className="w-full bg-zinc-50/50 border border-zinc-200 py-2 pl-9 pr-4 text-xs outline-none focus:border-black focus:bg-white transition placeholder:text-zinc-400 rounded-sm"
                  />
                </div>

                <div className="flex gap-1.5 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-48 sm:flex-none">
                    <select
                      value={activeBrand}
                      onChange={(e) => updateURLParams({ brand: e.target.value })}
                      aria-label="Filter by brand"
                      className="w-full appearance-none bg-white border border-zinc-200 py-2 pl-3 pr-8 text-xs text-zinc-700 focus:outline-none focus:border-black cursor-pointer rounded-sm"
                    >
                      <option value="All">All Brands</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" aria-hidden="true" />
                  </div>

                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                    aria-label="Open filters"
                    className="lg:hidden flex items-center justify-center px-3 border border-zinc-200 bg-white text-zinc-700 hover:border-black transition active:bg-zinc-50 rounded-sm"
                  >
                    <SlidersHorizontal size={16} />
                  </button>
                </div>
              </div>

              {/* Utility Panel */}
              <div className="flex items-center justify-between pt-0.5 gap-2">
                <p className="text-[10px] text-zinc-400 tracking-wider uppercase font-medium truncate min-h-[14px]">
                  Showing {filteredAndSortedProducts.length} products
                </p>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      aria-label="Sort products"
                      className="appearance-none bg-white border border-zinc-200 py-1.5 pl-2.5 pr-6 text-[10px] text-zinc-700 focus:outline-none focus:border-black cursor-pointer font-medium tracking-wide uppercase rounded-sm"
                    >
                      <option value="default">Default Sort</option>
                      <option value="price-asc">Low to High</option>
                      <option value="price-desc">High to Low</option>
                    </select>
                    <ArrowUpDown size={10} className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" aria-hidden="true" />
                  </div>

                  <div className="hidden sm:flex border border-zinc-200 rounded-sm overflow-hidden bg-white" role="group" aria-label="View mode">
                    <button
                      type="button"
                      onClick={() => setViewMode("grid")}
                      aria-label="Grid view"
                      aria-pressed={viewMode === "grid"}
                      className={`p-1.5 transition-colors focus:outline-none ${viewMode === "grid" ? "bg-black text-white" : "bg-white text-zinc-400 hover:text-black"}`}
                    >
                      <Grid3x3 size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("list")}
                      aria-label="List view"
                      aria-pressed={viewMode === "list"}
                      className={`p-1.5 transition-colors focus:outline-none ${viewMode === "list" ? "bg-black text-white" : "bg-white text-zinc-400 hover:text-black"}`}
                    >
                      <List size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Catalog Grid Streamlined */}
            {filteredAndSortedProducts.length > 0 ? (
              viewMode === "grid" ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-x-4 gap-y-6">
                  {paginatedProducts.map((product) => (
                    <article
                      key={product.id}
                      className="group bg-white flex flex-col justify-between transition-all duration-300 rounded-sm overflow-hidden"
                    >
                      <Link
                        href={`/products/${product.id}`}
                        className="block overflow-hidden bg-zinc-50 relative aspect-[4/3] w-full"
                        aria-label={`View ${product.name}`}
                      >
                        <Image
                          src={product.images[0]}
                          alt={`${product.name} by ${product.brand}`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1920px) 25vw, 20vw"
                          loading="lazy"
                          className="object-contain"
                        />
                      </Link>
                      <div className="pt-3 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-zinc-400 uppercase mb-0.5">
                            {product.brand} &middot; {product.category}
                          </div>
                          <Link href={`/products/${product.id}`}>
                            <h2 className="text-xs sm:text-sm font-medium text-zinc-900 line-clamp-1 hover:text-zinc-600 transition mb-1">
                              {product.name}
                            </h2>
                          </Link>
                          <p className="text-[11px] text-zinc-500 leading-normal line-clamp-2 mb-3 min-h-[32px]">
                            {product.description}
                          </p>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-black mb-2">
                            {product.priceFormatted}
                          </div>
                          <Link
                            href={`/products/${product.id}`}
                            className="w-full bg-black text-white py-2 text-[11px] text-center font-medium block transition hover:bg-zinc-800 rounded-sm"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="space-y-6 max-w-5xl 2xl:max-w-7xl">
                  {paginatedProducts.map((product) => (
                    <article
                      key={product.id}
                      className="flex flex-col sm:flex-row gap-4 bg-white transition-all duration-300 rounded-sm"
                    >
                      <Link
                        href={`/products/${product.id}`}
                        className="w-full sm:w-36 aspect-[4/3] bg-zinc-50 overflow-hidden shrink-0 block rounded-sm relative"
                        aria-label={`View ${product.name}`}
                      >
                        <Image
                          src={product.images[0]}
                          alt={`${product.name} by ${product.brand}`}
                          fill
                          sizes="144px"
                          loading="lazy"
                          className="object-contain"
                        />
                      </Link>
                      <div className="flex-1 flex flex-col justify-between sm:flex-row sm:items-center gap-2">
                        <div className="space-y-0.5">
                          <div className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                            {product.brand} &middot; {product.category}
                          </div>
                          <Link href={`/products/${product.id}`}>
                            <h2 className="text-xs sm:text-sm font-medium text-black hover:text-zinc-600 transition">
                              {product.name}
                            </h2>
                          </Link>
                          <p className="text-[11px] text-zinc-500 max-w-xl line-clamp-1 sm:line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                        <div className="sm:text-right shrink-0 flex sm:flex-col justify-between items-center sm:items-end gap-2 mt-1 sm:mt-0">
                          <div className="text-sm font-bold text-black">
                            {product.priceFormatted}
                          </div>
                          <Link
                            href={`/products/${product.id}`}
                            className="bg-black text-white px-3.5 py-1.5 text-[11px] font-medium inline-block hover:bg-zinc-800 transition rounded-sm"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )
            ) : (
              <div className="text-center py-10 border border-dashed border-zinc-200 rounded-sm bg-white">
                <div className="inline-flex items-center justify-center w-9 h-9 bg-zinc-50 text-zinc-400 mb-2 rounded-full">
                  <Search size={16} aria-hidden="true" />
                </div>
                <h3 className="text-xs font-medium text-black mb-0.5">No products match filters</h3>
                <p className="text-[11px] text-zinc-500 max-w-xs mx-auto px-4">
                  Try re-checking keywords or clearing active attributes.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-3 text-[11px] font-medium text-black underline underline-offset-4 hover:no-underline focus:outline-none"
                >
                  Reset all filters
                </button>
              </div>
            )}

            {/* Pagination System */}
            {filteredAndSortedProducts.length > 0 && totalPages > 1 && (
              <nav
                aria-label="Product pagination"
                className="flex justify-center mt-8 pt-4 border-t border-zinc-100"
              >
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="px-2.5 py-1.5 text-[11px] font-medium border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed transition rounded-sm"
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => setCurrentPage(pageNum)}
                      aria-label={`Page ${pageNum}`}
                      aria-current={currentPage === pageNum ? "page" : undefined}
                      className={`w-7 h-7 text-[11px] font-medium transition rounded-sm ${
                        currentPage === pageNum
                          ? "bg-black text-white"
                          : "bg-white text-zinc-600 hover:bg-zinc-50 border border-zinc-200"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className="px-2.5 py-1.5 text-[11px] font-medium border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed transition rounded-sm"
                  >
                    Next
                  </button>
                </div>
              </nav>
            )}
          </main>
        </div>
      </div>
    </>
  );
}