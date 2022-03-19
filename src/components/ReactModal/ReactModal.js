
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ReactModal.css'
const ReactModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(props);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.product.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center'>
                        <img className='img-fluid w-50' src={props.product.image} alt="" />
                    </div>
                    <div className='p-2'>
                        <p>{props.product.description}</p>
                    </div>
                    <div>
                        <h3>Price: {props.product.price}</h3>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReactModal;