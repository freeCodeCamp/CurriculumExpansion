const { useState, useMemo, useCallback } = React; // See if we can convert to import statements on Learn

const items = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Mango",
  "Pineapple",
  "Strawberry",
];

// Global variable to track `selectItem` across renders
let prevSelectItem = null;

export const SearchApp = () => {
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  console.log("Rendering App...");

  // // Unoptimized filtering (runs on every render)
  // console.log("Filtering items...");
  // const filteredItems = items.filter((item) => {
  //   return item.toLowerCase().includes(query.toLowerCase());
  // });

  // Optimized filtering (only runs when `query` changes)
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [query]);

  // // Unoptimized event handler (new function created and used on every render)
  // const selectItem = (item) => {
  //   console.log(`Selecting: ${item}`);
  //   setSelectedItem(item);
  // };

  // Optimized event handler function (according to the React docs, React will always create)
  // a new function, but `useCallback` will try to use a cached function reference whenever
  // possible
  const selectItem = useCallback(
    (item) => {
      console.log(`Selecting: ${item}`);
      setSelectedItem(item);
    },
    [selectedItem]
  );

  // Logging to show when a new `selectItem` function
  // is used
  if (prevSelectItem !== selectItem) {
    console.log("New selectItem function");
    prevSelectItem = selectItem; // Update for next render
  } else {
    console.log("Current selectItem function");
  }

  return (
    <div className="container">
      <h1>Search App</h1>
      <form>
        <label htmlFor="search">Search for an item:</label>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-describedby="search-description"
        />
        <p id="search-description">Type to filter the list below.</p>
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>
              {item} -{" "}
              <button
                type="button"
                onClick={() => selectItem(item)}
                aria-label={`Select ${item}`}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
        <p className="selected-item">
          {selectedItem ? `Selected: ${selectedItem}` : "No item selected"}
        </p>
      </form>
    </div>
  );
};
