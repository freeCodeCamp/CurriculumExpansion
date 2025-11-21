# User Stories
In this lab, you will build a MotoShop - electronic motorcycle market.

1. Start by defining the `Category` type. It should recieve only `Sport`, `Crusier` , `Touring`, `Dirt`, `Adventure`, `Naked`, `Electric` values (use type narrowing). 
2. Create `Motorcycle` interface.
At this interface, several additional properties need to be defined: `id`, `name`, `manufactorer`, `category`, `price`, `image_url`, `description`, `year`, `engine_cc`, `created_at`. 
2.1 All the properties except `category`, should be of type `string`.
2.2 `category` property of `Motorcycle` interface, should be of a `Category` type.
3. You should create and export a `MotorcycleGalleryApp` class, it should have `allMotorcycles`, `nameFilter` and `filteredMotorcycles` private members.
3.1 `nameFilter` member should be of the `string` type
3.2 `filteredMotorcycles` and `allMotorcycles` members should be an array of `Motorcycle` type.
4. You should create and export a `MotorcycleService` class.
4.1 This class should have a `motorcycles` and `getMotorcycles` fields.
4.2 The private static `motorcycles` member should be array of `Motorcycle` type.
4.3 The static async `getMotorcycles` member should be a function which return type is a promise of `Motorcycle` array type.