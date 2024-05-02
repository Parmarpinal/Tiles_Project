import axios from "axios";
import { useEffect, useState } from "react";

const AllUserMassages = ()=>{
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3050/customer/msg')
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setData(res);
            console.log(res);
        })
    }, []);

    // useEffect(() => {
    //     const getmessages = async () => {
    //       try {
    //         const response = await axios.post('http://localhost:3050/customer/msg');
    //         setData(response.data);
    //         console.log(data);
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     };
    
    //     getmessages();
    //   }, []); 

    return(
        <>
            <div className="container">
                <div className="row">
                {data !== null && data.map((d)=>{
                return(
                    <>
                        <div className="col-3" style={{border:"2px solid green",borderRadius:"20px",marginTop:"20px",padding:"20px",marginLeft:"50px",marginRight:"50px"}}>
                            
                                    <h5 ><span className="customerDeatils">Customer Name : </span>{d.Name}</h5>
                                    <h5 ><span className="customerDeatils">Email: </span>{d.Email}</h5>
                                    <h5 ><span className="customerDeatils">Subject: </span>{d.Subject}</h5>
                                    <h5 ><span className="customerDeatils">Message: </span>{d.Message}</h5>
                                
                            <div style={{display:"flex",justifyContent:"flex-end"}}>
                                <input type="button" className="btn mt-2" value="Clear" style={{fontFamily:"sans-serif",
                                    backgroundColor:"rgb(175, 124, 58)",color:"white"}}
                                    onClick={()=>{
                                        fetch(`http://localhost:3050/customer/msg/${d._id}`,
                                            {method: "DELETE"}
                                        ).then((res)=>{
                                            setData(
                                                data.filter((e) => {
                                                  return e._id != d._id;
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
            </div>
            </div>
        </>
    );
}
export default AllUserMassages;