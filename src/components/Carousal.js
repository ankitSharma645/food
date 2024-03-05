import React from "react";

export default function Carousal() {
  return (
    <div>

<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id="carousel">


    <div className="carousel-caption " style={{zIndex:"10"}}>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>

    </div>
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://i.pinimg.com/originals/56/6f/7e/566f7eed88399c6feb549f7796ff18f2.jpg" className="d-block w-100 " alt="..."/>
    </div>


    <div className="carousel-item" data-bs-interval="2000">
      <img src="
https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
    </div>

    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://fastfoodcity.com/wp-content/uploads/fast-food-fastfoodcity.com-020.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>


  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
/*

https://fastfoodcity.com/wp-content/uploads/fast-food-fastfoodcity.com-020.jpg


https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
https://source.unsplash.com/random/900×700/?barbeque
https://source.unsplash.com/random/900×700/?pizza*/