import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
const Problem2 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div style={{display:"flex",margin:"auto",justifyContent:"center",alignItems:"center"}} className="container">
           <div style={{marginRight:"10px"}}>
           <Button style={{fontSize:"20px",color:"#46139f"}} variant="light" onClick={handleShow}>
        All Contacts
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>All Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body > 
       <Link to="/countryA"> <Button style={{marginTop:"10px",color:"#46139f"}} variant="light">Modal A</Button></Link>
        <Link to="/countryB"> <Button style={{marginTop:"10px",color:"#ff7f50"}} variant="light">Modal B</Button></Link>
        <Button style={{marginTop:"10px" ,background:"white",border:"2px solid #46139f ",color:"black"}} variant="primary">Modal C</Button>
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
      
           </div>
           <div>
           <Button style={{fontSize:"20px",color:"#ff7f50"}}  variant="light" onClick={handleShow}>
       US Contacts
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> US Contacts</Modal.Title>
        </Modal.Header>
        <Link to="/countryA"> <Button style={{marginTop:"10px",color:"#46139f"}} variant="light">Modal A</Button></Link>
        <Link to="/countryB"> <Button style={{marginTop:"10px",color:"#ff7f50"}} variant="light">Modal B</Button></Link>
        <Button style={{marginTop:"10px" ,background:"white",border:"2px solid #46139f ",color:"black"}} variant="light">Modal C</Button>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
           </div>
        </div>
    );
};

export default Problem2;