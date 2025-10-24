import { MotorcycleService } from './services/motorcycleService';
import { Motorcycle, Filters } from './types/motorcycle';
import { FiltersComponent } from './components/FiltersComponent';
import { MotorcycleCardComponent } from './components/MotorcycleCardComponent';
import { PaginationComponent } from './components/PaginationComponent';

class MotorcycleGalleryApp {
  private motorcycles: Motorcycle[] = [];
  private filteredMotorcycles: Motorcycle[] = [];
  private currentPage: number = 1;
  private filters: Filters = {
    category: '',
    manufacturer: '',
    minPrice: 0,
    maxPrice: 50000,
  };
  private categories: string[] = [];
  private manufacturers: string[] = [];
  private priceRange: { min: number; max: number } = { min: 0, max: 50000 };
  private itemsPerPage: number = 9;

  private filtersComponent: FiltersComponent;
  private paginationComponent: PaginationComponent;

  constructor() {
    this.filtersComponent = new FiltersComponent();
    this.paginationComponent = new PaginationComponent();
    this.init();
  }

  private async init(): Promise<void> {
    await this.loadMotorcycles();
    this.setupEventListeners();
    this.render();
  }

  private async loadMotorcycles(): Promise<void> {
    this.showLoading(true);
    
    try {
      const data = await MotorcycleService.getMotorcycles();
      this.motorcycles = data;
      this.filteredMotorcycles = [...data];

      this.categories = MotorcycleService.getCategories();
      this.manufacturers = MotorcycleService.getManufacturers();
      this.priceRange = MotorcycleService.getPriceRange();
      
      this.filters.minPrice = this.priceRange.min;
      this.filters.maxPrice = this.priceRange.max;

      this.filtersComponent.updateData(this.categories, this.manufacturers, this.priceRange);
    } catch (error) {
      console.error('Error loading motorcycles:', error);
    } finally {
      this.showLoading(false);
    }
  }

  private setupEventListeners(): void {
    // Listen for filter changes
    document.addEventListener('filterChange', (event: Event) => {
      const customEvent = event as CustomEvent<Filters>;
      this.filters = customEvent.detail;
      this.applyFilters();
    });

    // Listen for page changes
    document.addEventListener('pageChange', (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      this.currentPage = customEvent.detail;
      this.renderMotorcycles();
    });
  }

  private applyFilters(): void {
    let filtered = [...this.motorcycles];

    if (this.filters.category) {
      filtered = filtered.filter((m) => m.category === this.filters.category);
    }

    if (this.filters.manufacturer) {
      filtered = filtered.filter((m) => m.manufacturer === this.filters.manufacturer);
    }

    filtered = filtered.filter(
      (m) => m.price >= this.filters.minPrice && m.price <= this.filters.maxPrice
    );

    this.filteredMotorcycles = filtered;
    this.currentPage = 1;
    this.render();
  }

  private render(): void {
    this.renderFilters();
    this.renderResultsCount();
    this.renderMotorcycles();
    this.renderPagination();
    this.setupComponentEventListeners();
  }

  private renderFilters(): void {
    const container = document.getElementById('filters-container');
    if (container) {
      container.innerHTML = this.filtersComponent.render(this.filters);
    }
  }

  private renderResultsCount(): void {
    const resultsNumber = document.getElementById('results-number');
    if (resultsNumber) {
      resultsNumber.textContent = this.filteredMotorcycles.length.toString();
    }
  }

  private renderMotorcycles(): void {
    const container = document.getElementById('motorcycle-grid');
    const noResults = document.getElementById('no-results');
    
    if (!container) return;

    if (this.filteredMotorcycles.length === 0) {
      container.style.display = 'none';
      if (noResults) {
        noResults.style.display = 'block';
      }
      return;
    }

    if (noResults) {
      noResults.style.display = 'none';
    }
    container.style.display = 'grid';

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const paginatedMotorcycles = this.filteredMotorcycles.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );

    container.innerHTML = paginatedMotorcycles
      .map((motorcycle) => {
        const cardComponent = new MotorcycleCardComponent();
        return cardComponent.render(motorcycle);
      })
      .join('');
  }

  private renderPagination(): void {
    const container = document.getElementById('pagination-container');
    if (!container) return;

    const totalPages = Math.ceil(this.filteredMotorcycles.length / this.itemsPerPage);
    
    if (totalPages <= 1) {
      container.style.display = 'none';
      return;
    }

    container.style.display = 'flex';
    container.innerHTML = this.paginationComponent.render(this.currentPage, totalPages);
  }

  private setupComponentEventListeners(): void {
    this.filtersComponent.setupEventListeners();
    this.paginationComponent.setupEventListeners();
    
    // Setup motorcycle card event listeners
    const cardComponent = new MotorcycleCardComponent();
    cardComponent.setupEventListeners();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  private showLoading(show: boolean): void {
    const loadingContainer = document.getElementById('loading-container');
    const motorcycleGrid = document.getElementById('motorcycle-grid');
    
    if (loadingContainer) {
      loadingContainer.style.display = show ? 'flex' : 'none';
    }
    
    if (motorcycleGrid) {
      motorcycleGrid.style.display = show ? 'none' : 'grid';
    }
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MotorcycleGalleryApp();
});
