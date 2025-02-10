// function ContactUs()
// {
//     return(
//         <>
//         <h1>This is Contact Us page:</h1>
//         <p>Phone No : 9209504545</p>
//         <p>Email id : arvindtalle4545@gmail.com</p>
//         </>
//     )
// }
// export default ContactUs;


import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
    return (
        <div className="container d-flex justify-content-center align-items-center m-5">
            <div className="card shadow-lg p-4 border-0 rounded bg-light text-center" style={{ maxWidth: "500px" }}>
                <h1 className="text-primary fw-bold mb-4">📞 Contact Us</h1>
                
                <p className="fs-5 text-dark">
                    <FaPhoneAlt className="text-success me-2" />
                    <strong>Phone:</strong> <span className="text-secondary">+92 095 045 45</span>
                </p>
                
                <p className="fs-5 text-dark">
                    <FaEnvelope className="text-danger me-2" />
                    <strong>Email:</strong> <a href="mailto:arvindtalle4545@gmail.com" className="text-secondary text-decoration-none">arvindtalle4545@gmail.com</a>
                </p>

                <p className="fs-5 text-dark">
                    <FaMapMarkerAlt className="text-primary me-2" />
                    <strong>Address:</strong> <span className="text-secondary">Hyderabad, India</span>
                </p>
            </div>
        </div>
    );
}

export default ContactUs;
