function Searchbar({ query, setQuery }) {
  return (
    <input
      type="search"
      autoComplete="off"
      name="query"
      placeholder="Search contacts by name"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Searchbar;
