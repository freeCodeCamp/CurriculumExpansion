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
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();
        setResults(data.map(item => item.show.name));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div id="search-container">
      <input
        id="search-input"
        type="text"
        placeholder="Search for TV shows..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
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