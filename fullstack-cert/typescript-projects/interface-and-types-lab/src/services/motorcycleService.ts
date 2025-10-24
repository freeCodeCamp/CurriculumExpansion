import { Motorcycle, Category } from '../types/motorcycle';
import motorcyclesData from '../data/motorcycles.json';
import categoriesData from '../data/categories.json';

export class MotorcycleService {
  private static motorcycles: Motorcycle[] = motorcyclesData as Motorcycle[];

  static async getMotorcycles(): Promise<Motorcycle[]> {
    // Simulate async loading with a small delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Sort by created_at in descending order (newest first)
    return [...this.motorcycles].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  static async getMotorcycleById(id: string): Promise<Motorcycle | null> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return this.motorcycles.find(motorcycle => motorcycle.id === id) || null;
  }

  static getCategories(): Category[] {
    // Return categories loaded from data/categories.json typed as Category[]
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

