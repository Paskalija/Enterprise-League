import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./css/popup.css"

function Popup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function SaveValue(userWnatsMoreMoney) {
        localStorage.setItem("MoreMoney", userWnatsMoreMoney);
         setShow(false);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(localStorage.getItem("MoreMoney") == null){
                setShow(true);
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title class="title">Do you need micro business loans?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <p> Quick loans for business, invoice financing and flexible loans </p>
                    <div className='col-md-12 pics'>
                        <img src="https://test.enterpriseleague.com/static/media/violet.9459dd7e.svg"></img>

                        <img src="https://test.enterpriseleague.com/static/media/green.f01efa95.svg"></img>
                    </div>
                </Modal.Body>
                <Modal.Footer className='direction'>
                    <Button className="btn btn-primary purple" onClick={ () => SaveValue(false) }>
                        Not Really
                    </Button>
                    <Button className="btn btn-primary green" onClick={ () => SaveValue(true) }>

                        Yes! Extra Money
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Popup;