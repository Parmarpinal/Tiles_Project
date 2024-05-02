import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ()=>{

  const [cartData, setCartData] = useState(null);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const uId = sessionStorage.getItem('userId');
        const response = await axios.post('http://localhost:3050/getCart', { UserId : uId });
        setCartData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCartData();
  }, []); 

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cartData) {
    return <div style={{width:"100%",height:"40vh"}}><h2 style={{textAlign:"center",paddingTop:"20vh"}}>No products in the cart.</h2></div>;
  }

  if (!cartData.Products || cartData.Products.length === 0) {
    return <div style={{width:"100%",height:"40vh"}}><h2 style={{textAlign:"center",paddingTop:"20vh"}}>No products in the cart.</h2></div>;
  }

  return (
    <div className="container text-center">
      <h2 style={{fontFamily:"sans-serif",margin:"30px",border:"2px solid green",width:"30vh",borderRadius:"10px"}}>Cart Details</h2>
      <table className="table">
        <thead>
          <tr style={{textAlign:"center"}}>
            <th className="box">Image</th>
            <th className="box">Name</th>
            <th className="box">Type</th>
            <th className="box">Price</th>
            <th className="box">Quantity</th>
            <th className="box">Total price</th>
            <th className="box">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartData.Products.map(product => (
            <tr style={{textAlign:"center"}}>
                <td className="col">
                    <img src={product.ProductId.Img} alt={product.ProductId.Name} style={{ height: '100px',width:"100px" ,borderRadius:"100%", objectFit:"cover"}} />
                </td>
                <td><h5>{product.ProductId.Name}</h5></td>
                <td><h5>{product.ProductId.Type}</h5></td>
                <td><h5>&#8377; {product.ProductId.Price}</h5></td>
                <td><h5>{product.Quantity} box</h5></td>
                <td><h5>&#8377; {product.Price}</h5></td>
                <td>
                    <input type="button" className="btn btn-danger" value="Remove" onClick={()=>{
                        const map={
                          UserId : sessionStorage.getItem('userId'),
                          IdOfProducts : product._id
                        }
                        console.log(map);
                        axios.post('http://localhost:3050/deleteItem',map)
                        .then((res)=>{
                          setCartData(prevCartData => ({
                            ...prevCartData,
                            Products: prevCartData.Products.filter(e => e._id !== map.IdOfProducts)
                          }));
                        })
                    }}/>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Cart;