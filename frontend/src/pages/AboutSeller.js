import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import insta from "../images/insta.png";
import facebook from "../images/facebook.png";
import whatsapp from "../images/WhatsAppLogo.png";
import Services from "../Services/Services";

export default function AboutSellers() {
    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        document.title = "About Sellers";
        Services.getAllSellersInfo()
            .then(response => {
                console.log("Raw response from getAllSellersInfo:", response);
                const sellersArray = response.sellers || response;
                console.log("Processed sellers array:", sellersArray);
                setSellers(sellersArray);
            })
            .catch(error => {
                console.error('Error fetching sellers:', error);
                setSellers([]); // Set empty array on error
            });
    }, []);

    // Add debug log for render
    console.log("Current sellers state:", sellers);

    const styles = {
        marginTop: "10px",
        padding: "30px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage:
            'url("https://media.istockphoto.com/id/1416335096/photo/businessman-hand-holding-smart-phone-with-icon-mobile-phone-mail-telephone-and-address.jpg?b=1&s=170667a&w=0&k=20&c=O39_wq7HB2oZHV3pyeZDxFAq0Xb_zNvLKrAIEWDVveY=")',
    };
    const styleOpacity = {
        opacity: "0.8",
    };
    const imageStyle = {
        width: "85px",
        height: "50px",
    };

    const openWhatsAppChat = (phoneNumber) => {
        const message = "Hello, ";
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div>
            <div
                className="d-flex justify-content-center text-center bg-dark text-light"
                style={styles}
            >
                <div className="d-flex flex-column">
                    <div>
                        <h1>About Sellers</h1>
                    </div>
                    <div>
                        <div className="d-flex flex-row justify-content-center">
                            <Link className="nav-link link-light fs-5" to="/">
                                Home
                            </Link>
                            <Link className="nav-link link-light fs-5" to="/about-sellers">
                                About Sellers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="" style={{ margin: "60px" }}>
                <div className="row d-flex justify-content-around">
                    {Array.isArray(sellers) && sellers.map((seller) => (
                        <section
                            key={seller._id}
                            className="col-md-5 mb-4"
                            style={{ background: "#f4f4f4", padding: "30px" }}
                        >
                            <div className="mb-3">
                                <h3 className="text-info">{seller?.name || 'Unnamed Seller'}</h3>
                            </div>
                            <div className="seller-info">
                                <p>
                                    <strong>Area:</strong> {seller?.area || 'Area not specified'}<br />
                                    <strong>Rating:</strong> {seller?.rating ? seller.rating.toFixed(1) : "No ratings yet"}<br />
                                    <strong>Properties Sold:</strong> {seller?.propertiesSold || 0}<br />
                                    <strong>Contact:</strong> {seller?.contactInfo || 'No contact info provided'}<br />
                                    <br />
                                    <strong>About:</strong><br />
                                    {seller?.description || 'No description available'}
                                </p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between col-3">
                                {seller?.instagram && (
                                    <div>
                                        <a target="_blank" href={seller.instagram} rel="noopener noreferrer">
                                            <img
                                                src={insta}
                                                style={{
                                                    width: "82px",
                                                    height: "48px",
                                                    cursor: "pointer",
                                                }}
                                                alt="Instagram"
                                            />
                                        </a>
                                    </div>
                                )}
                                {seller?.facebook && (
                                    <div>
                                        <a target="_blank" href={seller.facebook} rel="noopener noreferrer">
                                            <img
                                                src={facebook}
                                                style={{
                                                    width: "90px",
                                                    height: "53px",
                                                    cursor: "pointer",
                                                }}
                                                alt="Facebook"
                                            />
                                        </a>
                                    </div>
                                )}
                                {seller?.contactInfo && (
                                    <div>
                                        <a onClick={() => openWhatsAppChat(seller.contactInfo)}>
                                            <img
                                                src={whatsapp}
                                                alt="WhatsApp"
                                                style={{
                                                    width: "70px",
                                                    height: "50px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </section>
                    ))}
                    <section
                        className="col-md-5"
                        style={{ background: "#f4f4f4", padding: "30px" }}
                    >
                        <div className="mb-3">
                            <h3 className="text-info">HOW WE CAN HELP YOU?</h3>
                        </div>
                        <p>
                            If you have any questions about buying or selling property in
                            Pakistan, our team of experienced professionals is here to help.
                            Whether you need advice on property values, market trends, or
                            financing options, we are always available to provide you with the
                            information you need to make informed decisions.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
