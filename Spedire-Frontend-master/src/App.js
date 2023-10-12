
import './App.css';
import Login from "./Components/pages/authenticationPages/LoginPage/LoginPage";
import Dashboard from "./Components/pages/authorizedPages/Dashboard";
import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/pages/authenticationPages/RegisterationPage";
import VerifyEmail from "./Components/pages/authenticationPages/VerifyEmail";
import VerifyPhoneNumber from "./Components/pages/authenticationPages/verifyPhoneNumber/pages/VerifyPhoneNumber";
import VerifyOtpNumber from "./Components/pages/authenticationPages/verifyPhoneNumber/pages/VerifyOtp";

function App() {
	return (
		<div>
			<Toaster position="top-center" reverseOrder={false} />
			<BrowserRouter>
				<Routes>
					<Route path="/signUp" element={<SignUp />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/verified" element={<VerifyEmail />}></Route>
					<Route path="/verifynumber" element={<VerifyPhoneNumber />}></Route>
					<Route path="/verifyotp" element={<VerifyOtpNumber />}></Route>
					<Route path="/dashboard" element={<Dashboard />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
