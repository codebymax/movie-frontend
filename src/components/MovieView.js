import React from 'react';
import MovieCard from './MovieCard';
import LoadingView from './LoadingView';
import Pagination from './Pagination';

const MovieView = props => {
  if (props.movies.length === 0) {
    return <LoadingView />;
  } else {
    if (props.cur !== 'random') {
      return (
        <>
          <div style={{ display: 'flex' }}>
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
              <Pagination screen={props.cur} page={props.page} setPage={props.setPage} update={props.update} />
            </div>
          </div>
        </>
      );
    }
    else {
      return (
        <>
          <div style={{ display: 'flex' }}>
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
    }
  }
};

export default MovieView;
