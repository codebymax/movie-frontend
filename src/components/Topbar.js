import React from 'react';
import { Nav, Navbar, Form, Dropdown, Col } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import $ from 'jquery';

const Styles = styled.div`
  .navbar {
    background-color: #596e79;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #e5e8e8;
    &:hover {
      text-decoration: none;
      color: white;
    }
    &:focus {
      text-decoration: none;
      color: #e5e8e8;
    }
    text-decoration: none;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #e5e8e8;
    &:hover {
      color: white;
    }
  }
  .a:visited {
    text-decoration: none;
  }
`;

const LoginInfo = props => {
  if (props.user !== '') {
    return <Nav.Item>Logged in with user id {props.user}</Nav.Item>;
  } else {
    return (
      <>
        <Nav.Item>
          <Nav.Link onClick={props.modalShow}>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={props.modalShow}>Sign up</Nav.Link>
        </Nav.Item>
      </>
    );
  }
};

const search = async (key, str, user, setMovies, setPage) => {
  setPage('movie_all');
  if (user !== '') {
    setMovies([])
    const resp = await axios.get(
      `http://localhost:5000/` + user + `/search/` + key.toLowerCase() + `/?input=` + str
    );
    setMovies(resp.data.movies);
    if ($('.sidebar').height < (250 * resp.data.movies.length + 75)) {
      $('.sidebar').height((250 * resp.data.movies.length + 75).toString() + 'px');
    }
  }
};

const Topbar = props => {
  function select(key, e) {
    props.setSearch(e.target.innerHTML);
  }

  return (
    <Styles>
      <Navbar expand='lg'>
        <Navbar.Brand href='/'>Movie Manager</Navbar.Brand>
        <Nav className='col-8' onSelect={(selectedKey) => search(selectedKey, props.searchStr, props.user, props.setMovies, props.setPage)}>
          <Nav.Item className='col-10'>
            <Form>
              <Form.Row>
                <Col style={{ marginRight: '30px' }}>
                  <Dropdown onSelect={select}>
                    <Dropdown.Toggle
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#e5e8e8',
                      }}
                    >
                      {props.search}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ color: 'black' }}>
                      <Dropdown.Item as='span'>Title</Dropdown.Item>
                      <Dropdown.Item as='span'>Director</Dropdown.Item>
                      <Dropdown.Item as='span'>Actor</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col md={9}>
                  <Form.Control type='text' placeholder='Search' className='' onChange={(e) => props.setSearchStr(e.target.value)} />
                </Col>
                <Col>
                  <Nav.Link eventKey={props.search}>Search</Nav.Link>
                </Col>
              </Form.Row>
            </Form>
          </Nav.Item>
        </Nav>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LoginInfo user={props.user} modalShow={props.modalShow} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default Topbar;
