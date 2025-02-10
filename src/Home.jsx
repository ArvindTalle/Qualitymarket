// function Home()
// {
//     return(
//         <>
//         <div>
//         <h1>This is home page</h1>
//         <h2>Welcome to Flipkart</h2>
//         </div>
//         </>
//     )
// }
// export default Home;



import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import { FaHome, FaShoppingCart } from "react-icons/fa"; // Importing FontAwesome icons
import "./Home.css"; // Importing custom styles

function Home() {
  return (
    <section id="home" className="container d-flex justify-content-center align-items-center">
      <div className="home-card text-center p-4">
        <FaHome className="icon" /> {/* Home Icon */}
        <h1 className="display-4 text-secondary fw-bold welcome-text">Welcome</h1>
        <h2 className="text-success welcome-text">Your Shopping Hub - Quality Market</h2>
        <p className="text-muted">Find the best products at the best prices!</p>
        
        {/* Shop Now Button */}
        <a href="/vegitems" className="btn btn-primary btn-lg mt-3">
          <FaShoppingCart className="me-2" /> Start Shopping
        </a>
      </div>
    </section>
  );
}

export default Home;

