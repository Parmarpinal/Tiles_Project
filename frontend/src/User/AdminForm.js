import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const AdminForm = ()=>{
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const nav = useNavigate();

    const handleSubmit = ()=>{

        if(name=='shyamCeramic' && password=='shyamCeramic@123'){
            sessionStorage.setItem('isAdmin',true);

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
                title: "Admin is Logged in successfully"
                });
                nav('/home');
        }else{
            Swal.fire("Username and password is wrong !!!");
        }
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
                        <input className="login-button" type="submit" value="Log In" onClick={handleSubmit} style={{marginTop:"6vh"}}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AdminForm;