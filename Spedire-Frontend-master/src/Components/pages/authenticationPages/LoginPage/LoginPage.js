import React, {useState} from 'react';
import {LoginUser} from "../../../../apiCalls/usersApis";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";


function Login(){

    const [user, setUser] = useState({
        phoneNumber: "",
        password: ""
    });
    const login = async () => {
        try {
            const response = await LoginUser(user);
            if(response.status === 200){
                toast.success("Login Successful!")
                localStorage.setItem("token", response.data.access_token)
                window.location.href = "/dashboard";
        }
            else {toast.error("Wrong Login Details, Please check again.")}

        }
        catch (error){
            alert("wrong detials")}
    }
    return(
        <div className= "bg-primary h-full">
            <div>
                <h1 className="p-4 text-3xl text-login font-sans bg-gradient-to-t">SPEDIRE</h1>
            </div>
        <div className= " h-screen flex items-center justify-center">
            <div className= "bg-white shadow-md p-5 flex flex-col gap-8 h-96 w-96 rounded-2xl" >
                <h1 className="text-3xl uppercase m-auto text-login font-sans  ">Login</h1>
                <hr />
                <input
                    type="text"
                    className="rounded-xl"
                    value={user.phoneNumber}
                    onChange={(e) => setUser({...user, phoneNumber: e.target.value})}
                    placeholder="Enter your PhoneNumber"
                />
                <input
                    type="password"
                    className="rounded-xl"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    placeholder="Enter your Password"
                />
                <button
                    onClick={login}
                    className="contained-btn">Login</button>
                <Link to="/register" className="underline">
                    Don't have an account? Register
                </Link>
        </div>
        </div>
        </div>)
}
export default Login