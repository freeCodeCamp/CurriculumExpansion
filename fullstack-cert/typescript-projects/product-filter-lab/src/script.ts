interface Item {
  type: "book" | "electronics" | "clothing";
  id: string;
  price: number;
}

interface Book extends Item {
  type: "book";
  title: string;
  author: string;
}

interface Electronics extends Item {
  type: "electronics";
  item: string;
  model: string;
  warranty?: number;
}

interface Clothing extends Item {
  type: "clothing";
  item: string;
  brand: string;
  size?: "S" | "M" | "L";
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
  const createProductCard = (id: string, content: string, price: number): string => {
    return `
     <div class="item" id="${id}">
       ${content}
       <div class="price">$${price}</div>
     </div>
   `;
  };

  if (p.type === "book") {
    const content = `<strong>Book:</strong> ${p.title} by ${p.author}`;
    return createProductCard(p.id, content, p.price);
  }

  if (p.type === "electronics") {
    const warranty = p.warranty ? ` — Warranty: ${p.warranty} year(s)` : "";
    const content = `<strong>Electronics:</strong> ${p.item} - ${p.model}${warranty}`;
    return createProductCard(p.id, content, p.price);
  }

  if (p.type === "clothing") {
    const size = p.size ? ` — Size ${p.size}` : "";
    const content = `<strong>Clothing:</strong> ${p.item} by ${p.brand}${size}`;
    return createProductCard(p.id, content, p.price);
  }

  const _never: never = p;
  throw new Error(`Unknown product type: ${p}`);
}


const products = new Collection<Product>([
  { id: "c1", type: "clothing", item: "Jacket", brand: "Northloom", size: "M", price: 89.99 },
  { id: "e1", type: "electronics", item: "Tablet", model: "Pixelon Slate-A9", warranty: 2, price: 349.99 },
  { id: "b1", type: "book", title: "Dune", author: "Frank Herbert", price: 14.99 },

  { id: "e2", type: "electronics", item: "Smartphone", model: "NovaCore X1-Alpha", warranty: 2, price: 699.99 },
  { id: "c2", type: "clothing", item: "Hoodie", brand: "CozyForge", size: "S", price: 49.99 },
  { id: "b2", type: "book", title: "1984", author: "George Orwell", price: 9.99 },

  { id: "e3", type: "electronics", item: "Headphones", model: "EchoSphere Silent-7", price: 129.99 },
  { id: "c3", type: "clothing", item: "Jeans", brand: "BlueWeave", size: "L", price: 59.99 },
  { id: "e4", type: "electronics", item: "Laptop", model: "HexaBook Orion-15", warranty: 3, price: 1199.99 },

  { id: "b3", type: "book", title: "Brave New World", author: "Aldous Huxley", price: 11.99 },
  { id: "c4", type: "clothing", item: "T-Shirt", brand: "Fabricon", price: 19.99 },
  { id: "e5", type: "electronics", item: "Smartwatch", model: "Chronex Pulse-Q", warranty: 1, price: 199.99 },

  { id: "b4", type: "book", title: "The Lord of the Rings", author: "J.R.R. Tolkien", price: 24.99 },
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
