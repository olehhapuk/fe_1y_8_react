import { useState } from 'react';
import styles from './Searchbar.module.css';

// eslint-disable-next-line react/prop-types
function Searchbar({ onSearch, defaultValue = '' }) {
  const [query, setQuery] = useState(defaultValue);

  function handleSubmit(e) {
    e.preventDefault();

    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="search"
        name="query"
        placeholder="Search shows by title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Searchbar;
