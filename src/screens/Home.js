import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Card from "../components/Card";
import Carousal from "../components/Carousal";
function Home() {
  const [search,setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:8000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    // console.log(response[0],response[1]);

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption " style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>{setSearch(e.target.value)}}
                />

              </div>
            </div>
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://i.pinimg.com/originals/56/6f/7e/566f7eed88399c6feb549f7796ff18f2.jpg"
                className="d-block w-100 "
                alt="..."
              />
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="
https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://fastfoodcity.com/wp-content/uploads/fast-food-fastfoodcity.com-020.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data, index) => {
            return (
              <div key={index} className="row mb-3">
                {" "}
                {/* Assign key here */}
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem.length > 0 ? (
                  foodItem
                    .filter((item) => (item.CategoryName === data.CategoryName) && item.name.toLowerCase().includes(search.toLowerCase()) )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                          foodItem = {filterItems}
                           
                            options={filterItems.options[0]}
                           
                          />
                        </div>
                      );
                    })
                ) : (
                  <div> No such data found </div>
                )}
              </div>
            );
          })
        ) : (
          <div>""""""</div>
        )}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
