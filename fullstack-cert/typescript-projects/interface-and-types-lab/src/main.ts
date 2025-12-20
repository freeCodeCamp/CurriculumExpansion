// TYPES
type Category = 
  | 'Sport'
  | 'Cruiser'
  | 'Touring'
  | 'Dirt'
  | 'Adventure'
  | 'Naked'
  | 'Electric';

interface Motorcycle {
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


async function fetchMotorcycles() :  Promise<Motorcycle[]> 
{
    const result = await fetch(`https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json`);
    const motorcycles = await result.json();
    return [...motorcycles].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
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
export class MotorcycleGalleryApp {
  private allMotorcycles: Motorcycle[] = [];
  private filteredMotorcycles: Motorcycle[] = [];
  private nameFilter: string = '';

  constructor() {
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
      const data = await fetchMotorcycles();
      this.allMotorcycles = [...data];
      this.applyFilters();
    } catch (error) {
      console.error('Error loading motorcycles:', error);
    } finally {
      this.showLoading(false);
    }
  }

  private applyFilters(): void {
    this.filteredMotorcycles = this.allMotorcycles.filter((motorcycle) => {
      const matchesName = this.nameFilter === '' || 
        motorcycle.name.toLowerCase().includes(this.nameFilter.toLowerCase());
      return matchesName;
    });
    this.render();
  }

  private setupEventListeners(): void {
    // Name filter input listener
    const nameFilterInput = document.getElementById('name-filter-input') as HTMLInputElement;
    if (nameFilterInput) {
      nameFilterInput.addEventListener('input', (event: Event) => {
        const target = event.target as HTMLInputElement;
        this.nameFilter = target.value;
        this.applyFilters();
      });
    }
  }
 
  private render(): void {
    this.renderResultsCount();
    this.renderMotorcycles();
    this.setupComponentEventListeners();
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
    container.innerHTML = this.filteredMotorcycles
      .map((motorcycle) => {
        const cardComponent = new MotorcycleCardComponent();
        return cardComponent.render(motorcycle);
      })
      .join('');
  }

  private setupComponentEventListeners(): void {
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
