import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const Signup = ()=>{
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [address,setAddress] = useState('');
    const nav = useNavigate();

    const handleSubmit = ()=>{
        const data = {Name: name, Password: password, Email: email, MobileNo: mobile, Address: address};
        axios.post('http://localhost:3050/signup',data)
            .then((res)=>{
                if(res.data.code==400){
                    Swal.fire("Please fill the fields perfectly");
                }else if(res.data.code==200){
                    sessionStorage.setItem('userId',res.data.data._id);
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
                        title: "Signed up successfully"
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
                <div className="container" style={{marginTop:"7vh",width:"60vh"}}>
                    <div className="heading">Sign up</div>
                    <div className="form">
                        <input required="" className="input" type="text" placeholder="User name" onChange={(e)=>{
                            setName(e.target.value);
                        }}/>
                        <input required="" className="input" type="email" placeholder="Email" onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>
                        <input required="" className="input" type="password" placeholder="Password" onChange={(e)=>{
                            setPassword(e.target.value);
                        }}/>
                        <input required="" className="input" type="text" placeholder="Mobile Number" onChange={(e)=>{
                            setMobile(e.target.value);
                        }}/>
                        <input required="" className="input" type="text" placeholder="Address" onChange={(e)=>{
                            setAddress(e.target.value);
                        }}/>
                        <span class="forgot-password"><Link to='/login' className="textAccount">Already have an account ?</Link></span>
                        <input className="login-button" type="submit" value="Sign up" onClick={handleSubmit}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup;