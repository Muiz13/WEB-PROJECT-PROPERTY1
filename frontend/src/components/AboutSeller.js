// import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
// import mountpakistan from '../images/mountainpakistan.jpg'; // Background image
//
// export default function AboutSellers() {
//     const [sellers, setSellers] = useState([
//         { id: 1, name: "John Doe", email: "johndoe@example.com", phone: "123-456-7890" },
//         { id: 2, name: "Jane Smith", email: "janesmith@example.com", phone: "987-654-3210" },
//         { id: 3, name: "Michael Brown", email: "michaelb@example.com", phone: "555-123-4567" }
//     ]);
//
//     // Style for the background
//     const styles = {
//         marginTop: '10px',
//         padding: '30px',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center center',
//         backgroundImage: `url(${mountpakistan})`
//     };
//
//     return (
//         <div>
//             <div className="d-flex justify-content-center text-center bg-dark text-light" style={styles}>
//                 <div className="d-flex flex-column">
//                     <div>
//                         <h1>About Our Sellers</h1>
//                     </div>
//                     <div className="mt-4">
//                         {/* Displaying the seller information */}
//                         {sellers.length > 0 ? (
//                             <ul className="list-group">
//                                 {sellers.map(seller => (
//                                     <li key={seller.id} className="list-group-item bg-secondary text-white mb-2">
//                                         <h4>{seller.name}</h4>
//                                         <p>Email: {seller.email}</p>
//                                         <p>Phone: {seller.phone}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         ) : (
//                             <p>No sellers available</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
