# User Stories
 
1. Start by defining the `Category` type. It should recieve only `Sport`, `Crusier` , `Touring`, `Dirt`, `Adventure`, `Naked`, `Electric` values (type narrowing). 
2. You should create `Motorcycle` interface.
At this interface, several additional properties need to be defined: `id`, `name`, `manufactorer`, `category`, `price`, `image_url`, `description`, `year`, `engine_cc`, `created_at`. 
2.1 All the properties except `category`, should be of type `string`.
2.2 `category` property of `Motorcycle` interface, should be of a `Category` type.
3. You should create and export a `MotorcycleGalleryApp` class, it should have `allMotorcycles`, `nameFilter` and `filteredMotorcycles` private properties.
3.1 type `nameFilter` property should be of the `string` type, while `filteredMotorcycles` and `allMotorcycles` type should be `Motorcycle` typed array.
4. You should create and export a `MotorcycleService` class.
4.1 This class should have a `motorcycles` and `getMotorcycles` fields.
4.2 The private static `motorcycles` field should be array of `Motorcycle` type.
4.3 The static async `getMotorcycles` field should be of function which return type is a promise of `Motorcycle` array type.