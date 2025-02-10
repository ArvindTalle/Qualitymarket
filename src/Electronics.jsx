// import { useDispatch, useSelector } from "react-redux";
// import { AddToCart } from "./Store";

// function Electronics()
// {
//     let Electronics=useSelector(state=>state.products.electronics)
//     let dispath=useDispatch()

//      let finalItems=Electronics.map((item,index)=>(
//                         <li key={index}>
//                              {item.name}-${item.price}
//                              <button onClick={()=>dispath(AddToCart(item))}>AddToCart</button>
//                         </li>
//                ));


//     return(
//         <>
//         <h1>This is Electronics page:</h1>
//         <ul>{finalItems}</ul>
//         </>
//     )
// }
// export default Electronics;

import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "./Store";
import 'bootstrap/dist/css/bootstrap.min.css';

function Electronics() {
    let Electronics = useSelector(state => state.products.electronics);
    let dispath = useDispatch();

    let finalItems = Electronics.map((item, index) => (
        <div className="col-12 col-md-4" key={index}>
            <div className="card mb-4 shadow-sm">
                <img src={item.image} height="200px" width="20px" alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <button 
                        onClick={() => dispath(AddToCart(item))}
                        className="btn btn-primary w-100">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Electronics</h1>
            <div className="row">
                {finalItems}
            </div>
        </div>
    );
}

export default Electronics;
