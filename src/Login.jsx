// import { useRef } from "react"
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login } from "./Store";


// function Login()
// {
//     let username = useRef(null);
//     let password = useRef(null);

//     let dispath = useDispatch();
//     let Navigate = useNavigate(); 

   
    
//     let loginCheck=()=>{
//         if(username.current.value==="Arvind" && password.current.value==="Arvind@123")
//         {
//             dispath(login(username.current.value))
//             Navigate("/home");
//         }
//         else
//         {
//             alert("Your crendential are wrong please check");
//         }
//     }


//     return(
//         <>
//         <h1>Login Page</h1>
//         <label>Username:</label>
//         <input type="text" ref={username}/><br/><br/>
//         <label>Password:</label>
//         <input type="password" ref={password}/><br/><br/>
//         <button onClick={() => loginCheck()}>login</button>
//         </>
//     )
// }
// export default Login;


import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";
import { FaUser, FaLock } from "react-icons/fa"; // Importing icons
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function Login() {
    let username = useRef(null);
    let password = useRef(null);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let loginCheck = () => {
        if (username.current.value === "Arvind" && password.current.value === "Arvind@123") {
            dispatch(login(username.current.value));
            navigate("/home");
        } else {
            alert("Your credentials are incorrect. Please check.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center m-5">
            <div className="card p-4 shadow" style={{ width: "350px" }}>
                <h2 className="text-center text-primary">Login</h2>

                <div className="mb-3">
                    <label className="form-label"><FaUser className="me-2" /> Username</label>
                    <input type="text" ref={username} className="form-control" placeholder="Enter Username" />
                </div>

                <div className="mb-3">
                    <label className="form-label"><FaLock className="me-2" /> Password</label>
                    <input type="password" ref={password} className="form-control" placeholder="Enter Password" />
                </div>

                <button onClick={loginCheck} className="btn btn-primary w-100">Login</button>
            </div>
        </div>
    );
}

export default Login;

