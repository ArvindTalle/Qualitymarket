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



// import { FaHome } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Home() {
//     return (
//         <div className="container text-center mt-5">
//             <div className="card shadow-lg p-4 bg-light rounded">
//                 <h1 className="text-primary">
//                     <FaHome className="me-2" /> Welcome
//                 </h1>
//                 <h2 className="text-success">Your Shopping Hub - Quality Market</h2>
//                 <p className="text-muted">Find the best products at the best prices!</p>
        
//             </div>
//         </div>
//     );
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
        
        {/* Shop Now Button
        <a href="/vegitems" className="btn btn-primary btn-lg mt-3">
          <FaShoppingCart className="me-2" /> Start Shopping
        </a> */}
      </div>
    </section>
  );
}

export default Home;

