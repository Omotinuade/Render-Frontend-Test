import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.svg";
import { toast } from "react-hot-toast";
import axios from "axios";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  function validateFirstName(value) {
    return value.length >= 2;
  }

  function validateLastName(value) {
    return value.length >= 2;
  }

  function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  function validatePassword(value) {
    const digitRegex = /\d/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    return (
      digitRegex.test(value) &&
      lowercaseRegex.test(value) &&
      uppercaseRegex.test(value) &&
      specialCharRegex.test(value)
    );
  }

  const handleSubmit = async () => {
    if (!firstNameValid || !lastNameValid || !emailValid || !passwordValid) {
      setSubmitted(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("phoneNumbertoken")}`,
        },
      };
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/register",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
        config
      );
      localStorage.removeItem("phoneNumbertoken")
      localStorage.setItem("user");
      navigate("/dashboard");
      console.log(response.data);
      setSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      toast.success(response.message);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.message);
        navigate("/signUp");
      }
    }
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#FFFFF3", overflow: "hidden" }}
    >
      <Navbar
        bg="light"
        expand="lg"
        style={{
          justifyContent: "space-between",
          fontFamily: "Permanent marker, cursive",
        }}
      >
        <Navbar.Brand href="#home">
          <div style={{ color: "#5C7AE8", display: "flex" }}>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Spedire Logo"
            />{" "}
            <h3>Spedire</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="justify-content-end"
            activeKey="/home"
            style={{ marginLeft: "92%" }}
          >
            <Button
              variant="primary"
              style={{
                background: "none",
                border: "1px solid #00241b",
                height: "8vh",
              }}
            >
              <Nav.Link href="#home">Home</Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "30%",
            marginTop: "3%",
            marginBottom: "8%",
            alignItems: "center",
            height: "80vh",
            width: "40%",
            padding: "10 10 10 10",
          }}
        >
          <Form
            style={{
              marginBottom: "1rem",
              width: "50vw",
              backgroundColor: "white",
              boxSizing: "border-box",
            }}
          >
            <h3>Complete your registration</h3>
            <br></br>
            <Form.Group controlId="formFirstName">
              <Form.Control
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setFirstNameValid(validateFirstName(e.target.value));
                }}
                required
                className={firstNameValid ? "" : "is-invalid"}
                style={{ marginBottom: "1rem", height: "8vh" }}
              />
              {!firstNameValid && (
                <div className="invalid-feedback">First name is invalid.</div>
              )}
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Control
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setLastNameValid(validateLastName(e.target.value));
                }}
                required
                className={lastNameValid ? "" : "is-invalid"}
                style={{ marginBottom: "1rem", height: "8vh" }}
              />
              {!lastNameValid && (
                <div className="invalid-feedback">Last name is invalid.</div>
              )}
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailValid(validateEmail(e.target.value));
                }}
                required
                className={emailValid ? "" : "is-invalid"}
                style={{ marginBottom: "1rem", height: "8vh" }}
              />
              {!emailValid && (
                <div className="invalid-feedback">Email is invalid.</div>
              )}
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordValid(validatePassword(e.target.value));
                }}
                required
                className={passwordValid ? "" : "is-invalid"}
                style={{ marginBottom: "1rem", height: "8vh" }}
              />
              {!passwordValid && (
                <div className="invalid-feedback">
                  Password is invalid. Password must contain at least one digit,
                  one lowercase letter, one uppercase letter and one special
                  character
                </div>
              )}
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmit}
              style={{

                marginBottom: "1rem",
                width: "100%",
                height: "8vh",
                color: "white",
                backgroundColor: "#5C7AE8",
                transition: "color 0.50s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#057156";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#5C7AE8";
              }}
            >
              Create Account
            </Button>
            {submitted && (
              <div
                className="alert alert-success"
                role="alert"
                style={{ marginBottom: "1rem" }}
              >
                Account created successfully!
              </div>
            )}
            {!submitted && (
              <div
                className="alert alert-danger"
                role="alert"
                style={{ marginBottom: "1rem" }}
              >
                An error occurred while creating the account.
              </div>
            )}
            <p style={{ width: "250%" }}>
              By continuing, you agree to Spedire's{" "}
              <a href="/t&c" className="login-link">
                Terms Of Service{" "}
              </a>
              and{" "}
              <a href="/policy" className="login-link">
                Privacy Policy
              </a>{" "}
              <br></br>
            </p>
          </Form>
        </div>
        <style>
          {`
            .login-link {
              text-decoration: none;
            }

            .form-control {
              background-color: gray;
              opacity: 50%;
              color: white;
            }

            .is-invalid {
              border-color: red !important;
            }

            .invalid-feedback {
              color: red;
            }

            .alert {
              margin-bottom: 1rem;
            }

            .alert-success {
              color: #155724;
              background-color: #d4edda;
              border-color: #c3e6cb;
            }

            .alert-danger {
              color: #721c24;
              background-color: #f8d7da;
              border-color: #f5c6cb;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default SignUp;
