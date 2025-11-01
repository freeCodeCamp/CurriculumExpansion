// TYPES
export type Category = 
  | 'Sport'
  | 'Cruiser'
  | 'Touring'
  | 'Dirt'
  | 'Standard'
  | 'Electric';

export interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  description: string;
  year: number;
  engine_cc: number;
  created_at: string;
}

export interface Filters {
  category: Category | '';
  manufacturer: string;
  minPrice: number;
  maxPrice: number;
}

// DATA IMPORTS
import motorcyclesData from './data/motorcycles.json';
import categoriesData from './data/categories.json';

// MOTORCYCLE SERVICE
class MotorcycleService {
  private static motorcycles: Motorcycle[] = motorcyclesData as Motorcycle[];

  static async getMotorcycles(): Promise<Motorcycle[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return [...this.motorcycles].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  static async getMotorcycleById(id: string): Promise<Motorcycle | null> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return this.motorcycles.find(motorcycle => motorcycle.id === id) || null;
  }

  static getCategories(): Category[] {
    const categories = categoriesData as Category[];
    return [...categories].sort();
  }

  static getManufacturers(): string[] {
    const uniqueManufacturers = [...new Set(this.motorcycles.map(m => m.manufacturer))];
    return uniqueManufacturers.sort();
  }

  static getPriceRange(): { min: number; max: number } {
    const prices = this.motorcycles.map(m => m.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }
}

// PAGINATION COMPONENT
class PaginationComponent {
  render(currentPage: number, totalPages: number): string {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const visiblePages = this.getVisiblePages(currentPage, totalPages, pages);

    return `
      <button
        class="pagination-button ${currentPage === 1 ? 'disabled' : ''}"
        data-action="prev"
        ${currentPage === 1 ? 'disabled' : ''}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left w-5 h-5"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      ${visiblePages.map((page) => {
        if (page === '...') {
          return `<button class="pagination-button ellipsis" disabled>...</button>`;
        }
        
        const isActive = page === currentPage;
        return `
          <button
            class="pagination-button ${isActive ? 'active' : ''}"
            data-page="${page}"
            ${isActive ? 'disabled' : ''}
          >
            ${page}
          </button>
        `;
      }).join('')}

      <button
        class="pagination-button ${currentPage === totalPages ? 'disabled' : ''}"
        data-action="next"
        ${currentPage === totalPages ? 'disabled' : ''}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right w-5 h-5"><path d="m9 18 6-6-6-6 w-5 h-5"/></svg>
      </button>
    `;
  }

  private getVisiblePages(currentPage: number, totalPages: number, pages: number[]): (number | string)[] {
    if (totalPages <= 7) return pages;
    if (currentPage <= 4) {
      return [...pages.slice(0, 5), '...', totalPages];
    }
    if (currentPage >= totalPages - 3) {
      return [1, '...', ...pages.slice(totalPages - 5)];
    }
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  }

  setupEventListeners(): void {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const button = target.closest('.pagination-button') as HTMLButtonElement;
      if (!button) return;
      const action = button.getAttribute('data-action');
      const page = button.getAttribute('data-page');
      if (action === 'prev') {
        const currentPage = this.getCurrentPage();
        if (currentPage > 1) {
          document.dispatchEvent(new CustomEvent('pageChange', { detail: currentPage - 1 }));
        }
      } else if (action === 'next') {
        const currentPage = this.getCurrentPage();
        const totalPages = this.getTotalPages();
        if (currentPage < totalPages) {
          document.dispatchEvent(new CustomEvent('pageChange', { detail: currentPage + 1 }));
        }
      } else if (page) {
        const pageNumber = parseInt(page, 10);
        document.dispatchEvent(new CustomEvent('pageChange', { detail: pageNumber }));
      }
    });
  }

  private getCurrentPage(): number {
    const activeButton = document.querySelector('.pagination-button.active');
    if (activeButton) {
      const page = activeButton.getAttribute('data-page');
      return page ? parseInt(page, 10) : 1;
    }
    return 1;
  }

  private getTotalPages(): number {
    const paginationContainer = document.getElementById('pagination-container');
    if (paginationContainer) {
      const buttons = paginationContainer.querySelectorAll('.pagination-button[data-page]');
      return buttons.length;
    }
    return 1;
  }
}

// MOTORCYCLE CARD COMPONENT
class MotorcycleCardComponent {
  render(motorcycle: Motorcycle): string {
    return `
      <div class="motorcycle-card">
        <div class="motorcycle-card-image-container">
          <img
            src="${motorcycle.image_url}"
            alt="${motorcycle.name}"
            class="motorcycle-card-image"
          />
          <div class="motorcycle-card-year-badge">
            ${motorcycle.year}
          </div>
        </div>
        <div class="motorcycle-card-content">
          <div class="motorcycle-card-header">
            <div>
              <h3 class="motorcycle-card-title">${motorcycle.name}</h3>
              <p class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</p>
            </div>
            <span class="motorcycle-card-category">
              ${motorcycle.category}
            </span>
          </div>
          <p class="motorcycle-card-description">${motorcycle.description}</p>
          <div class="motorcycle-card-footer">
            <div>
              <p class="motorcycle-card-price">
                $${motorcycle.price.toLocaleString()}
              </p>
              <p class="motorcycle-card-engine">${motorcycle.engine_cc}cc</p>
            </div>
            <button class="motorcycle-card-button" data-motorcycle-id="${motorcycle.id}">
              View Details
            </button>
          </div>
        </div>
      </div>
    `;
  }

  setupEventListeners(): void {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('motorcycle-card-button')) {
        const motorcycleId = target.getAttribute('data-motorcycle-id');
        if (motorcycleId) {
          this.onViewDetails(motorcycleId);
        }
      }
    });
  }

  private onViewDetails(motorcycleId: string): void {
    console.log('View details for motorcycle:', motorcycleId);
    alert(`View details for motorcycle ID: ${motorcycleId}`);
  }
}

// MAIN APPLICATION
class MotorcycleGalleryApp {
  private motorcycles: Motorcycle[] = [];
  private currentPage: number = 1;
  private itemsPerPage: number = 9;
  private paginationComponent: PaginationComponent;

  constructor() {
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
      this.motorcycles = [...data];
    } catch (error) {
      console.error('Error loading motorcycles:', error);
    } finally {
      this.showLoading(false);
    }
  }

  private setupEventListeners(): void {
    document.addEventListener('pageChange', (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      this.currentPage = customEvent.detail;
      this.renderMotorcycles();
      this.renderPagination();
    });
  }
 
  private render(): void {
    this.renderResultsCount();
    this.renderMotorcycles();
    this.renderPagination();
    this.setupComponentEventListeners();
  }

  private renderResultsCount(): void {
    const resultsNumber = document.getElementById('results-number');
    if (resultsNumber) {
      resultsNumber.textContent = this.motorcycles.length.toString();
    }
  }

  private renderMotorcycles(): void {
    const container = document.getElementById('motorcycle-grid');
    const noResults = document.getElementById('no-results');
    if (!container) return;
    if (this.motorcycles.length === 0) {
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
    const paginatedMotorcycles = this.motorcycles.slice(
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
    const totalPages = Math.ceil(this.motorcycles.length / this.itemsPerPage);
    if (totalPages <= 1) {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'flex';
    container.innerHTML = this.paginationComponent.render(this.currentPage, totalPages);
  }

  private setupComponentEventListeners(): void {
    this.paginationComponent.setupEventListeners();
    const cardComponent = new MotorcycleCardComponent();
    cardComponent.setupEventListeners();
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

// INITIALIZE APP
document.addEventListener('DOMContentLoaded', () => {
  new MotorcycleGalleryApp();
});
