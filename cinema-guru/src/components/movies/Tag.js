import { useState } from 'react';
import './movies.css';
import PropTypes from 'prop-types';

function Tag({ genre, filter, genres, setGenres }) {
  const [selected, setSelected] = useState(false);

  function handleTag() {
    if (selected) {
      setGenres(genres.filter(g => g !== genre));
    } else {
      setGenres([...genres, genre]);
    }
    setSelected(!selected);
  }

  return (
    <>
      {selected ? 
        <li className='tag-li tag-li-selected' onClick={handleTag}>{genre}</li>
      :
        <li className='tag-li' onClick={handleTag}>{genre}</li>
      }
    </>
  )
}

Tag.propTypes = {
  genre: PropTypes.string.isRequired,
  filter: PropTypes.bool.isRequired,
  genres: PropTypes.array.isRequired,
  setGenres: PropTypes.func.isRequired
}

export default Tag;