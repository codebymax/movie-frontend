import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import SettingsIcon from '@material-ui/icons/Settings';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

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
      <Sidebar items={items} />
    </>
  );
};

export default App;
