import { MotorcycleService } from './services/motorcycleService';
import { Motorcycle } from './types/motorcycle';
import { MotorcycleCardComponent } from './components/MotorcycleCardComponent';
import { PaginationComponent } from './components/PaginationComponent';

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
    // Listen for page changes
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
    
    // Setup motorcycle card event listeners
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

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MotorcycleGalleryApp();
});
