import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(query);
  }

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <BiSearch fontSize={20} />
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
