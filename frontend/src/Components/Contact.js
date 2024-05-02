import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const Contact = ()=>{
    const [data,setData] = useState('');
    const nav= useNavigate();

    const handleSubmit = async () => {
        axios.post('http://localhost:3050/customer/msg',data)
            .then((res)=>{
                if(res.data.code==200){
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
                        title: "Message sent successfully"
                      });
                      nav('/home');
                }else{
                    Swal.fire("Message not sent successfully");
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        nav('/home');
    };
    
    return(
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"rgb(45,52,52)",height:"10vh"}}>
            <div className="container-fluid">
                <h2 className="title mt-2">Shree Shyam Ceramic</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/home" className="menu-item" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="menu-item" href="#">About</Link>
                    </li>
                    <li className="nav-item">
                    <a className="menu-item" style={{cursor:"pointer"}} onClick={()=>{
                            if(sessionStorage.getItem('isAdmin')){
                                nav('/usermsg');
                            }else{
                                nav('/contact');
                            }
                        }}>Contact</a>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-cart4" color="bisque" viewBox="0 0 16 16" style={{marginTop:"5px",cursor:"pointer"}} onClick={()=>{

                            if(sessionStorage.getItem('isAdmin')){
                                nav('/allUser');
                            }else{
                                nav('/cart');
                            }
                            
                    }}>
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg>
                </ul>
                <form className="d-flex mt-2" role="search">
                    <div className='customBtn'>
                        <button class="btn mt-1 me-4" type="button" onClick={()=>{
                            nav('/filteredData');
                        }}>
                            <strong>Search</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </button>
                    </div>
                </form>
                </div>
            </div>
            </nav>

            {/* <!-- Contact Start --> */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="section-title ff-secondary text-center text-warning fw-normal">Contact Us</h5>
                    <h1 class="mb-5" style={{fontFamily: "Nunito",fontWeight:"900"}}>Contact For Any Query</h1>
                </div>
                <div class="row g-4">
                    <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.043799562348!2d72.82232728067324!3d21.23011168665515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04eb8eb905321%3A0x59a5edaad97b598b!2sShree%20Shyam%20Ceramic!5e0!3m2!1sen!2sin!4v1706536796442!5m2!1sen!2sin" width="600" height="370" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="col-md-6">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control --bs-body-color-warning" id="name" placeholder="Your Name" onChange={(e)=>{
                                                setData({...data, Name: e.target.value});
                                            }}/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email" onChange={(e)=>{
                                                setData({...data, Email: e.target.value});
                                            }}/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject" onChange={(e)=>{
                                                setData({...data, Subject: e.target.value});
                                            }}/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" id="message" style={{height:"120px"}} onChange={(e)=>{
                                                setData({...data, Message: e.target.value});
                                            }}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-warning w-100 py-3" type="submit" onClick={handleSubmit}>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}
        </>
    );
}
export default Contact;