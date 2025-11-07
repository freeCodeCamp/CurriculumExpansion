// TYPES
export type Category = 
  | 'Sport'
  | 'Cruiser'
  | 'Touring'
  | 'Dirt'
  | 'Standard'
  | 'Adventure'
  | 'Naked'
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

// DATA
const motorcyclesData: Motorcycle[] = [
  {
    id: "1",
    name: "Ninja H2",
    manufacturer: "Kawasaki",
    category: "Sport",
    price: 29000,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-vmoto-stash.jpg",
    description: "Supercharged hypersport with unmatched power",
    year: 2024,
    engine_cc: 998,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: "2",
    name: "Street Triple RS",
    manufacturer: "Triumph",
    category: "Naked",
    price: 13500,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-yamaha-r3.png",
    description: "Agile naked bike with triple-cylinder perfection",
    year: 2024,
    engine_cc: 765,
    created_at: "2024-01-02T00:00:00Z"
  },
  {
    id: "3",
    name: "R1250 GS Adventure",
    manufacturer: "BMW",
    category: "Adventure",
    price: 21995,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-vmoto-stash.jpg",
    description: "The ultimate adventure touring machine",
    year: 2024,
    engine_cc: 1254,
    created_at: "2024-01-03T00:00:00Z"
  },
  {
    id: "4",
    name: "Panigale V4",
    manufacturer: "Ducati",
    category: "Sport",
    price: 28395,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-kawasaki-zx10r.png",
    description: "Italian superbike engineering at its finest",
    year: 2024,
    engine_cc: 1103,
    created_at: "2024-01-04T00:00:00Z"
  },
  {
    id: "5",
    name: "Road Glide Special",
    manufacturer: "Harley-Davidson",
    category: "Cruiser",
    price: 29999,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-yamaha-vmax.jpg",
    description: "Classic American touring with modern tech",
    year: 2024,
    engine_cc: 1868,
    created_at: "2024-01-05T00:00:00Z"
  },
  {
    id: "6",
    name: "MT-09",
    manufacturer: "Yamaha",
    category: "Naked",
    price: 9999,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-yamaha-mt7.jpg",
    description: "Lightweight naked bike with crossplane power",
    year: 2024,
    engine_cc: 890,
    created_at: "2024-01-06T00:00:00Z"
  },
  {
    id: "7",
    name: "Africa Twin",
    manufacturer: "Honda",
    category: "Adventure",
    price: 14599,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-honda-africa.jpg",
    description: "Legendary adventure bike reborn for modern times",
    year: 2024,
    engine_cc: 1084,
    created_at: "2024-01-07T00:00:00Z"
  },
  {
    id: "8",
    name: "Super Duke R",
    manufacturer: "KTM",
    category: "Naked",
    price: 18999,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-suzuki-sv650.jpg",
    description: "The Beast returns with 180hp of raw power",
    year: 2024,
    engine_cc: 1301,
    created_at: "2024-01-08T00:00:00Z"
  },
  {
    id: "9",
    name: "GSX-R1000R",
    manufacturer: "Suzuki",
    category: "Sport",
    price: 17199,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-suzuki-gsxr1000.jpg",
    description: "Track-ready sportbike with championship DNA",
    year: 2024,
    engine_cc: 999,
    created_at: "2024-01-09T00:00:00Z"
  },
  {
    id: "10",
    name: "Street Glide",
    manufacturer: "Harley-Davidson",
    category: "Cruiser",
    price: 21999,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-yamaha-vmax.jpg",
    description: "Milwaukee-Eight power in a sleek bagger",
    year: 2024,
    engine_cc: 1868,
    created_at: "2024-01-10T00:00:00Z"
  },
  {
    id: "11",
    name: "Z H2",
    manufacturer: "Kawasaki",
    category: "Naked",
    price: 17000,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-kawasaki-zh2.jpg",
    description: "Supercharged naked bike mayhem",
    year: 2024,
    engine_cc: 998,
    created_at: "2024-01-11T00:00:00Z"
  },
  {
    id: "12",
    name: "Multistrada V4",
    manufacturer: "Ducati",
    category: "Adventure",
    price: 22995,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-yamaha-mt3.jpg",
    description: "Italian style meets adventure capability",
    year: 2024,
    engine_cc: 1158,
    created_at: "2024-01-12T00:00:00Z"
  },
  {
    id: "13",
    name: "Speed Triple 1200",
    manufacturer: "Triumph",
    category: "Naked",
    price: 16500,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-honda-transalp.jpg",
    description: "British muscle bike with cutting-edge tech",
    year: 2024,
    engine_cc: 1160,
    created_at: "2024-01-13T00:00:00Z"
  },
  {
    id: "14",
    name: "S1000RR",
    manufacturer: "BMW",
    category: "Sport",
    price: 17295,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-kawasaki-z900a1.jpg",
    description: "German precision in a superbike package",
    year: 2024,
    engine_cc: 999,
    created_at: "2024-01-14T00:00:00Z"
  },
  {
    id: "15",
    name: "MT-07",
    manufacturer: "Yamaha",
    category: "Naked",
    price: 7999,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-yamaha-mt7.jpg",
    description: "Best-selling parallel twin for pure fun",
    year: 2024,
    engine_cc: 689,
    created_at: "2024-01-15T00:00:00Z"
  },
  {
    id: "16",
    name: "V-Strom 1050",
    manufacturer: "Suzuki",
    category: "Adventure",
    price: 13799,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-benelli-trk702.png",
    description: "Reliable adventure touring on a budget",
    year: 2024,
    engine_cc: 1037,
    created_at: "2024-01-16T00:00:00Z"
  },
  {
    id: "17",
    name: "Sportster S",
    manufacturer: "Harley-Davidson",
    category: "Cruiser",
    price: 15999,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-yamaha-r3.png",
    description: "Revolution Max engine in a modern cruiser",
    year: 2024,
    engine_cc: 1252,
    created_at: "2024-01-17T00:00:00Z"
  },
  {
    id: "18",
    name: "CBR1000RR-R",
    manufacturer: "Honda",
    category: "Sport",
    price: 28500,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-honda-cbr500.png",
    description: "Honda racing technology for the street",
    year: 2024,
    engine_cc: 999,
    created_at: "2024-01-18T00:00:00Z"
  },
  {
    id: "19",
    name: "Tiger 900",
    manufacturer: "Triumph",
    category: "Adventure",
    price: 14400,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-triumph-tiger900.png",
    description: "Middleweight adventure excellence",
    year: 2024,
    engine_cc: 888,
    created_at: "2024-01-19T00:00:00Z"
  },
  {
    id: "20",
    name: "890 Duke R",
    manufacturer: "KTM",
    category: "Naked",
    price: 11999,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-kawasaki-zx10r.png",
    description: "The Scalpel - precise handling perfection",
    year: 2024,
    engine_cc: 890,
    created_at: "2024-01-20T00:00:00Z"
  },
  {
    id: "21",
    name: "Ninja 400",
    manufacturer: "Kawasaki",
    category: "Sport",
    price: 5299,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-vmoto-stash.jpg",
    description: "Perfect entry-level sportbike",
    year: 2024,
    engine_cc: 399,
    created_at: "2024-01-21T00:00:00Z"
  },
  {
    id: "22",
    name: "Scrambler 1200",
    manufacturer: "Triumph",
    category: "Adventure",
    price: 13250,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-ducati-scrambler.jpg",
    description: "Modern classic with off-road capability",
    year: 2024,
    engine_cc: 1200,
    created_at: "2024-01-22T00:00:00Z"
  },
  {
    id: "23",
    name: "Monster Plus",
    manufacturer: "Ducati",
    category: "Naked",
    price: 14295,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-kawasaki-zx10r.png",
    description: "Evolved Monster with V-twin soul",
    year: 2024,
    engine_cc: 937,
    created_at: "2024-01-23T00:00:00Z"
  },
  {
    id: "24",
    name: "CB650R",
    manufacturer: "Honda",
    category: "Naked",
    price: 9199,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-kawasaki-z900.png",
    description: "Neo Sports Café styling with inline-four power",
    year: 2024,
    engine_cc: 649,
    created_at: "2024-01-24T00:00:00Z"
  },
  {
    id: "25",
    name: "Low Rider S",
    manufacturer: "Harley-Davidson",
    category: "Cruiser",
    price: 17999,
    image_url: "https://cdn.freecodecamp.org/curriculum/labs/motorcycle-suzuki-vstorm650.jpg",
    description: "Blacked-out cruiser with attitude",
    year: 2024,
    engine_cc: 1868,
    created_at: "2024-01-25T00:00:00Z"
  }
];


// MOTORCYCLE SERVICE
class MotorcycleService {
  private static motorcycles: Motorcycle[] = motorcyclesData;

  static async getMotorcycles(): Promise<Motorcycle[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return [...this.motorcycles].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
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
      const data = await MotorcycleService.getMotorcycles();
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
