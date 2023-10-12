import {useEffect, useState} from "react";
import {GetCurrentUser} from "../../../apiCalls/usersApis";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SetUser} from "../../../redux/userSlice";


function Dashboard(){
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const{user} = useSelector(state => state.userReducer)


    const userDetails = async () => {
            try {
                const response = await GetCurrentUser();
                if (response.success){
                    dispatch(SetUser(response.data))
                }
            }
            catch (error){
                alert(error.response)
            }

       }

    useEffect(() => {
        if(localStorage.getItem("token")){
            userDetails();
        } else {navigate("/login")}
    }, [])

    return(

        <div className="bg-primary h-screen">
            <h1>Dashboard</h1>
            <h1>{user?.firstName}</h1>
        </div>

    )


}
export default Dashboard;