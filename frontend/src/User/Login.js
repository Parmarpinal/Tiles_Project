import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const Login = ()=>{
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const nav = useNavigate();

    const handleSubmit = ()=>{
        const data = {Name: name,Password: password};
        axios.post('http://localhost:3050/login',data)
            .then((res)=>{
                if(res.data.code==400){
                    Swal.fire("Please fill the fields perfectly");
                }else if(res.data.code==404){
                    Swal.fire("Name not found !!!");
                }else if(res.data.code==403){
                    Swal.fire({
                        icon: "error",
                        title: "Oops...", 
                        text: "Password is wrong!"
                    });
                }else if(res.data.code==200){
                    if(res.data.token){
                        // sessionStorage.setItem('token',res.data.token);
                        // sessionStorage.setItem('userId',res.data.userId);
                    }
                    sessionStorage.setItem('userId',res.data.userId);
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Logged in successfully"
                    });
                    nav('/home');
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        
    }
    return (
        <>
            <div className="login-form">
                <div className="container" style={{marginTop:"20vh",width:"50vh"}}>
                    <div className="heading">Log In</div>
                    <div className="form">
                        <input required="" className="input" type="text" placeholder="User name" onChange={(e)=>{
                            setName(e.target.value);
                        }}/>
                        <input required="" className="input" type="password" placeholder="Password" onChange={(e)=>{
                            setPassword(e.target.value);
                        }}/>
                        <span class="forgot-password"><Link to='/signup' className="textAccount">Sign Up</Link></span>
                        <input className="login-button" type="submit" value="Log In" onClick={handleSubmit}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;