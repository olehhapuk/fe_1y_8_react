import { BiSearch } from 'react-icons/bi';

function Searchbar() {
  return (
    <header className="Searchbar">
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <BiSearch fontSize={20} />
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
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
