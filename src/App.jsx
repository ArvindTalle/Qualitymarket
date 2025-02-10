// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import VegItems from "./VegItems";
// import NonvegItems from "./NonvegItems";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";
// import "./App.css";
// import Cloths from "./Cloths";
// import Milk from "./Milk";
// import { useDispatch, useSelector } from "react-redux";
// import Cart from "./Cart";
// import Electronics from "./Electronics";
// import Orders from "./Orders";

// import Login from "./Login";
// import { logout } from "./Store";


// function App()
// {

//   const cart=useSelector(state =>state.cart);
//   const totalItems = cart.reduce((Sum,item)=>Sum+item.quantity,0);
//   let isAuthenticated= useSelector(state=>state.auth.isAuthenticated);
//   let user=useSelector(state=>state.auth.user);

//   let dispath=useDispatch();




//   return(
//     <>
//     <div> <BrowserRouter> 
//     <div>
//       <h2>E-Commerce</h2>
//       <input type="text" placeholder="&#128269; |search"/>
//       <Link to="/cart">&#128722; Cart</Link>
//     </div>
//     <Link to = "/home">Home</Link>
//     <Link to = "/vegitems">VegItems</Link>
//     <Link to = "/nonvegitems">NonvegItems</Link>
//     <Link to = "/milk">Milk</Link>
//     {/* <Link to= "/cloths">Cloths</Link> */}
//     {/* <Link to="/electronics">Electronics</Link> */}
//     <Link to = "/orders">Orders</Link>
//     <Link to = "/aboutUs">AboutUs</Link>
//     <Link to = "/contactUs">ContactUs</Link>

//     {
//       isAuthenticated?(
//         <>
//         <span>Welcome,{user}</span>
//         <button onClick={()=>dispath(logout())}>Logout</button>
//         </>
//       ):(
//         <Link to = "/login">Signin</Link>
//       )
//     }
  

//     <Routes>
//       <Route path="/home" element={<Home />}></Route>
//       <Route path="/vegitems" element={<VegItems/>}></Route>
//       <Route path="/nonvegitems" element={<NonvegItems/>}></Route>
//       <Route path="/milk" element={<Milk/>}></Route>
//       {/* <Route path="/cloths" element={<Cloths/>}></Route> */}
//       {/* <Route path="/electronics" element={<Electronics/>}></Route> */}
//       <Route path="/cart" element={<Cart/>}></Route>
//       <Route path="/orders" element={<Orders/>}></Route>
//       <Route path="/aboutUs" element={<AboutUs/>}></Route>
//       <Route path="/contactUs" element={<ContactUs/>}></Route>
//       <Route path="/login" element={<Login/>}></Route>
//     </Routes>
//     </BrowserRouter>
//     </div>
//     </>
//   )
// }
// export default App;







import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Store";
import Home from "./Home";
import VegItems from "./VegItems";
import NonvegItems from "./NonvegItems";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Milk from "./Milk";
import Cart from "./Cart";
import Orders from "./Orders";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="container-fluid d-flex flex-column min-vh-100">
         <div className="d-flex justify-content-between align-items-center  text-white p-3 shadow" style={{backgroundColor:"lightpink"}}>
          <h1 className="fw-bold m-3 fst-italic" style={{color:"green"}}><i className="fa-solid fa-store me-2 fst-italic "></i> Quality Market </h1>
          <Link to="/cart" className="btn btn-light fw-bold">
            <i className="fa-solid fa-cart-shopping me-1"></i> Cart ({totalItems})
          </Link>
        </div>


        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
          <div className="container">
            <Link className="navbar-brand" to="/"><i className="fa-solid fa-house"></i></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/vegitems"><i className="fa-solid fa-leaf"></i> Veggies</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/nonvegitems"><i className="fa-solid fa-drumstick-bite"></i> Meat</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/milk"><i className="fa-solid fa-cheese"></i> Dairy</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/orders"><i className="fa-solid fa-clock-rotate-left"></i> Orders</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/aboutUs"><i className="fa-solid fa-address-card"></i> About Us</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contactUs"><i className="fa-solid fa-square-phone"></i> Contact Us</Link></li>
              </ul>
              <ul className="navbar-nav ms-auto">
                {isAuthenticated ? (
                  <li className="nav-item">
                    <span className="navbar-text text-white me-3">Welcome, {user}</span>
                    <button onClick={() => dispatch(logout())} className="btn btn-danger">Logout</button>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="btn btn-outline-light">Sign In</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vegitems" element={<VegItems />} />
            <Route path="/nonvegitems" element={<NonvegItems />} />
            <Route path="/milk" element={<Milk />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <footer className="bg-secondary text-white text-center py-3 mt-auto">
          <p>&copy; {new Date().getFullYear()} Quality Market. All rights reserved.</p>
          <div>
            <Link className="text-white mx-2" to="/aboutUs">About Us</Link>
            <Link className="text-white mx-2" to="/contactUs">Contact</Link>
            <Link className="text-white mx-2" to="/terms">Terms of Service</Link>
            <Link className="text-white mx-2" to="/privacy">Privacy Policy</Link>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
