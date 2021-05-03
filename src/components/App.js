import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Page from './Page';
import AccountModal from './AccountModal';
import axios from 'axios';
import $ from 'jquery';

const App = () => {
  // state to set the name of the current screen
  const [screen, setScreen] = React.useState('home');
  // state to set the current page for movie list pagination
  const [page, setPage] = React.useState(1);
  // state to denote what is being searched for (title, director, actor)
  const [search, setSearch] = React.useState('Title');
  // denotes the current search string
  const [searchStr, setSearchStr] = React.useState('');
  // state used for showing the login modal window
  const [show, setShow] = React.useState(0);
  // state containing list of movies
  const [movies, setMovies] = React.useState([]);
  // state to denote the current user id
  const [user, setUser] = React.useState('');
  // state contains the list of genres for a certain users films
  const [genre, setGenre] = React.useState({
    name: 'movie_genre',
    label: 'Genres',
  });

  const onClick = (e, item) => setScreen(item.name);

  const handleShow = e => {
    if (e.target.innerHTML === 'Login') {
      setShow(1);
    } else {
      setShow(2);
    }
  };

  const onClickAll = async (e, item) => {
    setScreen(item.name);
    console.log(user);
    setMovies([]);
    if (user !== '') {
      const resp = await axios.get(`http://localhost:5000/` + user + `/all?page=` + page);
      setMovies(resp.data.movies);
      $('.sidebar').height((250 * resp.data.movies.length).toString() + 'px');
    }
  };

  const onClickRandom = async (e, item) => {
    setScreen('random');
    setMovies([]);
    if (user !== '') {
      const resp = await axios.get(`http://localhost:5000/` + user + `/random`);
      setMovies(resp.data.movies);
      $('.sidebar').height((250 * resp.data.movies.length).toString() + 'px');
    }
  }

  const onUpdatePage = async (cur) => {
    console.log(user);
    setMovies([]);
    if (user !== '') {
      var resp = {}
      if (cur === 'movie_all') {
        resp = await axios.get(`http://localhost:5000/` + user + `/all?page=` + page);
      } else {
        resp = await axios.get(`http://localhost:5000/` + user + `/genre?genre=` + cur + `&page=` + page);
      }
      setMovies(resp.data.movies);
      $('.sidebar').height((250 * resp.data.movies.length).toString() + 'px');
    }
  }

  const items = [
    { name: 'home', label: 'Home', Icon: HomeIcon, onClick },
    'divider',
    {
      name: 'movies',
      label: 'Movies',
      Icon: MovieIcon,
      items: [
        { name: 'movie_all', label: 'All', onClick: onClickAll },
        genre,
        { name: 'random_movies', label: 'Random', onClick: onClickRandom },
        { name: 'movie_director', label: 'Directors', onClick },
      ],
    },
    'divider',
    {
      name: 'user',
      label: 'Users',
      Icon: PeopleAltRoundedIcon,
      items: [
        { name: 'user_all', label: 'All', onClick },
        { name: 'user_friend', label: 'Friends', onClick },
      ],
    },
    'divider',
    {
      name: 'settings',
      label: 'Settings',
      Icon: SettingsIcon,
      items: [{ name: 'profile', label: 'Profile' }],
    },
  ];

  return (
    <>
      <AccountModal
        show={show}
        page={page}
        setShow={setShow}
        setUser={setUser}
        setGenre={setGenre}
        setScreen={setScreen}
        setPage={setPage}
        setMovies={setMovies}
      />
      <Router>
        <Topbar
          search={search}
          setSearch={setSearch}
          searchStr={searchStr}
          setSearchStr={setSearchStr}
          modalShow={handleShow}
          setScreen={setScreen}
          setMovies={setMovies}
          user={user}
        />
      </Router>
      <div style={{ overflow: 'scroll' }}>
        <Sidebar items={items} setScreen={setScreen} />
        <Page cur={screen} movies={movies} user={user} page={page} setPage={setPage} update={onUpdatePage} />
      </div>
    </>
  );
};

export default App;
