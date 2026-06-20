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
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState({
    "Car Audio": true,
    "Home Audio": true,
  });
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
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
    else if (sortBy === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);

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
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs uppercase tracking-[3px] text-zinc-400 font-medium">Categories</h3>
          <div className="h-px flex-1 ml-3 bg-zinc-200"></div>
        </div>

        <div className="space-y-2">
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
                className={`w-full flex items-center justify-between px-4 py-3 transition-colors text-left ${
                  activeGroup === group && activeCategory === "All"
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-50 hover:bg-zinc-100 text-zinc-800"
                }`}
              >
                <span className="text-sm font-medium">{group}</span>
                {expandedGroups[group] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
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
                        className={`w-full text-left px-3 py-2 transition-all duration-200 text-sm flex justify-between items-center rounded-sm ${
                          isSelected
                            ? "bg-black text-white font-medium"
                            : "text-zinc-600 hover:bg-zinc-50"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className={`text-xs ${isSelected ? "text-white/80" : "text-zinc-400"}`}>
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
        <div className="pt-6 border-t border-zinc-200">
          <p className="text-xs text-zinc-400 mb-3 tracking-wider uppercase font-medium">Active Filters</p>
          <div className="flex flex-wrap gap-2">
            {activeBrand !== "All" && (
              <span className="text-xs bg-zinc-100 px-2.5 py-1.5 text-zinc-700 font-medium rounded-sm">
                Brand: {activeBrand}
              </span>
            )}
            {activeGroup !== "All" && (
              <span className="text-xs bg-zinc-100 px-2.5 py-1.5 text-zinc-700 font-medium rounded-sm">
                Type: {activeGroup}
              </span>
            )}
            {activeCategory !== "All" && (
              <span className="text-xs bg-zinc-100 px-2.5 py-1.5 text-zinc-700 font-medium rounded-sm">
                Category: {activeCategory}
              </span>
            )}
            {search && (
              <span className="text-xs bg-zinc-100 px-2.5 py-1.5 text-zinc-700 font-medium rounded-sm truncate max-w-[140px] sm:max-w-[180px]">
                Search: {search}
              </span>
            )}
            <button
              type="button"
              onClick={clearAll}
              className="text-xs bg-black text-white px-3 py-1.5 hover:bg-zinc-800 transition font-medium rounded-sm"
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
          <div className="relative ml-auto flex h-full w-full max-w-[280px] sm:max-w-xs flex-col overflow-y-auto bg-white p-5 sm:p-6 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base sm:text-lg font-medium text-black">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-zinc-500 hover:text-black focus:outline-none"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            <FilterSidebarContent />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">

          {/* Desktop Sidebar */}
          <aside
            aria-label="Product filters"
            className="hidden lg:block lg:w-72 shrink-0 sticky top-4 h-[calc(100vh-32px)] overflow-y-auto pb-12 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <FilterSidebarContent />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white pb-4 mb-5 md:mb-6 border-b border-zinc-100 space-y-4">

              {/* Search + Brand + Mobile Filter Toggle */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 w-full">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder="Search premium components..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search products"
                    className="w-full bg-zinc-50/50 border border-zinc-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-black focus:bg-white transition placeholder:text-zinc-400"
                  />
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-56 sm:flex-none">
                    <select
                      value={activeBrand}
                      onChange={(e) => updateURLParams({ brand: e.target.value })}
                      aria-label="Filter by brand"
                      className="w-full appearance-none bg-white border border-zinc-200 py-2.5 pl-4 pr-10 text-sm text-zinc-700 focus:outline-none focus:border-black cursor-pointer"
                    >
                      <option value="All">All Brands</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" aria-hidden="true" />
                  </div>

                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                    aria-label="Open filters"
                    className="lg:hidden flex items-center justify-center px-3.5 border border-zinc-200 bg-white text-zinc-700 hover:border-black transition active:bg-zinc-50 rounded-sm"
                  >
                    <SlidersHorizontal size={18} />
                  </button>
                </div>
              </div>

              {/* Toolbar */}
              <div className="flex items-center justify-between pt-1 gap-2">
                <p className="text-[10px] sm:text-xs text-zinc-500 tracking-wide uppercase font-medium truncate min-h-[16px]">
                  Showing {filteredAndSortedProducts.length} products
                </p>

                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      aria-label="Sort products"
                      className="appearance-none bg-white border border-zinc-200 py-2 pl-2.5 pr-7 text-[10px] sm:text-xs text-zinc-700 focus:outline-none focus:border-black cursor-pointer font-medium tracking-wide uppercase"
                    >
                      <option value="default">Default Sort</option>
                      <option value="price-asc">Low to High</option>
                      <option value="price-desc">High to Low</option>
                    </select>
                    <ArrowUpDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" aria-hidden="true" />
                  </div>

                  <div className="hidden sm:flex border border-zinc-200 rounded-sm overflow-hidden bg-white" role="group" aria-label="View mode">
                    <button
                      type="button"
                      onClick={() => setViewMode("grid")}
                      aria-label="Grid view"
                      aria-pressed={viewMode === "grid"}
                      className={`p-2 transition-colors focus:outline-none ${viewMode === "grid" ? "bg-black text-white" : "bg-white text-zinc-400 hover:text-black"}`}
                    >
                      <Grid3x3 size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("list")}
                      aria-label="List view"
                      aria-pressed={viewMode === "list"}
                      className={`p-2 transition-colors focus:outline-none ${viewMode === "list" ? "bg-black text-white" : "bg-white text-zinc-400 hover:text-black"}`}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid / List */}
            {filteredAndSortedProducts.length > 0 ? (
              viewMode === "grid" ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
                  {paginatedProducts.map((product) => (
                    <article
                      key={product.id}
                      className="group bg-white border border-zinc-100 flex flex-col justify-between transition-all duration-300 hover:border-zinc-300 hover:shadow-sm rounded-sm overflow-hidden"
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      <Link
                        href={`/products/${product.id}`}
                        className="block overflow-hidden bg-zinc-100 relative aspect-[4/3] w-full"
                        aria-label={`View ${product.name}`}
                      >
                        <Image
                          src={product.images[0]}
                          alt={`${product.name} by ${product.brand}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                          className={`object-cover transition-transform duration-700 ${hoveredProduct === product.id ? "scale-105" : "scale-100"}`}
                        />
                      </Link>
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-[10px] sm:text-[11px] font-medium tracking-wider text-zinc-400 uppercase mb-1">
                            {product.brand} &middot; {product.category}
                          </div>
                          <Link href={`/products/${product.id}`}>
                            <h2 className="text-sm sm:text-base font-medium text-zinc-900 line-clamp-1 hover:text-zinc-600 transition mb-1.5">
                              {product.name}
                            </h2>
                          </Link>
                          <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-4 min-h-[32px]">
                            {product.description}
                          </p>
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-semibold text-black mb-3">
                            {product.priceFormatted}
                          </div>
                          <Link
                            href={`/products/${product.id}`}
                            className="w-full bg-black text-white py-2.5 text-xs text-center font-medium block transition hover:bg-zinc-800 rounded-sm"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {paginatedProducts.map((product) => (
                    <article
                      key={product.id}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-5 bg-white border border-zinc-100 p-4 transition-all duration-300 hover:border-zinc-300 rounded-sm"
                    >
                      <Link
                        href={`/products/${product.id}`}
                        className="w-full sm:w-44 aspect-[4/3] sm:h-32 bg-zinc-100 overflow-hidden shrink-0 block rounded-sm relative"
                        aria-label={`View ${product.name}`}
                      >
                        <Image
                          src={product.images[0]}
                          alt={`${product.name} by ${product.brand}`}
                          fill
                          sizes="176px"
                          loading="lazy"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </Link>
                      <div className="flex-1 flex flex-col justify-between sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <div className="space-y-1">
                          <div className="text-[10px] sm:text-[11px] font-medium tracking-wider text-zinc-400 uppercase">
                            {product.brand} &middot; {product.category}
                          </div>
                          <Link href={`/products/${product.id}`}>
                            <h2 className="text-sm sm:text-base font-medium text-black hover:text-zinc-600 transition">
                              {product.name}
                            </h2>
                          </Link>
                          <p className="text-xs text-zinc-500 max-w-xl line-clamp-2 sm:line-clamp-none">
                            {product.description}
                          </p>
                        </div>
                        <div className="sm:text-right shrink-0 flex sm:flex-col justify-between items-center sm:items-end gap-2 mt-2 sm:mt-0">
                          <div className="text-base sm:text-lg font-semibold text-black">
                            {product.priceFormatted}
                          </div>
                          <Link
                            href={`/products/${product.id}`}
                            className="bg-black text-white px-4 sm:px-5 py-2 text-xs font-medium inline-block hover:bg-zinc-800 transition rounded-sm"
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
              <div className="text-center py-12 md:py-16 border border-dashed border-zinc-200 rounded-sm bg-white">
                <div className="inline-flex items-center justify-center w-11 h-11 bg-zinc-50 text-zinc-400 mb-3 rounded-full">
                  <Search size={18} aria-hidden="true" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-black mb-1">No products match filters</h3>
                <p className="text-[11px] sm:text-xs text-zinc-500 max-w-xs mx-auto px-4">
                  Try re-checking keywords or clearing active attributes.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-xs font-medium text-black underline underline-offset-4 hover:no-underline focus:outline-none"
                >
                  Reset all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredAndSortedProducts.length > 0 && totalPages > 1 && (
              <nav
                aria-label="Product pagination"
                className="flex justify-center mt-8 md:mt-12 pt-4 md:pt-6 border-t border-zinc-100"
              >
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="px-2.5 sm:px-3 py-2 text-xs font-medium border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed transition rounded-sm"
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
                      className={`w-8 h-8 sm:w-9 sm:h-9 text-xs font-medium transition rounded-sm ${
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
                    className="px-2.5 sm:px-3 py-2 text-xs font-medium border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed transition rounded-sm"
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