import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const Tiles = ()=>{
    const [tile,setTile] = useState([]);
    const nav=useNavigate();
    const {place} = useParams();
    const [isAdmin, setAdmin] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(()=>{
        fetch(`http://localhost:3050/${place}`)
        .then((temp)=>{
            return temp.json();
        })
        .then((res)=>{
            setTile(res);
            var admincheck = sessionStorage.getItem('isAdmin');
            setAdmin(admincheck);
        })
    },[]);

    const handleCart = (id,price)=>{
        console.log('Qnt = ',quantity);
        setQuantity(1);
        const productId = id;
        const uId = sessionStorage.getItem('userId');
        const total = quantity*price;
        const data = {UserId: uId, ProductId: productId, Quantity: quantity, Price: total};
        console.log(data);

        axios.post('http://localhost:3050/addToCart',data)
        .then((res)=>{
            console.log(res.data);
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
                title: "Added to cart"
                });
                nav('/home');
        })
        .catch((error)=>{
            console.log("Error : ",error);
        })
    }
    
    const formatedTiles = tile.map((t)=>{
        return(
            <>
                <div className="col-3 mb-5">
                    
                        <div className="card" style={{height:"40vh"}}> 
                        <Link to={`/detailTile/${place}/${t._id}`}>
                            <div style={{width:"170px",height:"170px",marginLeft:"auto",marginRight: "auto",display:"block"}}><img src={t.Img} /> </div>
                        </Link>
                            <div className="desc" style={{marginTop:"0px"}}>
                                <div className="tileName">{t.Name}</div>
                                <h6 style={{fontSize:"12px"}}>{t.Type} | {t.Width}mm X {t.Height}mm</h6>
                                <div>
                                    {!isAdmin && 
                                    <>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            &#8377; {t.Price} per sq ft
                                            <div onClick={()=>{
                                                if(sessionStorage.getItem('userId')==null){
                                                    nav('/login');
                                                }else{
                                                    handleCart(t._id,t.Price);
                                                }
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16" style={{color:"beige"}}>
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <span style={{fontSize:"14px"}}>Enter no. of box : </span>
                                            <input type="text" style={{width:"6vh",height:"3vh",backgroundColor:"beige"}} onChange={(e)=>{
                                                setQuantity(e.target.value);
                                                if(quantity<=0){
                                                    setQuantity(1);
                                                }
                                            }}/>
                                        </div>
                                    </>
                                    }
                                </div>
                                <div>
                                    {isAdmin && 
                                    <>
                                    <div style={{fontSize:"13px"}}>&#8377; {t.Price} per sq ft</div>
                                    <div style={{textAlign:"end",marginRight:"15px"}}>
                                        <Link to={`/updateTile/${place}/${t._id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16" style={{marginRight:"15px",color:"beige"}}>
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16" 
                                                onClick={()=>{

                                                    const swalWithBootstrapButtons = Swal.mixin({
                                                        customClass: {
                                                          confirmButton: "btn btn-success",
                                                          cancelButton: "btn btn-danger"
                                                        },
                                                        buttonsStyling: false
                                                      });
                                                      swalWithBootstrapButtons.fire({
                                                        title: "Are you sure to delete this tile?",
                                                        text: "You won't be able to revert this!",
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonText: "Yes, delete it!",
                                                        cancelButtonText: "No, cancel!",
                                                        reverseButtons: true
                                                      }).then((result) => {
                                                        if (result.isConfirmed) {
                                                          swalWithBootstrapButtons.fire({
                                                            title: "Deleted!",
                                                            text: "Tile has been deleted.",
                                                            icon: "success"
                                                          });
                                                          fetch(`http://localhost:3050/product/${t._id}`, {method:"DELETE"})
                                                            .then(
                                                                setTile(
                                                                    tile.filter((e) => {
                                                                      return e._id != t._id;
                                                                    })
                                                                  )
                                                            )
                                                            .then(nav(`/${place}`))
                                                        } else if (
                                                          /* Read more about handling dismissals below */
                                                          result.dismiss === Swal.DismissReason.cancel
                                                        ) {
                                                          swalWithBootstrapButtons.fire({
                                                            title: "Cancelled",
                                                            text: "Tile is safe",
                                                            icon: "error"
                                                          });
                                                        }
                                                      });

                                                }}>
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                        </svg>
                                    </div>
                                    </>
                                    }
                                </div>
                            </div>
                        </div>
                </div>
            </>
        );
    })
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

            <div className="menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-square-fill menuItem" viewBox="0 0 16 16" color="rgb(45,52,52)" 
                                onClick={()=>{
                                    nav(`/home`);
                                }}
                                style={{cursor:"pointer"}}
                >
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                </svg>                
                {isAdmin && <Link to={`/addTiles/${place}`}><button className="btn btn-warning menuItem">Add tile</button></Link>}
            </div>
            <div className="container" style={{marginTop:"20px",marginLeft:"130px",cursor:"pointer"}}>
                <div className="row">{formatedTiles}</div>
            </div>            
        </>
    );
}
export default Tiles;