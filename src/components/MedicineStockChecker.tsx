import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, Filter, Sparkles, RefreshCw } from 'lucide-react';
import initialStock from '../data/medicineStock.json';

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  dosage: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  prescriptionRequired: boolean;
  description: string;
}

interface MedicineStockCheckerProps {
  onSelectMedicine?: (medicineName: string) => void;
  showTitle?: boolean;
  maxItems?: number;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onSelectMedicine,
  showTitle = true,
  maxItems,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(initialStock.map((item) => item.category)));
    return ['All', ...cats];
  }, []);

  const filteredItems = useMemo(() => {
    let result = initialStock as MedicineItem[];

    if (selectedCategory !== 'All') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (selectedStatus !== 'All') {
      result = result.filter((item) => item.status === selectedStatus);
    }

    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.brand.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.dosage.toLowerCase().includes(query)
      );
    }

    if (maxItems) {
      return result.slice(0, maxItems);
    }

    return result;
  }, [searchTerm, selectedCategory, selectedStatus, maxItems]);

  const getStatusBadge = (status: MedicineItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Available</span>
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-300">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
            <span>Limited Stock</span>
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-800 dark:bg-rose-950 dark:text-rose-300">
            <XCircle className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
            <span>Out of Stock</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full rounded-2xl bg-white p-6 md:p-8 shadow-xl dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
      {showTitle && (
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-emerald-100 p-1.5 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                <Sparkles className="h-4 w-4" />
              </span>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Live Medicine Stock Checker
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Verify real-time stock at our Aurangabad store before visiting or ordering
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Store Inventory Synced</span>
          </div>
        </div>
      )}

      {/* Search Input */}
      <div className="relative mb-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          id="medicine-search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Medicine Name, Brand, Salt (e.g. Dolo, Omron, Gloves, Telma, Calcium)..."
          className="w-full rounded-xl border border-slate-300 bg-slate-50/70 pl-11 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-850 transition-all shadow-xs"
        />
        {searchTerm && (
          <button
            id="clear-medicine-search"
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filter Categories */}
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
        <span className="font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
          <Filter className="h-3.5 w-3.5" /> Category:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            id={`filter-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-3 py-1 font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-750'
            }`}
          >
            {cat}
          </button>
        ))}

        <div className="ml-auto flex items-center gap-1.5 pt-2 sm:pt-0">
          <button
            id="filter-status-all"
            onClick={() => setSelectedStatus('All')}
            className={`rounded-lg px-2.5 py-1 text-xs ${
              selectedStatus === 'All'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All ({initialStock.length})
          </button>
          <button
            id="filter-status-available"
            onClick={() => setSelectedStatus('Available')}
            className={`rounded-lg px-2.5 py-1 text-xs ${
              selectedStatus === 'Available'
                ? 'bg-emerald-600 text-white font-semibold'
                : 'text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950'
            }`}
          >
            Available
          </button>
        </div>
      </div>

      {/* Inventory Grid / List */}
      {filteredItems.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 p-8 text-center dark:border-slate-800">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            No medicine matching &quot;{searchTerm}&quot; found in quick stock.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Need this item? Tap below to send a WhatsApp request and our pharmacist will arrange it!
          </p>
          {onSelectMedicine && (
            <button
              id="request-unlisted-medicine-btn"
              onClick={() => onSelectMedicine(searchTerm || 'Unlisted Medicine')}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 transition"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Inquire via WhatsApp</span>
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-4.5 shadow-xs hover:shadow-md hover:border-emerald-500/40 transition-all dark:border-slate-800 dark:bg-slate-850/50"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1 mt-0.5">
                      {item.name}
                    </h4>
                  </div>
                  {getStatusBadge(item.status)}
                </div>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {item.brand} • <span className="text-slate-600 dark:text-slate-300">{item.dosage}</span>
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-baseline justify-between mb-3 text-xs">
                  <div>
                    <span className="text-slate-400 text-[11px]">MRP: </span>
                    <span className="text-base font-bold text-slate-900 dark:text-white">
                      ₹{item.mrp.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 text-right">
                    <span>Exp: {item.expiry}</span>
                    <span className="mx-1">•</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      Qty: {item.availableQuantity}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {onSelectMedicine && (
                    <button
                      id={`order-btn-${item.id}`}
                      onClick={() => onSelectMedicine(item.name)}
                      disabled={item.status === 'Out of Stock'}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 text-xs font-semibold transition-all ${
                        item.status === 'Out of Stock'
                          ? 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed'
                          : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 shadow-xs'
                      }`}
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>{item.status === 'Out of Stock' ? 'Notify When In' : 'Order on WhatsApp'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Summary Footer */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 pt-4 dark:border-slate-800 gap-2">
        <span>Showing {filteredItems.length} of {initialStock.length} items in inventory</span>
        <span className="text-[11px]">All medicines stored under strict temperature and hygiene controls</span>
      </div>
    </div>
  );
};
