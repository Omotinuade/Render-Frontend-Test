import React from "react";
//import "../../../App.css";
import { toast } from "react-hot-toast";
import "../styles/verifyPhoneNumber.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../../../assets/verifyPhoneNumber/map-icon.svg";
import { ResendOtp, VerifyOtp } from "../apicalls/users";

const VerifyOtpNumber = () => {
	const navigate = useNavigate();
	const [otp, setOtp] = useState("");
	const [error, setError] = useState("");

	const checkOtp = (otp) => {
		const otpRegex = /(\d{6})/;
		return otpRegex.test(otp);
	};
	const handleSubmit = async (e) => {
		setError("");
		e.preventDefault();

		if (!checkOtp(otp)) {
			setError("*Invalid OTP number");
		}
		try {
			const response = await VerifyOtp(otp);
			if (response.success) {
				setOtp("");
				toast.success(response.message);
				navigate("/signUp");
			} else {
				toast.error(response.message);
				navigate("/verifyotp");
			}
		} catch (err) {
			toast.error(err.message);
			navigate("/verifynumber");
		}
	};
	const handleResend = async () => {
		try {
			const response = await ResendOtp();
			if (response.success) {
				setOtp("");
				toast.success(response.message);
				navigate("/verifyotp");
			} else {
				toast.error(response.message);
				navigate("/verifyotp");
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
								<h2 className="forgotPasswordText">VERIFY CODE</h2>
							</div>
							<hr className="liner" />

							<br />
						</center>
						{error ? <p className="error">{error}</p> : ""}

						<input
							type="text"
							className="input"
							name="otp"
							placeholder="Enter OTP number"
							value={otp}
							onChange={(e) => {
								setOtp(e.target.value);
							}}
							required
						/>
					</div>
					<br />

					<button type="submit" className="submit">
						VERIFY
					</button>
				</form>
				<br />
				<button type="submit" onClick={handleResend} className="resend">
					RESEND CODE
				</button>
			</div>
		</div>
	);
};

export default VerifyOtpNumber;
