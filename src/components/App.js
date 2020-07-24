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
  const [show, setShow] = React.useState(false);
  const [movies, setMovies] = React.useState([]);

  const handleShow = () => setShow(true);
  let onClick = (e, item) => setPage(item.name);
  let onClickAll = async (e, item) => {
    setPage(item.name);
    const resp = await axios.get(`http://localhost:5000/1/all`);
    setMovies(resp.data.movies);
    $('.sidebar').height((250 * resp.data.movies.length).toString() + 'px');
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
        { name: 'movie_genre', label: 'Genres', onClick },
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
      <AccountModal show={show} setShow={setShow} />
      <Router>
        <Topbar search={search} setSearch={setSearch} modalShow={handleShow} />
      </Router>
      <div style={{ overflow: 'scroll' }}>
        <Sidebar items={items} setPage={setPage} />
        <Page cur={page} movies={movies} />
      </div>
    </>
  );
};

export default App;
