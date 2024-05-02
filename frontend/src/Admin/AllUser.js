import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllUser = ()=>{
    const [cartData, setCartData] = useState(null);
    const nav = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3050/getAllCustomer')
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setCartData(res);
        })
    }, []); 

    return(
        <>
            {cartData !== null && cartData.map((cus)=>{
                return(
                    <>
                        <div style={{border:"2px solid grey",borderRadius:"20px",marginTop:"20px",padding:"20px",marginLeft:"50px",marginRight:"50px"}}>
                            <div className="container">
                                <div className="row">
                                    <h5 className="col"><span className="customerDeatils">Customer Name : </span>{cus.UserId.Name}</h5>
                                    <h5 className="col"><span className="customerDeatils">Email: </span>{cus.UserId.Email}</h5>
                                </div>
                                <div className="row">
                                    <h5 className="col"><span className="customerDeatils">Address: </span>{cus.UserId.Address}</h5>
                                    <h5 className="col"><span className="customerDeatils">Contact: </span>{cus.UserId.MobileNo}</h5>
                                </div>
                                <div className="row">
                                    <h5 className="col"><span className="customerDeatils">Arrives on: </span>{cus.Products[0].modifiedOn}</h5>
                                </div>
                            </div>
                            <h5 style={{fontFamily:"sans-serif",margin:"30px",padding:"5px",border:"2px solid green",width:"17vh",borderRadius:"10px"}}>Cart Details</h5>
                            <table className="table">
                                <thead>
                                <tr style={{textAlign:"center"}}>
                                    <th className="probox">Image</th>
                                    <th className="probox">Name</th>
                                    <th className="probox">Type</th>
                                    <th className="probox">Price</th>
                                    <th className="probox">Quantity</th>
                                    <th className="probox">Total price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cus.Products.map(product => (
                                    <tr style={{textAlign:"center"}}>
                                        <td className="col">
                                            <img src={product.ProductId.Img} alt={product.ProductId.Name} style={{ height: '100px',width:"100px" ,borderRadius:"100%", objectFit:"cover"}} />
                                        </td>
                                        <td><h5>{product.ProductId.Name}</h5></td>
                                        <td><h5>{product.ProductId.Type}</h5></td>
                                        <td><h5>&#8377; {product.ProductId.Price} per sq ft</h5></td>
                                        <td><h5>{product.Quantity} box</h5></td>
                                        <td><h5>&#8377; {product.Price}</h5></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <div style={{display:"flex",justifyContent:"flex-end"}}>
                                {/* <div style={{fontFamily:"sans-serif",padding:"5px",marginRight:"10px",border:"2px solid green",width:"17vh",borderRadius:"10px"}}>Total price = {cus.Price}</div> */}
                                <input type="button" className="btn" value="Order complete" style={{fontFamily:"sans-serif",
                                    backgroundColor:"rgb(175, 124, 58)",color:"white"}}
                                    onClick={()=>{
                                        fetch(`http://localhost:3050/deleteCart/${cus.UserId._id}`,
                                            {method: "DELETE"}
                                        ).then((res)=>{
                                            setCartData(
                                                cartData.filter((e) => {
                                                  return e.UserId._id != cus.UserId._id;
                                                })
                                            )
                                        })
                                    }}
                                    />
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
}
export default AllUser;