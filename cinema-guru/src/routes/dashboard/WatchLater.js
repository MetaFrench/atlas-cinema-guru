import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios.get('http://localhost:8000/api/titles/watchlater', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(response => {
      setMovies(response.data);
    }).catch(error => {
      console.error(`Get watchlater movies error: ${error}`);
    })
  }, []);

  return (
    <div className='watchlater-component'>
      <h1>Your watch later list</h1>
      <div className='watchlater-movies-list'>
        {movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default WatchLater;