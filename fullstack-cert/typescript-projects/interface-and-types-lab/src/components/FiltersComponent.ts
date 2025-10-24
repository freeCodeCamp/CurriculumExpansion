import { Filters, Category } from '../types/motorcycle';

export class FiltersComponent {
  private categories: string[] = [];
  private manufacturers: string[] = [];
  private priceRange: { min: number; max: number } = { min: 0, max: 50000 };

  updateData(categories: string[], manufacturers: string[], priceRange: { min: number; max: number }): void {
    this.categories = categories;
    this.manufacturers = manufacturers;
    this.priceRange = priceRange;
  }

  render(filters: Filters): string {
    return `
      <div class="filters-container">
        <div class="filters-header">
        
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-funnel-plus-icon lucide-funnel-plus w-5 h-5 text-orange-500"><path d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348"/><path d="M16 6h6"/><path d="M19 3v6"/></svg>
          <h2 class="filters-title">Filter Motorcycles</h2>
        </div>

        <div class="filters-grid">
          <div>
            <label class="filters-label">Category</label>
            <select id="category-filter" class="filters-select">
              <option value="">All Categories</option>
              ${this.categories.map(category => 
                `<option value="${category}" ${filters.category === category ? 'selected' : ''}>${category}</option>`
              ).join('')}
            </select>
          </div>

          <div>
            <label class="filters-label">Manufacturer</label>
            <select id="manufacturer-filter" class="filters-select">
              <option value="">All Manufacturers</option>
              ${this.manufacturers.map(manufacturer => 
                `<option value="${manufacturer}" ${filters.manufacturer === manufacturer ? 'selected' : ''}>${manufacturer}</option>`
              ).join('')}
            </select>
          </div>

          <div>
            <label class="filters-label">Min Price: $${filters.minPrice.toLocaleString()}</label>
            <input
              type="range"
              id="min-price-filter"
              min="${this.priceRange.min}"
              max="${this.priceRange.max}"
              step="1000"
              value="${filters.minPrice}"
              class="filters-range"
            />
          </div>

          <div>
            <label class="filters-label">Max Price: $${filters.maxPrice.toLocaleString()}</label>
            <input
              type="range"
              id="max-price-filter"
              min="${this.priceRange.min}"
              max="${this.priceRange.max}"
              step="1000"
              value="${filters.maxPrice}"
              class="filters-range"
            />
          </div>
        </div>

        <button id="reset-filters" class="filters-reset-button">
          Reset Filters
        </button>
      </div>
    `;
  }

  setupEventListeners(): void {
    // Category filter
    const categoryFilter = document.getElementById('category-filter') as HTMLSelectElement;
    if (categoryFilter) {
      categoryFilter.addEventListener('change', () => this.onFilterChange());
    }

    // Manufacturer filter
    const manufacturerFilter = document.getElementById('manufacturer-filter') as HTMLSelectElement;
    if (manufacturerFilter) {
      manufacturerFilter.addEventListener('change', () => this.onFilterChange());
    }

    // Min price filter
    const minPriceFilter = document.getElementById('min-price-filter') as HTMLInputElement;
    if (minPriceFilter) {
      minPriceFilter.addEventListener('input', () => this.onFilterChange());
    }

    // Max price filter
    const maxPriceFilter = document.getElementById('max-price-filter') as HTMLInputElement;
    if (maxPriceFilter) {
      maxPriceFilter.addEventListener('input', () => this.onFilterChange());
    }

    // Reset button
    const resetButton = document.getElementById('reset-filters');
    if (resetButton) {
      resetButton.addEventListener('click', () => this.onResetFilters());
    }
  }

  private onFilterChange(): void {
    const categoryFilter = document.getElementById('category-filter') as HTMLSelectElement;
    const manufacturerFilter = document.getElementById('manufacturer-filter') as HTMLSelectElement;
    const minPriceFilter = document.getElementById('min-price-filter') as HTMLInputElement;
    const maxPriceFilter = document.getElementById('max-price-filter') as HTMLInputElement;

    const filters: Filters = {
      category: (categoryFilter?.value as Category) || '',
      manufacturer: manufacturerFilter?.value || '',
      minPrice: Number(minPriceFilter?.value) || 0,
      maxPrice: Number(maxPriceFilter?.value) || 50000,
    };

    // Dispatch custom event
    document.dispatchEvent(new CustomEvent('filterChange', { detail: filters }));
  }

  private onResetFilters(): void {
    const filters: Filters = {
      category: '',
      manufacturer: '',
      minPrice: this.priceRange.min,
      maxPrice: this.priceRange.max,
    };

    document.dispatchEvent(new CustomEvent('filterChange', { detail: filters }));
  }
}
