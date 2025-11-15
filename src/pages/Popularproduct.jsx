import React, { useEffect, useState } from "react";
import "../App.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PopularProducts = () => {

  let [products,setproducts]=useState([])

  useEffect(()=>{
    getproduct()
  },[])

    let getproduct=()=>{
      axios.get("https://freshcart-backend-umber.vercel.app/ourproduct").then((res)=>{
        if(res.data.status){
          setproducts(res.data.myproducts)
        }
      })
    }


  // productdetails ------------------
  let go=useNavigate()

  let productdetails=(productdata)=>{
      // filter data for related product 
      let filtereditems=products.filter(data=> data.category==productdata.category)

      let passdata={
        "productdetails":productdata,
        "filterdata":filtereditems
      }

    go("/Productdetails",{state:passdata})

  }

  return (
    <div className="product-container">
      <h2 className="section-title">Popular Products</h2>

      <div className="grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}  onClick={()=>productdetails(item)}>
            {<span className="badge">10%</span>}

            <img className="product-img" src={item.productimage} alt={item.title} />

            <p className="category">{item.category}</p>
            <h3 className="product-title">{item.title}</h3>

            <div className="price">
              <span className="current">${item.saleprice}</span>
              {item.regularprice && <span className="old">${item.regularprice}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
