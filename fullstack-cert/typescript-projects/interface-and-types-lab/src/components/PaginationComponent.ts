export class PaginationComponent {
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
