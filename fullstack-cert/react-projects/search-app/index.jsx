const { useState, useMemo, useCallback } = React; // See if we can convert to import statements on Learn

const items = [
  "Apples",
  "Bananas",
  "Strawberries",
  "Blueberries",
  "Mangoes",
  "Pineapple",
  "Lettuce",
  "Broccoli",
  "Paper Towels",
  "Dish Soap",
];

// Global variable to track `toggleItem` across renders
let prevToggleItem = null;

export const ShoppingList = () => {
  const [query, setQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  // // Unoptimized filtering (runs on every render)
  // console.log("Filtering items...");
  // const filteredItems = items.filter((item) =>
  //   item.toLowerCase().includes(query.toLowerCase())
  // );

  // Optimized filtering (only runs when `query` changes)
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  // // Unoptimized event handler (new function created and used on every render)
  // const toggleItem = (item) => {
  //   setSelectedItems((prev) =>
  //     prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
  //   );
  // };

  // console.log("New toggleItem function created");

  // Optimized event handler function (according to the React docs, React will always create)
  // a new function, but `useCallback` will try to use a cached function reference whenever
  // possible
  const toggleItem = useCallback(
    (item) => {
      setSelectedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    },
    [setSelectedItems]
  );

  // Logging to show when a new `toggleItem` function
  // is used
  if (prevToggleItem !== toggleItem) {
    console.log("New toggleItem function");
    prevToggleItem = toggleItem; // Update for next render
  } else {
    console.log("Current toggleItem function");
  }

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <form>
        <label htmlFor="search">Search for an item:</label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-describedby="search-description"
        />
        <p id="search-description">Type to filter the list below.</p>
        <ul>
          {filteredItems.map((item) => {
            const isChecked = selectedItems.includes(item);
            return (
              <li
                key={item}
                style={{ textDecoration: isChecked ? "line-through" : "none" }}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleItem(item)}
                  />
                  {item}
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};
