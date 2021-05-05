import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import MovieCardSmall from './MovieCardSmall';
import LoadingView from './LoadingView';
import Pagination from './Pagination';

const MovieView = props => {
  if (props.movies.length === 0) {
    return <LoadingView />;
  } else {
    if (props.cur !== 'random') {
      return (
        <>
          <div style={{ display: 'flex',  }}>
            <div
              className='mb-10'
              style={{
                display: 'block',
                padding: '15px',
              }}
            >
              <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                {props.movies.map(movie => (
                  <div 
                    style={{
                      display: 'flex',
                      paddingBottom: '20px'
                    }}
                  >
                    <MovieCardSmall key={movie.id} movie={movie} style={{flex: 1}}/>
                  </div>
                ))}
              </CardDeck>
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
              <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                {props.movies.map(movie => (
                  <div 
                    style={{
                      display: 'flex',
                      paddingBottom: '20px'
                    }}
                  >
                    <MovieCardSmall key={movie.id} movie={movie} />
                  </div>
                ))}
              </CardDeck>
            </div>
          </div>
        </>
      );
    }
  }
};

export default MovieView;
