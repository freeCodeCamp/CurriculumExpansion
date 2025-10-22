import { Motorcycle } from '../types/motorcycle';

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
}

export function MotorcycleCard({ motorcycle }: MotorcycleCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-gray-900">
        <img
          src={motorcycle.image_url}
          alt={motorcycle.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {motorcycle.year}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{motorcycle.name}</h3>
            <p className="text-gray-600 font-medium">{motorcycle.manufacturer}</p>
          </div>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold uppercase tracking-wide">
            {motorcycle.category}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{motorcycle.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-2xl font-bold text-orange-600">
              ${motorcycle.price.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">{motorcycle.engine_cc}cc</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
