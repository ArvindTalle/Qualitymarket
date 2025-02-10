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



import { FaHome } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <div className="container text-center mt-5">
            <div className="card shadow-lg p-4 bg-light rounded">
                <h1 className="text-primary">
                    <FaHome className="me-2" /> Welcome
                </h1>
                <h2 className="text-success">Your Shopping Hub - Quality Market</h2>
                <p className="text-muted">Find the best products at the best prices!</p>
        
            </div>
        </div>
    );
}

export default Home;




