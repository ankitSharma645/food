import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Card from "../components/Card"
import Carousal from "../components/Carousal";
function Home() {

  const [foodCat,setFoodCat] = useState([]);
  const [foodItem,setFoodItem] =useState([]);

  const loadData = async()=>{
    let response  = await fetch("http://localhost:8000/api/foodData",{
      method :"POST",
      headers :{
        'Content-Type': 'application/json'
      }

    })
    response = await response.json();
    
   // console.log(response[0],response[1]);
   
   setFoodItem(response[0]);
   setFoodCat(response[1]);

  }
  useEffect(()=>{
    loadData();
  },[]);


  return (
   <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Carousal></Carousal>
      </div>

      <div className='container'>

        {
            foodCat.length > 0
            ? foodCat.map((data)=>{

              return <div> {data.CategoryName}</div>
  
            }):
            <div>""""""</div>
       
        }
        <Card/>
        
      </div>
      <div>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default Home;
