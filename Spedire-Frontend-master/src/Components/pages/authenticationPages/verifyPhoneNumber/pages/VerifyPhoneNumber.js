import React from "react";
//import "../../../App.css";
import { toast } from "react-hot-toast";
import "../styles/verifyPhoneNumber.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import google from "../../../../assets/google.svg";
import facebook from "../../../../assets/facebook.svg";
import Logo from "../../../../assets/verifyPhoneNumber/map-icon.svg";
import { VerifyPhone } from "../apicalls/users";

const VerifyPhoneNumber = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const checkPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex =
      /((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/;
    return phoneNumberRegex.test(phoneNumber);
  };
  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    console.log(checkPhoneNumber(phoneNumber));

    if (!checkPhoneNumber(phoneNumber)) {
      setError("*Invalid phone number");
    }
    try {
      const response = await VerifyPhone(phoneNumber);
      if (response.success) {
        toast.success(response.message);
        setPhoneNumber("");
        localStorage.setItem("phoneNumbertoken", response.data);
        navigate("/verifyotp");
      } else {
        toast.error(response.message);
        navigate("/verifynumber");
      }
    } catch (err) {
      toast.error(err.message);
      navigate("/verifynumber");
    }
  };
  return (
    <div>
      <div>
        <div className="central">
          <div className="topContainer">
            <div>
              <img src={Logo} className="img" alt="Img" />
            </div>
            <div className="spedireContainer">
              {" "}
              <h1 className="spedire">Spedire</h1>{" "}
            </div>
          </div>

          {/* <div className='button'>
            <button type='button' className='backButton'>BACK</button>
        </div> */}
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="email">
            <center>
              <div className="forgotPassword">
                <h2 className="forgotPasswordText">VERIFY PHONE NUMBER</h2>
              </div>
              <hr className="liner" />

              <br />
            </center>
            {error ? <p className="error">{error}</p> : ""}

            <input
              type="text"
              className="input"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              required
            />
          </div>
          <br />

          <button type="submit" className="submit">
            SUBMIT
          </button>
        </form>
        <h6 className="option">
          Already have an account?&rarr;{" "}
          <span className="option-span">Login</span>
        </h6>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              flex: 0.5,
              width: "40%",
              borderBottom: "1px solid #8c8989",
            }}
          ></div>
          <p style={{ margin: "0 1rem" }}>Or Sign Up With</p>
          <div
            style={{
              flex: 0.5,
              width: "40%",
              borderBottom: "1px solid #8c8989",
            }}
          ></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            variant="link"
            style={{
              background: "none",
              padding: 0,
              width: "40%",
              borderRadius: "8px",
              border: "1px solid gray",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "green";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "gray";
            }}
          >
            <img src={google} alt="Google" width="30" height="30" />
          </button>
          <button
            variant="primary"
            style={{
              marginLeft: "1rem",
              backgroundColor: "#5c7ae8",
              width: "40%",
              borderRadius: "8px",
              border: "1px solid gray",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "gray";
            }}
          >
            <img src={facebook} alt="Facebook" width="30" height="30" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhoneNumber;
