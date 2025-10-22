import { MotorcycleGallery } from './components/MotorcycleGallery';
import { Bike } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Bike className="w-8 h-8 text-orange-500" />
            <h1 className="text-3xl font-bold">MotoShop</h1>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-4">Find Your Perfect Ride</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Explore our curated collection of premium motorcycles from the world's leading manufacturers
          </p>
        </div>
      </section>

      <MotorcycleGallery />

      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 MotoGallery. Ride with passion, choose with confidence.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
