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
  const [page, setPage] = React.useState('home');
  const [search, setSearch] = React.useState('Title');
  const [searchStr, setSearchStr] = React.useState('tenet');
  const [show, setShow] = React.useState(0);
  const [movies, setMovies] = React.useState([]);
  const [user, setUser] = React.useState('');
  const [genre, setGenre] = React.useState({
    name: 'movie_genre',
    label: 'Genres',
  });

  const onClick = (e, item) => setPage(item.name);

  const handleShow = e => {
    if (e.target.innerHTML === 'Login') {
      setShow(1);
    } else {
      setShow(2);
    }
  };

  const onClickAll = async (e, item) => {
    setPage(item.name);
    console.log(user);
    if (user !== '') {
      const resp = await axios.get(`http://localhost:5000/` + user + `/all`);
      setMovies(resp.data.movies);
      $('.sidebar').height((180 * resp.data.movies.length).toString() + 'px');
    }
  };

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
        setShow={setShow}
        setUser={setUser}
        setGenre={setGenre}
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
          setPage={setPage}
          setMovies={setMovies}
          user={user}
        />
      </Router>
      <div style={{ overflow: 'scroll' }}>
        <Sidebar items={items} setPage={setPage} />
        <Page cur={page} movies={movies} user={user} />
      </div>
    </>
  );
};

export default App;
