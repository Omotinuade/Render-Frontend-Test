import {axiosInstance} from "./index";
import axios from "axios";


export const LoginUser = async (user) => {
    try {
        const response = await axiosInstance.post("http://localhost:8080/login", user)
        return response
    }
    catch (error){
        return error.response
    }


}

export const GetCurrentUser = async () => {
    try {
        const response = await axiosInstance.get("http://localhost:8080/api/v1/user/getCurrentUser")
        console.log(response.data)
        return response.data
    }
    catch (error){
        console.log(error)
        return error.response.data
    }




}