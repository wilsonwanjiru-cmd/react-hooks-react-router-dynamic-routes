import React from 'react';
import { useParams } from 'react-router-dom';

function MovieShow({ movies }) {
  const params = useParams();
  const selectedMovie = movies[params.movieId];

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h3>{selectedMovie.title}</h3>
      {/* Display other movie details here */}
    </div>
  );
}

export default MovieShow;
