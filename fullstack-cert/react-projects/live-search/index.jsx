const { useState, useEffect } = React;

function LiveSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        const response = await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`);
        const data = await response.json();
        setResults(data.map(fruit => fruit.name));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div id="search-container">
      <form>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div id="results">
        {results.length > 0 ? (
          results.map((item, index) => (
            <div key={index} className="result-item">{item}</div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}