import { Link, useNavigate } from 'react-router-dom';
import tile2 from '../img/room1.jpg';
import tile1 from '../img/room.webp';
import tile3 from '../img/room3.jpg';
import tile4 from '../img/tiles1.jpg';
import livingroom from '../img/living.jpg';
import bathroom from '../img/bathroom.jpg';
import bedroom from '../img/bedroom.jpg';
import kitchen from '../img/kitchen.jpg';
import outdoor from '../img/outdoor.jpg';
import commercial from '../img/commercial.jpg';
import p1 from '../img/person1.avif';
import p2 from '../img/person2.webp';
import p3 from '../img/person3.avif';
import p4 from '../img/person4.avif';
const Home = ()=>{
    const nav = useNavigate();

    return (
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
                        <Link to="/home" className="menu-item active" aria-current="page" href="#">Home</Link>
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

                    <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="modal" data-bs-target="#exampleModal" width="28" height="28" fill="currentColor" className="bi bi-person-square" color="bisque" viewBox="0 0 16 16" style={{marginTop:"8px",marginLeft:"30px",cursor:"pointer"}}>
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Choose field</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style={{textAlign:"center"}}>
                            <div data-bs-dismiss="modal" style={{backgroundColor:"lightblue",color:"black",borderRadius:"10px",width:"15vh",height:"15vh",float:"left",marginLeft:"15vh",cursor:"pointer"}} onClick={()=>{
    
                                nav('/signup');
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" style={{marginTop:"3vh"}} >
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                                <div>User</div>
                            </div>
                            <div data-bs-dismiss="modal" style={{backgroundColor:"lightblue",color:"black",borderRadius:"10px",width:"15vh",height:"15vh",float:"left",marginLeft:"5vh",cursor:"pointer"}} onClick={()=>nav('/adminForm')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16" style={{marginTop:"3vh"}}>
                                <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
                                </svg>
                                <div>Admin</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

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

            <div className='carouselImg'>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                    <img src={tile1} class="d-block w-100 imageCou" alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                    <img src={tile2} class="d-block w-100 imageCou" alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                    <img src={tile3} class="d-block w-100 imageCou" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>

        {/* List of tiles */}
        <table align='center'>
        <div className='tilesList'>
            <tr>
                <td>
                    <Link to='/Livingroom'>
                        <div className='list wow fadeInUp' data-wow-delay="0.1s">
                            <img src={livingroom} />
                            <h5 style={{color:"black"}}>Living room tiles</h5>
                        </div> 
                    </Link>
                </td>
                <td>
                    <Link to='/Bathroom'>
                        <div className='list wow fadeInUp' data-wow-delay="0.3s">
                            <img src={bathroom} />
                            <h5 style={{color:"black"}}>Bathroom tiles</h5>
                        </div>
                    </Link>
                </td>
                <td>
                    <Link to='/Bedroom'>
                        <div className='list wow fadeInUp' data-wow-delay="0.5s"> 
                            <img src={bedroom} />
                            <h5 style={{color:"black"}}>Bedroom tiles</h5>
                        </div>
                    </Link> 
                </td>
                <td>
                <Link to='/Kitchen'>
                    <div className='list wow fadeInUp' data-wow-delay="0.7s">
                        <img src={kitchen} />
                        <h5 style={{color:"black"}}>Kitchen tiles</h5>
                    </div>
                </Link>
                </td>
                <td>
                    <Link to='/Outdoor'>
                        <div className='list wow fadeInUp' data-wow-delay="0.9s">
                            <img src={outdoor} />
                            <h5 style={{color:"black"}}>Outdoor tiles</h5>
                        </div>
                    </Link>
                </td>
                <td>
                    <Link to='/Commercial'>
                        <div className='list wow fadeInUp' data-wow-delay="1.1s">
                            <img src={commercial} />
                            <h5 style={{color:"black"}}>Commercial tiles</h5>
                        </div>
                    </Link>
                </td>
            </tr>
        </div>
        </table>
        
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
                                <img class="img-fluid rounded w-75 h-100 wow zoomIn" style={{height:"180px"}} data-wow-delay="0.5s" src={tile3} />
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

         {/* Service Start */}
         <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fas fa-3x fa-layer-group text-warning mb-4"></i>
                                <div className='heading'>DESIGN QUALITY</div>
                                <p>We aim to provide only the best to our customers through an innovative approach to ceramics.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-headset text-warning mb-4"></i>
                                <div className='heading'>PROFESSIONAL SUPPORT</div>
                                <p>Our support is not just restricted till the time of purchases but it also extends after the sale.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-cart-plus text-warning mb-4"></i>
                                <div className='heading'>ONLINE ORDER</div>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-headset text-warning mb-4"></i>
                                <div className='heading'>MADE WITH LOVE</div>
                                <p>We pour our passion and love for design into our products by bringing new styles to the ceramic market.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Team Start  */}
        <div class="container-xxl pt-5 pb-3">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="section-title ff-secondary text-center text-warning fw-normal mb-5">Our Team Members</h5>
                </div>
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item text-center rounded overflow-hidden">
                            <div class="rounded-circle overflow-hidden m-4">
                                <img class="img-fluid" src={p2} alt=""/>
                            </div>
                            <h5 class="mb-0">Mukesh Waghela</h5>
                            <small>Owner</small>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item text-center rounded overflow-hidden">
                            <div class="rounded-circle overflow-hidden m-4">
                                <img class="img-fluid" src={p1} alt=""/>
                            </div>
                            <h5 class="mb-0">Nency Waghela</h5>
                            <small>Manager</small>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item text-center rounded overflow-hidden">
                            <div class="rounded-circle overflow-hidden m-4">
                                <img class="img-fluid" src={p3} alt=""/>
                            </div>
                            <h5 class="mb-0">Priya Parmar</h5>
                            <small>Employee</small>
                            <div class="d-flex justify-content-center mt-5">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="team-item text-center rounded overflow-hidden">
                            <div class="rounded-circle overflow-hidden m-4">
                                <img class="img-fluid" src={p4} alt=""/>
                            </div>
                            <h5 class="mb-0">Vishva Tank</h5>
                            <small>Employee</small>
                            <div class="d-flex justify-content-center mt-5">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        </>
    );
}
export default Home;