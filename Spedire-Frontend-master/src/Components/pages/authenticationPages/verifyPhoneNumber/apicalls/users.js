import { axiosInstance } from ".";
import axios from "axios";
export const VerifyPhone = async (phoneNumber) => {
	try {
		const number = {
			phoneNumber: phoneNumber,
		};
		const response = await axios.post(
			"http://localhost:8080/api/v1/user/verify-number",
			number
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};
export const VerifyOtp = async (otp) => {
	console.log(localStorage.getItem("phoneNumbertoken"));
	try {
		const number = {
			otpNumber: otp,
		};
		const response = await axiosInstance.post(
			"http://localhost:8080/api/v1/user/verify-otp",
			number
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};
export const ResendOtp = async () => {
	try {
		const response = await axiosInstance.get(
			"http://localhost:8080/api/v1/user/resend-otp"
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};
