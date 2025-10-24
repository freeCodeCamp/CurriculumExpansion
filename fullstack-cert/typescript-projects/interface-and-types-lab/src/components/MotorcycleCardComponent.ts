import { Motorcycle } from '../types/motorcycle';

export class MotorcycleCardComponent {
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
    // Add click listeners to view details buttons
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
    // For now, just log the ID. In a real app, you might navigate to a details page
    console.log('View details for motorcycle:', motorcycleId);
    alert(`View details for motorcycle ID: ${motorcycleId}`);
  }
}
