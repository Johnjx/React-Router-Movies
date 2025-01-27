import React from 'react';

import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} id={movie.id}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { id, movie } = props;

  //const { url } = useRouteMatch();

  return (
    <Link to={`/movies/${id}`} >
    <MovieCard movie={movie} />
    </Link>
  );
}

