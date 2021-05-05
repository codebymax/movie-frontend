import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import Zoom from '@material-ui/core/Zoom';
import MovieCardBig from './MovieCardBig';

const MovieCardSmall = props => {
  let r = Math.random().toString(36).substring(7);

  const movie = props.movie;
  const [color, setColor] = React.useState('white');
  const hover_color = '#bbbbbb';

  const [focus, setFocus] = React.useState(false);

  const handleChange = () => {
    if (focus) {
      setFocus(false);
      setTimeout(() => { document.getElementById(r).style.display = 'none'; }, 300);
    } else {
      document.getElementById(r).style.display = 'flex';
      setTimeout(() => { setFocus(true); }, 300);
    }
  }
  
  return (
    <>
      <Card
        onClick={handleChange}
        bg={color}
        style={{
          width: '18rem',
          boxShadow: '1px 1px 2px 0px rgba(97,106,107,1)',
          backgroundColor: color
        }}
        onMouseEnter={() => setColor(hover_color)}
        onMouseLeave={() => setColor('white')}
      >
        <Card.Img variant='top' src={movie.posterPath} style={{ maxHeight: '25rem' }}></Card.Img>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <strong>Release: </strong>
            {movie.release_date.split(' ').join('/')}
          </Card.Text>
          <Card.Text>
            <strong>Director: </strong>
            {movie.director.join(', ')}
          </Card.Text>
          <Zoom in={focus}>
            <div id={r} style={{ display: 'none'}}>
              <Card.Text>
                <strong>Cast: </strong>
                {movie.cast.join(', ')}
              </Card.Text>
              <Card.Text>
                <strong>Genres: </strong>
                {movie.genres.join(', ')}
              </Card.Text>
            </div>
          </Zoom>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCardSmall;
