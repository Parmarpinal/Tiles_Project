import { Link, useNavigate } from "react-router-dom";
import tile2 from '../img/room1.jpg';
import tile1 from '../img/room.webp';
import tile3 from '../img/room3.jpg';
import tile4 from '../img/tiles1.jpg';

const About = ()=>{
    const nav = useNavigate();
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
                        <Link to="/about" className="menu-item active" href="#">About</Link>
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

             {/* About Start  */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="row g-3">
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-100 h-100 wow zoomIn" data-wow-delay="0.1s" src={tile1} />
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-75 h-75 wow zoomIn" data-wow-delay="0.3s" src={tile2} style={{marginTop: "25%"}} />
                            </div>
                            <div class="col-6 text-end" style={{height:"180px"}}>
                                <img class="img-fluid rounded w-75 wow zoomIn" style={{height:"180px"}} data-wow-delay="0.5s" src={tile3} />
                            </div>
                            <div class="col-6 text-end" style={{height:"250px"}}>
                                <img class="img-fluid rounded w-100 wow zoomIn mt-3" style={{height:"250px"}} data-wow-delay="0.7s" src={tile4} />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h5 class="section-title ff-secondary text-start text-warning fw-normal">About Us</h5>
                        <h1 class="mb-4" style={{fontFamily: "Nunito",fontWeight:"900"}}>Welcome to Shyam Ceramic</h1>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div class="row g-4 mb-4">
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center border-warning border-start border-5 px-3">
                                    <h1 class="flex-shrink-0 display-5 text-warning mb-0" data-toggle="counter-up">15</h1>
                                    <div class="ps-4">
                                        <p class="mb-0">Years of</p>
                                        <h6 class="text-uppercase mb-0">Experience</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
export default About;