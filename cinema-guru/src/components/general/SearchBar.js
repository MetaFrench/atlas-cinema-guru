import './general.css';
import PropTypes from 'prop-types';

function SearchBar({ title, setTitle, icon }) {
  function handleInput(event) {
    setTitle(event.target.value);
  }

  return (
    <>
      {icon && icon}
      <input type="text" value={title} onChange={handleInput} className="searchBar"></input>
    </>
  )
}

SearchBar.prototype = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  icon: PropTypes.element
}

export default SearchBar;