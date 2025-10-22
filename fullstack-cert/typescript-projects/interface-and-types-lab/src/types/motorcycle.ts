export interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  price: number;
  image_url: string;
  description: string;
  year: number;
  engine_cc: number;
  created_at: string;
}

export interface Filters {
  category: string;
  manufacturer: string;
  minPrice: number;
  maxPrice: number;
}
