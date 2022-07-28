import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://images.unsplash.com/photo-1594488518065-832318c2405b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
          className="card-img"
          alt="..."
          height="550px"
        //   style={{objectFit:"cover"}}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASONS ARRIVALS</h5> 
            <p className="card-text lead fs-2">
              CHECK OUT ALL THE TRENDS 
            </p>
          </div>
        </div>
          </div>
          <Products />
    </div>
  );
}

export default Home;
