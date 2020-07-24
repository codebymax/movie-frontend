import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AccountModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row style={{ paddingBottom: '15px' }}>
              <Form.Control id='username' type='text' placeholder='Username' />
            </Form.Row>
            <Form.Row>
              <Form.Control
                id='password'
                type='password'
                placeholder='Password'
              />
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AccountModal;
