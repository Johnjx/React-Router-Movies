import React from 'react';

export default function MovieCard (props) {

  const { movie, id } = props;

  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      {id && <h3>Actors</h3>}
      {id && movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>  
      ))}
     </div> 
  )
}