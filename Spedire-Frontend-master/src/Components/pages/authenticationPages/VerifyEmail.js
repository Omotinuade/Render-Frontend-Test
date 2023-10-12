import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.svg";
import verify from "../../assets/verify.svg";

function VerifyEmail() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleVerifyEmail = () => {
    setShowModal(true);
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#FFFFF2" }}>
      <Navbar
        bg="light"
        expand="lg"
        style={{ justifyContent: "space-between" }}
      >
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Spedire Logo"
          />{" "}
          Spedire
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="justify-content-end"
            activeKey="/home"
            style={{ marginLeft: "90%" }}
          >
            <Button
              variant="primary"
              style={{
                background: "none",
                border: "1px solid #00241b",
                height: "8vh",
              }}
            >
              <Nav.Link href="http://localhost:3001">Dashboard</Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div
        style={{
          marginLeft: "45%",
          marginTop: "10vh",
          position: "relative",
        }}
      >
        <h3 style={{ marginLeft: "-8%" }}>Email Confirmed</h3>
        <img
          src={verify}
          alt="Verify"
          style={{
            marginLeft: "-40%",
            width: "50vw",
            height: "50vh",
            cursor: "pointer",
          }}
          onClick={handleVerifyEmail}
        />
        <Button
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "8vw",
            height: "8vh",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleVerifyEmail}
        />
        <div style={{ marginLeft: "-3%", marginTop: "-7%", width: "10vw", height: "5vh" }}>
          <Button>Click around</Button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Email Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Congratulations! We have some interesting read for you. <br></br>
            You have successfully unlocked the mystical powers of our p2p
            courier platform with the sacred act of email confirmation. We
            applaud your determination, wit, and impeccable taste in delivery
            services. It's like you've discovered the hidden key to a secret
            chamber of express awesomeness! <br></br> <br></br>Now, prepare to
            unleash the fury of your delivery desires upon the world. Whether
            you're sending a package of unicorn glitter to Aunt Mildred or
            delivering a secret message to a spy in disguise, our platform is
            here to make your courier dreams a reality.
            <br></br> <br></br>
            So fasten your seatbelt, put on your adventure hat, and get ready
            for a wild ride through the realms of peer-to-peer delivery. We
            promise it'll be more thrilling than a rollercoaster made of bubble
            wrap!
            <br></br> <br></br>
            Once again, congratulations on confirming your email. May your
            packages arrive swiftly, your couriers be as punctual as a Swiss
            watch, and your delivery adventures be filled with joy and mirth.
            <br></br> <br></br>
            Happy delivering, and welcome to our p2p courier family!
            <br></br>
            Yours in wittiness and courier excellence,
            <br></br>
            Spedire Tech.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default VerifyEmail;
