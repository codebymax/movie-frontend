import React from 'react';
import MovieCard from './MovieCard';
import { Row } from 'react-bootstrap';

const MovieView = props => (
  <>
    <div className='movieList' style={{ display: 'flex' }}>
      <div
        className='mb-10'
        style={{
          display: 'block',
          padding: '15px',
        }}
      >
        {props.movies.map(movie => (
          <>
            <MovieCard key={movie.id} movie={movie} />
            <p></p>
          </>
        ))}
      </div>
    </div>
  </>
);

export default MovieView;
