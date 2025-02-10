// import { useDispatch, useSelector } from "react-redux";
// import { AddToCart } from "./Store";

// function Cloths()
// {
//     let Cloths=useSelector(state => state.products.cloths)
//     let dispath=useDispatch()



//      let finalCloths=Cloths.map((Cloths,index)=>(
//         <li key={index}>
//             {Cloths.name}-${Cloths.price}-{Cloths.brand}-{Cloths.size}-{Cloths.color}
//             <button onClick={()=>dispath(AddToCart(Cloths))}>AddToCart</button>
//         </li>
//         ));

//         return(
//             <>
//             <h1>This is cloths page:</h1>
//             <ul>{finalCloths}</ul>
//             </>
//         )
// }
// export default Cloths;

import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "./Store";

function Cloths() {
    let Cloths = useSelector(state => state.products.cloths);
    let dispatch = useDispatch();

    let finalCloths = Cloths.map((cloth, index) => (
        <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{cloth.name}</h5>
                    <p className="card-text">
                        Price: ${cloth.price} <br />
                        Brand: {cloth.brand} <br />
                        Size: {cloth.size} <br />
                        Color: {cloth.color}
                    </p>
                    <button 
                        className="btn btn-primary" 
                        onClick={() => dispatch(AddToCart(cloth))}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <h1 className="text-center my-4">Cloths</h1>
            <div className="container">
                <div className="row">
                    {finalCloths}
                </div>
            </div>
        </>
    );
}

export default Cloths;
