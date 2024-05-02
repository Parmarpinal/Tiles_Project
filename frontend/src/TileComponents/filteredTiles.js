import axios from "axios";
import { useEffect, useState } from "react";

const FilteredTiles = ()=>{

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setAdmin] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get('http://localhost:3050/product')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data); 
        var admincheck = sessionStorage.getItem('isAdmin');
        setAdmin(admincheck);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);


  const filterProducts = (query) => {
    setSearchQuery(query);
    const filtered = products.filter(product =>
      product.Name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const formatedTiles = filteredProducts.map((t)=>{
    return (
        <>
            <div className="col-3 mb-5" style={{border:"2px solid green",width:"200px",height:"250px",margin:"10px",borderRadius:"10px"}}>
                <div><img src={t.Img} style={{width:"180px",height:"180px",marginLeft:"-4px",marginTop:"10px"}}/> </div>
                    <div>{t.Name}</div>
                    <h6 style={{fontSize:"12px"}}>{t.Type} | {t.Width}mm X {t.Height}mm</h6>
            </div>
        </>
    );
  })

  return (
    <div>
      {/* Search input field */}
      <input
        style={{width:"40vh",height:"6vh",margin:"30px",borderRadius:"10px",border:"2px solid black"}}
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => filterProducts(e.target.value)}
      />

        <div className="container">
            <div className="row">{formatedTiles}</div>
        </div> 
    </div>
  );
}
export default FilteredTiles;