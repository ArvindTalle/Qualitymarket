// import { useDispatch, useSelector } from "react-redux";
// import {  addToPurchase, clear, Decreament, Increament, Remove } from "./Store";
// import { useState } from "react";

// function Cart()
// {
//     let cartObj=useSelector(state => state.cart)
//     let dispath=useDispatch()
//     let cartItem=cartObj.map((item,index)=>(
//               <li key={index}>
//                    {item.name}-${item.price}
//                    <button onClick={()=>dispath(Increament(item))} style={{backgroundColor:"skyblue"}}>+</button>
//                    <button onClick={()=>dispath(Decreament(item))} style={{backgroundColor:"skyblue"}}>-</button>
//                   Quantity:{item.quantity}
//                   <button onClick={()=>dispath(Remove(item))} style={{backgroundColor:"orange"}}>Remove</button>
//                   </li>
//      ));

    
//      let [couponCode,setCouponCode] = useState('');
//      let [showCouponDiscount,setShowCouponDiscount] = useState(false);
//      let [couponDiscountPercentage,setCouponDiscountPercentage] =useState(0);
//      let handlingCouponpercentage=()=>{
//         switch (couponCode.toUpperCase()) {
//             case 'REACT10' :setCouponDiscountPercentage(10);
//                             break;
//             case 'REACT20' :setCouponDiscountPercentage(20);
//                             break;
//             case 'REACT30' :setCouponDiscountPercentage(30);
//                             break;
//             case 'REACT40' :setCouponDiscountPercentage(40);
//                             break;
//             default :setCouponDiscountPercentage(0);
//         }
//     };

//      let totalPrice=cartObj.reduce((sum,item)=> sum + item.price * item.quantity,0);
//      let couponDiscountAmount = totalPrice * (couponDiscountPercentage/100);
//      let[discountPercentage,setDiscountPercentage]=useState(0);
//      let discountAmount=totalPrice * (discountPercentage/100);
//      let finalAmount= totalPrice - discountAmount;
//      let netAmount = totalPrice-couponDiscountAmount;

//     let purchaseDate = new Date().toLocaleDateString();

//     let handlePurchaseDetails =()=>{
//         let purchaseDetails={item:[...cartObj],totalPrice,date:purchaseDate};
//         dispath(addToPurchase(purchaseDetails))
//         dispath(clear());
    
//     }

//     return(
//         <>
//         <h1>This is cart page:</h1>
//         {
//             cartObj.length===0?
//             <h3 style={{color:"purple"}}>Your cart is empty</h3>
//             :
//             <div>
//                 <h2 style={{color:"purple"}}>Cart itmes are</h2>
//                 <ul>{cartItem}</ul>
//                 <p>total Price: ${totalPrice}</p>
//                 <p>Discount Percentage is: {discountPercentage}%</p>
//                 <p>Discount Amount: ${discountAmount}</p>
//                 <p>final Amount : ${finalAmount}</p>
//                  <button onClick={()=>setDiscountPercentage(10)} style={{backgroundColor:"orange"}}>Dis 10%</button>
//                  <button onClick={()=>setDiscountPercentage(20)} style={{backgroundColor:"orange"}}>Dis 20%</button>
//                  <button onClick={()=>setDiscountPercentage(30)} style={{backgroundColor:"orange"}}>Dis 30%</button>
            

            
        
//         <input type="text"
//                 placeholder="Enter the Coupon Code"
//                 value={couponCode}
//                 onChange={(e)=>setCouponCode(e.target.value)}/>

//         <button onClick={()=>{handlingCouponpercentage(),setShowCouponDiscount(true)}}>Apply Coupon</button>
//         { 
//         showCouponDiscount && 
//             <div>
//             <h4>The Coupon Code is:{couponCode}</h4>
//             <h4>Coupon Code Discount Amount:{couponDiscountAmount.toFixed(2)}</h4>
           
            
        
//             <h4>Net amount to pay:{netAmount.toFixed(2)}</h4>
//             </div>}
//             </div>}
        

//             <button onClick={()=>handlePurchaseDetails()}>Complete Purchase</button>
//              </>
//     );
// }
// export default Cart;


import { useDispatch, useSelector } from "react-redux";
import { addToPurchase, clear, Decreament, Increament, Remove } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
    let cartObj = useSelector((state) => state.cart);
    let dispatch = useDispatch();

    let [couponCode, setCouponCode] = useState("");
    let [showCouponDiscount, setShowCouponDiscount] = useState(false);
    let [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);
    let [discountPercentage, setDiscountPercentage] = useState(0);

    let handleCouponPercentage = () => {
        switch (couponCode.toUpperCase()) {
            case "REACT10":
                setCouponDiscountPercentage(10);
                break;
            case "REACT20":
                setCouponDiscountPercentage(20);
                break;
            case "REACT30":
                setCouponDiscountPercentage(30);
                break;
            case "REACT40":
                setCouponDiscountPercentage(40);
                break;
            default:
                setCouponDiscountPercentage(0);
        }
    };

    let totalPrice = cartObj.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let couponDiscountAmount = totalPrice * (couponDiscountPercentage / 100);
    let discountAmount = totalPrice * (discountPercentage / 100);
    let finalAmount = totalPrice - discountAmount;
    let netAmount = finalAmount - couponDiscountAmount;
    let purchaseDate = new Date().toLocaleDateString();

    let handlePurchaseDetails = () => {
        let purchaseDetails = { item: [...cartObj], netAmount, date: purchaseDate };
        dispatch(addToPurchase(purchaseDetails));
        dispatch(clear());
    };

    return (
        <div className="container text-center mt-5">
            <h1 className="text-primary">Shopping Cart</h1>
            {cartObj.length === 0 ? (
                <h3 className="text-danger">Your cart is empty</h3>
            ) : (
                <div className="card p-4 shadow-lg">
                    <h2 className="text-success">Cart Items</h2>
                    <ul className="list-group">
                        {cartObj.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <img src={item.image} alt={item.name} className="img-thumbnail" style={{ width: "80px" }} />
                                <span>
                                    {item.name} - ${item.price}
                                    <br />
                                    Quantity: {item.quantity}
                                </span>
                                <div>
                                    <button
                                        onClick={() => dispatch(Increament(item))}
                                        className="btn btn-sm btn-primary mx-1"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => dispatch(Decreament(item))}
                                        className="btn btn-sm btn-warning mx-1"
                                    >
                                        -
                                    </button>
                                    <button
                                        onClick={() => dispatch(Remove(item))}
                                        className="btn btn-sm btn-danger mx-1"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4">
                        <p className="fw-bold">Total Price: ${totalPrice}</p>
                        <p>Discount Percentage: {discountPercentage}%</p>
                        <p>Discount Amount: ${discountAmount.toFixed(2)}</p>
                        <p className="fw-bold text-danger">Final Amount: ${finalAmount.toFixed(2)}</p>

                        <button onClick={() => setDiscountPercentage(10)} className="btn btn-outline-info mx-1">
                            Discount 10%
                        </button>
                        <button onClick={() => setDiscountPercentage(20)} className="btn btn-outline-info mx-1">
                            Discount 20%
                        </button>
                        <button onClick={() => setDiscountPercentage(30)} className="btn btn-outline-info mx-1">
                            Discount 30%
                        </button>
                    </div>

                    {/* Coupon Code Section */}
                    <div className="mt-4">
                        <input
                            type="text"
                            className="form-control w-50 mx-auto"
                            placeholder="Enter Coupon Code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                handleCouponPercentage();
                                setShowCouponDiscount(true);
                            }}
                            className="btn btn-success mt-2"
                        >
                            Apply Coupon
                        </button>
                    </div>

                    {showCouponDiscount && (
                        <div className="mt-3 bg-light p-3 rounded">
                            <h4>Coupon Code: {couponCode}</h4>
                            <h4>Coupon Discount Amount: ${couponDiscountAmount.toFixed(2)}</h4>
                            <h4 className="text-primary">Net Amount to Pay: ${netAmount.toFixed(2)}</h4>
                        </div>
                    )}
                </div>
            )}

            <button onClick={() => handlePurchaseDetails()} className="btn btn-lg btn-primary mt-4">
                Complete Purchase
            </button>
        </div>
    );
}

export default Cart;




