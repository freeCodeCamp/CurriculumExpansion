import { Filters as FilterType } from '../types/motorcycle';
import { Filter } from 'lucide-react';

interface FiltersProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
  categories: string[];
  manufacturers: string[];
  priceRange: { min: number; max: number };
}

export function Filters({
  filters,
  onFilterChange,
  categories,
  manufacturers,
  priceRange,
}: FiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-orange-500" />
        <h2 className="text-xl font-bold text-gray-900">Filter Motorcycles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Manufacturer
          </label>
          <select
            value={filters.manufacturer}
            onChange={(e) =>
              onFilterChange({ ...filters, manufacturer: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          >
            <option value="">All Manufacturers</option>
            {manufacturers.map((manufacturer) => (
              <option key={manufacturer} value={manufacturer}>
                {manufacturer}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Min Price: ${filters.minPrice.toLocaleString()}
          </label>
          <input
            type="range"
            min={priceRange.min}
            max={priceRange.max}
            step={1000}
            value={filters.minPrice}
            onChange={(e) =>
              onFilterChange({ ...filters, minPrice: Number(e.target.value) })
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Max Price: ${filters.maxPrice.toLocaleString()}
          </label>
          <input
            type="range"
            min={priceRange.min}
            max={priceRange.max}
            step={1000}
            value={filters.maxPrice}
            onChange={(e) =>
              onFilterChange({ ...filters, maxPrice: Number(e.target.value) })
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
        </div>
      </div>

      <button
        onClick={() =>
          onFilterChange({
            category: '',
            manufacturer: '',
            minPrice: priceRange.min,
            maxPrice: priceRange.max,
          })
        }
        className="mt-6 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors duration-200"
      >
        Reset Filters
      </button>
    </div>
  );
}
