import React from 'react'
import { Nav, Navbar, Form, Dropdown, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'

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
`

const Topbar = (props) => {
  function select(key, e) {
    props.setSearch(e.target.innerHTML)
  }

  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Movie Manager</Navbar.Brand>
        <Nav className="col-8">
          <Nav.Item className="col-10">
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
                      <Dropdown.Item as="span">Title</Dropdown.Item>
                      <Dropdown.Item as="span">Director</Dropdown.Item>
                      <Dropdown.Item as="span">Actor</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col md={9}>
                  <Form.Control type="text" placeholder="Search" className="" />
                </Col>
                <Col>
                  <Button variant="outline-info" type="submit">
                    Search
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Nav.Item>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">Sign up</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )
}

export default Topbar
