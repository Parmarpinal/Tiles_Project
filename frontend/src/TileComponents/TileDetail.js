import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const TileDetail = ()=>{
    const [data,setData] = useState({});
    const [wallSize,setWallSize] = useState({});
    const [noOfTiles,setNoOfTiles] = useState(0);
    const nav = useNavigate();
    const {place,id} = useParams();
    const [admin,setAdmin] = useState(false);
    const [rupees, setRupees] = useState(0.0);
    const [noOfBox, setNoOfBox] = useState(0);

    useEffect(()=>{
        fetch(`http://localhost:3050/product/${id}/`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res);
            if(sessionStorage.isAdmin){
                setAdmin(true);
            }
        })
    });

    const handleCart = (id,price)=>{
        const productId = id;
        const uId = sessionStorage.getItem('userId');
        const data = {UserId: uId, ProductId: productId, Quantity: noOfBox, Price: price};
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
                nav('/cart');
        })
        .catch((error)=>{
            console.log("Error : ",error);
        })
    }

    return(
        <>
            <div className="container">
                <div className="row" style={{marginTop:"20px",marginBottom:"40px"}}>
                    <div className="col">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16"
                            onClick={()=>{
                                nav(`/${place}`);
                            }}
                        >
                            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                        </svg>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 tileImg">
                        <img src={data.Img} alt=""/>
                    </div>
                    <div className="col-6">
                        <div className="Tilebox">
                            <div className="part1" style={{float:"left"}}>
                                    <h5 className="head">{data.Name}</h5>
                                    <table>
                                        <tr>
                                            <td>Size</td>
                                            <td> : </td>
                                            <td>{data.Width}mm X {data.Height}mm</td>
                                        </tr>
                                        <tr>
                                            <td>Thickness</td>
                                            <td> : </td>
                                            <td>{data.Thickness}mm</td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
                                            <td> : </td>
                                            <td>{data.Color}</td>
                                        </tr>
                                        <tr>
                                            <td>Qty. per box</td>
                                            <td> : </td>
                                            <td>{data.QuantityPerBox}</td>
                                        </tr>
                                        <tr>
                                            <td>Material type</td>
                                            <td> : </td>
                                            <td>{data.Type}</td>
                                        </tr>
                                        <tr>
                                            <td>Laying type</td>
                                            <td> : </td>
                                            <td>{data.LayingType}</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td> : </td>
                                            <td>{data.Price} per sq ft</td>
                                        </tr>
                                    </table>
                            </div>
                                <div className="part2" style={{float:"left",marginLeft:"40px"}}>
                                    <div className="form">
                                        <div>Enter width of wall in feet :</div>
                                        <input type="text" onChange={(e)=>{
                                            setWallSize({
                                                ...wallSize,width:e.target.value
                                            })
                                        }}/>
                                        <div style={{height:"10px"}}></div>
                                        <div>Enter height of wall in feet :</div>
                                        <input type="text" onChange={(e)=>{
                                            setWallSize({
                                                ...wallSize,height:e.target.value
                                            })
                                        }}/>
                                        <br/>
                                        <br/>
                                        <div className="btn btn-warning" onClick={()=>{
                                            var wFeet=data.Width/304.8;
                                            var hFeet=data.Height/304.8;
                                            var areaOfWall = wallSize.width*wallSize.height;
                                            var areaOfTile = wFeet*hFeet;
                                            setNoOfTiles(
                                                Math.ceil(areaOfWall/areaOfTile)
                                            )
                                            setNoOfBox(
                                                Math.ceil(Math.ceil(areaOfWall/areaOfTile)/data.QuantityPerBox)
                                            )
                                            setRupees(
                                                areaOfWall*data.Price
                                            )
                                            
                                        }}>Show required tiles</div>
                                        <div style={{fontSize:"20px"}}>No. of tiles = {noOfTiles}</div>
                                        <div style={{fontSize:"20px"}}>No. of box = {Math.ceil(noOfTiles/data.QuantityPerBox)}</div>
                                        <div style={{fontSize:"20px"}}>Total rupees = {rupees}</div>
                                    </div>
                                    {!admin &&
                                        <>
                                        <div className="btn btn-danger" onClick={()=>{
                                            if(sessionStorage.getItem('userId')!=null){
                                                handleCart(data._id,rupees);
                                            }else{
                                                nav('/login');
                                            }
                                        }} style={{marginTop:"20px",marginLeft:"7px",width:"25vh",height:"7vh",paddingTop:"12px"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" style={{float:"left",marginRight:"15px"}}>
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                            </svg>
                                            <div>Add to cart</div>
                                        </div>
                                        </>
                                    }
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TileDetail; 