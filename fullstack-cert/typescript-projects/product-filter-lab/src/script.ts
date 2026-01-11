interface Book {
  type: "book";
  title: string;
  author: string;
}

interface Electronics {
  type: "electronics";
  model: string;
  warranty: number;
}

interface Clothing {
  type: "clothing";
  brand: string;
  size: "S" | "M" | "L";
}

type Product = Book | Electronics | Clothing;

class Collection<T> {
  items: T[];
  constructor(items: T[]) {
    this.items = items;
  }

  getAll(): T[] {
    return this.items;
  }

  filter(callback: (item: T) => boolean): T[] {
    return this.items.filter(callback);
  }
}

function renderProduct(p: Product): string {
  if (p.type === "book") {
    return `
     <div class="item">
       <strong>Book:</strong> ${p.title} by ${p.author}
     </div>
   `;
  }

  if (p.type === "electronics") {
    return `
     <div class="item">
       <strong>Electronics:</strong> ${p.model} — Warranty: ${p.warranty} year(s)
     </div>
   `;
  }

  if (p.type === "clothing") {
    return `
     <div class="item">
       <strong>Clothing:</strong> ${p.brand} — Size ${p.size}
     </div>
   `;
  }


  const _never: never = p;
  throw new Error(`Unknown product type: ${p}`);
}

// Sample Data
const products = new Collection<Product>([
  // Books
  { type: "book", title: "1984", author: "George Orwell" },
  { type: "book", title: "Brave New World", author: "Aldous Huxley" },
  { type: "book", title: "Dune", author: "Frank Herbert" },


  // Electronics
  { type: "electronics", model: "Smartphone X", warranty: 2 },
  { type: "electronics", model: "Laptop Pro 15", warranty: 3 },
  { type: "electronics", model: "Noise-Cancelling Headphones", warranty: 1 },


  // Clothing
  { type: "clothing", brand: "CottonWear", size: "M" },
  { type: "clothing", brand: "UrbanStyle", size: "L" },
  { type: "clothing", brand: "FitFlex", size: "S" }
]);

const output = document.getElementById("output");

// Track currently active filter category (or undefined for all)
let currentFilter: Product["type"] | undefined = undefined;

function showProducts(filter?: Product["type"]): void {
  if (!output) return;

  let itemsToShow: Product[];

  // Toggle logic
  if (currentFilter === filter || filter === undefined) {
    // Reset to all if same button clicked again or filter is undefined
    itemsToShow = products.getAll();
    currentFilter = undefined;
    setActiveButton(undefined);
  } else {
    itemsToShow = products.filter((p: Product): boolean => p.type === filter);
    currentFilter = filter;
    setActiveButton(filter);
  }

  output.innerHTML = itemsToShow.map(renderProduct).join("");
}

// Active Button Highlighting
function setActiveButton(filter: Product["type"] | undefined): void {
  const buttons: { [key: string]: HTMLElement | null } = {
    all: document.getElementById("all"),
    book: document.getElementById("books"),
    electronics: document.getElementById("electronics"),
    clothing: document.getElementById("clothing")
  };

  for (const key in buttons) {
    buttons[key]?.classList.remove("active");
  }

  if (filter === undefined) {
    buttons["all"]?.classList.add("active");
  } else {
    buttons[filter]?.classList.add("active");
  }
}

// Button Event Handlers
document.getElementById("all")?.addEventListener("click", (): void => showProducts());
document.getElementById("books")?.addEventListener("click", (): void => showProducts("book"));
document.getElementById("electronics")?.addEventListener("click", (): void => showProducts("electronics"));
document.getElementById("clothing")?.addEventListener("click", (): void => showProducts("clothing"));

// Initial Render
showProducts();
