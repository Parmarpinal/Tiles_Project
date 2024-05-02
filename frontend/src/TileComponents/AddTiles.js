import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddTiles = ()=>{
    const [data,setData] = useState({});
    const [category,setCategory] = useState([]);
    const nav = useNavigate();
    const {field} = useParams();
    const [place,setPlace] = useState(field);

    useEffect(()=>{
        fetch(`http://localhost:3050/category`)
        .then((temp)=>{
            return temp.json();
        })
        .then((res)=>{
            setCategory(res);
        })
    },[]);

    useEffect(() => {
        const categoryObj = category.find((res) => res.CategoryName === place);
        if (categoryObj) {
          const catid = categoryObj._id;
          setData(prevData => ({
            ...prevData,
            CategoryId: catid
          }));
        }
      }, [category, place]);

    const handleAddTile = async (e) => {
        
        try {
            const response = await fetch(`http://localhost:3050/product`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log("Data successfully posted");

            nav(`/${place}`);
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };

    return(
        <>
            <div className="formBody">
            <div className="formContainer">
                    <div className="heading">Add Tile details</div>
                    <form action="" className="form">
                        <input required="" className="input" type="text" placeholder="Tile Name" onChange={(e)=>{
                            setData({...data, Name : e.target.value});
                        }}/>
                        <input required="" className="input" type="number" placeholder="Width in mm" onChange={(e)=>{
                            setData({...data, Width : e.target.value});
                        }}/>
                        <input required="" className="input" type="number" placeholder="Height in mm" onChange={(e)=>{
                            setData({...data, Height : e.target.value});
                        }}/>
                        <input required="" className="input" type="number" placeholder="Thickness in mm" onChange={(e)=>{
                            setData({...data, Thickness : e.target.value});
                        }}/>
                        <input required="" className="input" type="text" placeholder="Image" onChange={(e)=>{
                            setData({...data, Img : e.target.value});
                        }}/>
                        <input required="" className="input" type="text" placeholder="Color" onChange={(e)=>{
                            setData({...data, Color : e.target.value});
                        }}/>
                        <input required="" className="input" type="number" placeholder="Quantity per box" onChange={(e)=>{
                            setData({...data, QuantityPerBox : e.target.value});
                        }}/>
                        <input required="" className="input" type="text" placeholder="Type" onChange={(e)=>{
                            setData({...data, Type : e.target.value});
                        }}/>
                        <input required="" className="input" type="number" placeholder="Price" onChange={(e)=>{
                            setData({...data, Price : e.target.value});
                        }}/>
                        <input required="" className="input" type="text" placeholder="Laying type" onChange={(e)=>{
                            setData({...data, LayingType : e.target.value});
                        }}/>
                        <select className="input" onChange={(e)=>{
                            setPlace(e.target.value);
                        }} value={place}>
                            Place
                            <option>Livingroom</option>
                            <option>Bedroom</option>
                            <option>Bathroom</option>
                            <option>Kitchen</option>
                            <option>Outdoor</option>
                            <option>Commercial</option>
                        </select>
                        <input className="login-button" type="button" style={{width:"30%",textAlign:"center"}} value="Add tile"
                      onClick={(e)=>{
                        handleAddTile(e);
                      }}
                        />
                    </form>
            </div>
            </div>
        </>
    );
}
export default AddTiles;