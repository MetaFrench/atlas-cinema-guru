// BASE IMPORTS
import './dashboard.css';
// import PropTypes from 'prop-types';
import axios from 'axios';

// COMPONENT IMPORTS
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import { useEffect, useState, useCallback } from 'react';

// function HomePage ({ movies, minYear = 1970, maxYear = 2022, genres = [], sort = '', title = '', page = 1 }) {
function HomePage () {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  const loadMovies = useCallback(async (page) => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await axios.get('http://localhost:8000/api/titles/advancedsearch', {
        params: {
          minYear,
          maxYear,
          genres,
          title,
          sort,
          page
        },
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      console.log(`Homepage load movies response.data: ${response.data.titles}`);
      setMovies(prevMovies => [...prevMovies, response.data]);
      setMovies(response.data.titles);
    } catch(error) {
      console.error(`Homepage loadMovies error: ${error}`);
    }
  }, [minYear, maxYear, genres, title, sort]);

  useEffect(() => {
    setMovies([]);
    loadMovies(1);
  }, [minYear, maxYear, genres, sort, title, loadMovies]);

  function handleLoadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    loadMovies(nextPage);
  }

  return (
    <div>
      <Filter
        minYear={minYear} setMinYear={setMinYear}
        maxYear={maxYear} setMaxYear={setMaxYear}
        sort={sort} setSort={setSort}
        genres={genres} setGenres={setGenres}
        title={title} setTitle={setTitle}
      />
      <div className='movies-list'>
        {movies.slice(0, 10).map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
      <Button label='load more...' type='button' className='load-more' onClick={() => handleLoadMore}/>
    </div>
  )
}

// HomePage.propTypes = {
//   movies: PropTypes.array.isRequired,
//   minYear: PropTypes.number.isRequired,
//   maxYear: PropTypes.number.isRequired,
//   genres: PropTypes.array.isRequired,
//   sort: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   page: PropTypes.number.isRequired
// }

export default HomePage;
