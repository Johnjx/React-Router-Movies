import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  useParams
} from 'react-router-dom'
import MovieCard from './MovieCard';

export default function Movie(props) {
  const [movie, setMovie] = useState();

  const { id } = useParams(); 
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`) // Study this endpoint with Postman
      .then(response => {
        // Study this response with a breakpoint or log statements
        setMovie(response.data)
        // and set the response data as the 'movie' slice of state
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
        <MovieCard movie = {movie} id={id}/>
      <div className="save-button">Save</div>
    </div>
  );
}

//movie details
// use moviecard
