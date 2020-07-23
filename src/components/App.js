import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Welcome from './Welcome';

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const items = [
  { name: 'home', label: 'Home', Icon: HomeIcon },
  'divider',
  {
    name: 'movies',
    label: 'Movies',
    Icon: MovieIcon,
    items: [
      { name: 'all', label: 'All', onClick },
      { name: 'genre', label: 'Genres', onClick },
      { name: 'director', label: 'Directors', onClick },
    ],
  },
  'divider',
  {
    name: 'user',
    label: 'Users',
    Icon: PeopleAltRoundedIcon,
    items: [
      { name: 'all', label: 'All', onClick },
      { name: 'friend', label: 'Friends', onClick },
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

const App = () => {
  const [search, setSearch] = React.useState('Title');

  return (
    <>
      <Router>
        <Topbar search={search} setSearch={setSearch} />
      </Router>
      <div style={{ display: 'flex' }}>
        <Sidebar items={items} />
        <Welcome />
      </div>
    </>
  );
};

export default App;
