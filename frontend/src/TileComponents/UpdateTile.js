import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTile= ()=>{
    const [data,setData] = useState({});
    const nav = useNavigate();
    const {id,field} = useParams();
    const [category,setCategory] = useState([]);
    const [place,setPlace] = useState(field);

    useEffect(()=>{
        fetch(`http://localhost:3050/product/${id}`)
        .then((temp)=>{
            return temp.json();
        })
        .then((res)=>{
            setData(res);
        })
    },[]);

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

    const handleUpdateTile = async () => {
        try {
            if(place == field){
                console.log('same');
                const response = await fetch(`http://localhost:3050/product/${id}`, {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                console.log("Data successfully updated");
    
                nav(`/${place}`);
            }else{
                console.log('not same');

                const response = await fetch(`http://localhost:3050/product`, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error in add tile! Status: ${response.status}`);
                }

                const res = await fetch(`http://localhost:3050/product/${id}`, {method: "DELETE"});

                if (!res.ok) {
                    throw new Error(`HTTP error in delete tile! Status: ${response.status}`);
                }

                console.log("Data successfully updated");

                nav(`/${place}`);
            }
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };

    return(
        <>
            <div className="formBody">
            <div className="formContainer">
                    <div className="heading">Update Tile details</div>
                    <form action="" className="form">
                        <input required="" className="input" value={data.Name} type="text" placeholder="Tile Name" onChange={(e)=>{
                            setData({...data, Name : e.target.value});
                        }}/>
                        <input required="" className="input" value={data.Width} type="number" placeholder="Width in mm" onChange={(e)=>{
                            setData({...data, Width : e.target.value});
                        }}/>
                        <input required="" className="input" value={data.Height} type="number" placeholder="Height in mm" onChange={(e)=>{
                            setData({...data, Height : e.target.value});
                        }}/>
                        <input required="" className="input" value={data.Thickness} type="number" placeholder="Thickness in mm" onChange={(e)=>{
                            setData({...data, Thickness : e.target.value});
                        }}/>
                        <input required="" className="input" value={data.Img} type="text" placeholder="Image" onChange={(e)=>{
                            setData({...data, Img : e.target.value});
                        }}/>
                        <input required="" className="input" value={data.Color} type="text" placeholder="Color" onChange={(e)=>{
                            setData({...data, Color : e.target.value});
                        }}/>
                        <input required="" className="input" value={data.QuantityPerBox} type="number" placeholder="Quantity per box" onChange={(e)=>{
                            setData({...data, QuantityPerBox : e.target.value});
                        }}/>
                        <input required="" className="input" value={data.Type} type="text" placeholder="Type" onChange={(e)=>{
                            setData({...data, Type : e.target.value});
                        }}/>
                        <input required="" className="input" value={data.Price} type="number" placeholder="Price" onChange={(e)=>{
                            setData({...data, Price : e.target.value});
                        }}/>
                        <input required="" className="input" value={data.LayingType} type="text" placeholder="Laying type" onChange={(e)=>{
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
                        <input className="login-button" type="button" style={{width:"30%",textAlign:"center"}} value="Update tile"
                        onClick={handleUpdateTile}
                        />
                    </form>
            </div>
            </div>
        </>
    );
}
export default UpdateTile;