// import { useDispatch, useSelector } from "react-redux";
// import { AddToCart } from "./Store";

// function NonvegItems()
// {

//     let NonvegItems=useSelector(state => state.products.nonVeg)
//     let dispath=useDispatch()


//     let finalItems=NonvegItems.map((item,index)=>(
//           <li key={index}>
//                {item.name}-${item.price}
//                <button onClick={()=>dispath(AddToCart(item))}>AddToCart</button>
//           </li>
          
//      ));
//     return(
//         <>
        
//         <h1>This is Non-Veg page:</h1>
//        <ul>{finalItems}</ul>
//         </>
//     )
// }
// export default NonvegItems;



import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "./Store";
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nonvegitems.css"; // Importing custom styles

function NonvegItems() {
    let nonVegItems = useSelector(state => state.products.nonVeg);
    let dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Number of items per page

    // Filtered items based on search
    const filteredItems = nonVegItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return (
        <div className="container mt-4">
            <h1 className="text-center text-danger fw-bold mb-4">
                🍗 Fresh Meat & Seafood
            </h1>

            {/* Search Bar */}
            <div className="mb-4 w-50 mx-auto">
                <input
                    type="text"
                    className="form-control form-control-lg border border-danger shadow"
                    placeholder="🔍 Search for meat & seafood"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Product Grid */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {currentItems.map((item, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100 shadow-lg border-0 nonveg-card">
                            <img 
                                src={item.image} 
                                className="card-img-top p-2 nonveg-image" 
                                alt={item.name} 
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title text-dark fw-bold">{item.name}</h5>
                                <p className="card-text text-danger fw-bold">${item.price}</p>
                                <button 
                                    className="btn btn-outline-danger w-100 fw-bold d-flex align-items-center justify-content-center nonveg-button"
                                    onClick={() => dispatch(AddToCart(item))}
                                >
                                    <FaShoppingCart className="me-2" /> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center mt-4">
                <button 
                    className="btn btn-outline-danger me-2"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FaChevronLeft /> Prev
                </button>
                <span className="fw-bold fs-5 mx-3">Page {currentPage} of {totalPages}</span>
                <button 
                    className="btn btn-outline-danger ms-2"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next <FaChevronRight />
                </button>
            </div>
        </div>
    );
}

export default NonvegItems;
