'use client';

import { useMemo, useState } from 'react';
import { catalog, catalogItemCount } from '@/lib/catalog-data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';

export default function CatalogBrowser() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<string>('all');

  const normalized = query.trim().toLowerCase();

  const visible = useMemo(() => {
    return catalog
      .filter((cat) => active === 'all' || cat.id === active)
      .map((cat) => ({
        ...cat,
        items: normalized
          ? cat.items.filter(
              (item) =>
                item.name.toLowerCase().includes(normalized) ||
                item.sku.toLowerCase().includes(normalized)
            )
          : cat.items,
      }))
      .filter((cat) => cat.items.length > 0);
  }, [normalized, active]);

  const shown = visible.reduce((n, c) => n + c.items.length, 0);

  return (
    <div>
      {/* Controls */}
      <div className="mb-10">
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            aria-label="Search products"
            className="pl-9 pr-9"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActive('all')}
            aria-pressed={active === 'all'}
            className={
              active === 'all'
                ? 'px-4 py-2 rounded-full text-sm font-medium bg-primary text-white'
                : 'px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors'
            }
          >
            All Products
          </button>
          {catalog.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              aria-pressed={active === cat.id}
              className={
                active === cat.id
                  ? 'px-4 py-2 rounded-full text-sm font-medium bg-primary text-white'
                  : 'px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors'
              }
            >
              {cat.title}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-4" role="status">
          Showing {shown} of {catalogItemCount} products
        </p>
      </div>

      {/* Results */}
      {visible.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-700 mb-2">
            No products match &ldquo;{query}&rdquo;.
          </p>
          <p className="text-gray-500 mb-6">
            We stock more than what&rsquo;s listed here — tell us what you need.
          </p>
          <Button asChild>
            <a href="/quote">Request It</a>
          </Button>
        </div>
      ) : (
        <div className="space-y-14">
          {visible.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{cat.title}</h2>
              <p className="text-gray-600 mb-6 max-w-3xl">{cat.blurb}</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.items.map((item) => (
                  <li
                    key={cat.id + item.sku + item.name}
                    className="border border-gray-200 rounded-lg p-4 bg-white hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <p className="font-medium text-gray-900 leading-snug">{item.name}</p>
                    {item.note && (
                      <p className="text-sm text-primary mt-1">{item.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
