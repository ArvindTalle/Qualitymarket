// import { useSelector } from "react-redux";

// function Orders()
// {
//     let ordesObj=useSelector(state => state.purchase);
//     const finalOrders=ordesObj.map((purchase,index)=>(
//         <div key={index}>
//             <p>date:{purchase.date}</p>
//             <p>finalAmount:{purchase.netAmount}</p>
//             <p>item:</p>
//             {purchase.item.map((item,index)=>(
//                 <li key={index}>
//                     {item.name}-{item.quantity}-{item.price}
//                 </li>
//             ))}

//         </div>
//     ))

//     return(
//         <>
//         <h1>This is orders page:</h1>
//         { ordesObj.length === 0 ?
//         <p>No purchase History is Available.</p>
//         :<ul>{finalOrders}</ul>
// }
//         </>
//     );
    
// }
// export default Orders;


import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Orders() {
    let ordersObj = useSelector((state) => state.purchase);

    return (
        <div className="container text-center mt-5">
            <h1 className="text-primary fw-bold">📦 Orders History</h1>

            {ordersObj.length === 0 ? (
                <p className="text-danger fs-4">No purchase history is available.</p>
            ) : (
                <div className="row justify-content-center">
                    {ordersObj.map((purchase, index) => (
                        <div key={index} className="col-md-6">
                            <div className="card shadow-lg p-4 mb-4 border-0 rounded bg-light">
                                <div className="card-body">
                                    <h5 className="card-title text-success fw-bold">🛒 Purchase Details</h5>
                                    <p className="card-text"><strong>📅 Date:</strong> {purchase.date}</p>
                                    <p className="card-text fs-5 text-dark">
                                        <strong>💰 Final Amount:</strong> <span className="text-danger">${purchase.netAmount}</span>
                                        
        
                                    </p>
                                    
                                

                                    <h6 className="text-secondary">🛍 Items Purchased:</h6>
                                    <ul className="list-group">
                                        {purchase.item.map((item, idx) => (
                                            <li key={idx} className="list-group-item d-flex align-items-center">
                                                <img 
                                                    src={item.image || "https://via.placeholder.com/50"} 
                                                    alt={item.name} 
                                                    className="rounded-circle me-3" 
                                                    width="50" 
                                                    height="50"
                                                />
                                                <span className="fw-bold flex-grow-1">{item.name}</span>
                                                <span className="badge bg-primary rounded-pill">{item.quantity} x ${item.price}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Orders;
