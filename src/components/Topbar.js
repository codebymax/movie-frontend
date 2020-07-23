import React from 'react';
import { Nav, Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #204051;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #e5e8e8;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #e5e8e8;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .testButton {
    color: black;
    background-color: #204051;
  }
`;

const Topbar = props => {
  function select(key, e) {
    props.setSearch(e.target.innerHTML);
  }

  return (
    <Styles>
      <Navbar expand='lg'>
        <Navbar.Brand href='/'>Movie Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Nav className='ml-auto'>
          <Nav.Item>
            <Dropdown onSelect={select} navbar={true}>
              <Dropdown.Toggle
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#e5e8e8',
                  paddingRight: '20px',
                }}
              >
                {props.search}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as='button'>Title</Dropdown.Item>
                <Dropdown.Item as='button'>Director</Dropdown.Item>
                <Dropdown.Item as='button'>Actor</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>
            <Form className='form-center'>
              <FormControl type='text' placeholder='Search' className='' />
            </Form>
          </Nav.Item>
        </Nav>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Item>
              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default Topbar;
