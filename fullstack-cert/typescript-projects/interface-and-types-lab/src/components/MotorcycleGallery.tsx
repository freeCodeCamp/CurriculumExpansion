import { useState, useEffect } from 'react';
import { MotorcycleService } from '../services/motorcycleService';
import { Motorcycle, Filters as FilterType } from '../types/motorcycle';
import { MotorcycleCard } from './MotorcycleCard';
import { Filters } from './Filters';
import { Pagination } from './Pagination';
import { Loader2 } from 'lucide-react';

const ITEMS_PER_PAGE = 9;

export function MotorcycleGallery() {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
  const [filteredMotorcycles, setFilteredMotorcycles] = useState<Motorcycle[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterType>({
    category: '',
    manufacturer: '',
    minPrice: 0,
    maxPrice: 50000,
  });

  const [categories, setCategories] = useState<string[]>([]);
  const [manufacturers, setManufacturers] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });

  useEffect(() => {
    fetchMotorcycles();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [motorcycles, filters]);

  const fetchMotorcycles = async () => {
    try {
      const data = await MotorcycleService.getMotorcycles();

      if (data) {
        setMotorcycles(data);

        const uniqueCategories = MotorcycleService.getCategories();
        const uniqueManufacturers = MotorcycleService.getManufacturers();
        const priceRange = MotorcycleService.getPriceRange();

        setCategories(uniqueCategories);
        setManufacturers(uniqueManufacturers);
        setPriceRange(priceRange);
        setFilters((prev) => ({ ...prev, minPrice: priceRange.min, maxPrice: priceRange.max }));
      }
    } catch (error) {
      console.error('Error fetching motorcycles:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...motorcycles];

    if (filters.category) {
      filtered = filtered.filter((m) => m.category === filters.category);
    }

    if (filters.manufacturer) {
      filtered = filtered.filter((m) => m.manufacturer === filters.manufacturer);
    }

    filtered = filtered.filter(
      (m) => m.price >= filters.minPrice && m.price <= filters.maxPrice
    );

    setFilteredMotorcycles(filtered);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredMotorcycles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedMotorcycles = filteredMotorcycles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Filters
        filters={filters}
        onFilterChange={setFilters}
        categories={categories}
        manufacturers={manufacturers}
        priceRange={priceRange}
      />

      <div className="mb-6">
        <p className="text-gray-600">
          Showing <span className="font-bold text-gray-900">{filteredMotorcycles.length}</span>{' '}
          motorcycles
        </p>
      </div>

      {paginatedMotorcycles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            No motorcycles found matching your filters.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedMotorcycles.map((motorcycle) => (
              <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
}
