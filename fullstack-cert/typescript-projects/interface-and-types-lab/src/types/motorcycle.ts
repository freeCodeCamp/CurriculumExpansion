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


