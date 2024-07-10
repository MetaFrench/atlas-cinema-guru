import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios.get('http://localhost:8000/api/titles/favorite', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(response => {
      setMovies(response.data);
    }).catch(error => {
      console.error(`Get favorite movies error: ${error}`);
    })
  }, []);

  return (
    <div className='favorites-component'>
      <h1>Movies you like</h1>
      <div className='fav-movies-list'>
        {movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default Favorites;
