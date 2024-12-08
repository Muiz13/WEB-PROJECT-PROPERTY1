import React from "react";
import { Link } from "react-router-dom";
import insta from "../images/insta.png";
import facebook from "../images/facebook.png";
import whatsapp from "../images/WhatsAppLogo.png";

export default function Contact() {
  React.useEffect(() => {
    document.title = "Contact";
  }, []);

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

  const openWhatsAppChat = () => {
    const phoneNumber = "923330333254"; // Replace with the phone number you want to send the message to
    const message = "Hello, "; // Replace with the message you want to send

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      const response = await fetch("https://formspree.io/f/xwpkjkww", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        form.reset();
        // The modal is already set up to show on button click
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center text-center bg-dark text-light"
        style={styles}
      >
        <div className="d-flex flex-column">
          <div>
            <h1>Contact</h1>
          </div>
          <div>
            <div className="d-flex flex-row justify-content-center">
              <Link className="nav-link link-light fs-5" to="/">
                Home
              </Link>
              <Link className="nav-link link-light fs-5" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{ margin: "60px" }}>
        <div className=" row d-flex justify-content-around">
          <section
            className="col-md-5"
            style={{ background: "#f4f4f4", padding: "30px" }}
          >
            <div className="mb-3">
              <h3 className="text-info">CONTACT INFORMATION</h3>
            </div>
            <p className="">
              <p>
                Welcome to Mount Pakistan - your trusted real estate partner in
                Pakistan. As a registered member of the Islamabad Estate Agent
                Association (IEAA), we are committed to providing our clients
                with the highest level of service and expertise in the real
                estate industry.
                <br />
                <br />
                If you have any questions about buying or selling property in
                Pakistan, our team of experienced professionals is here to help.
                Whether you need advice on property values, market trends, or
                financing options, we are always available to provide you with
                the information you need to make informed decisions.
                <br />
                <br />
                We value our clients and their satisfaction is our top priority.
                If you have any feedback or suggestions, please do not hesitate
                to reach out to us using the contact information provided on our
                website. We are always looking for ways to improve our services
                and enhance our clients' experience.
                <br />
                <br />
                Thank you for considering Mount Pakistan as your real estate
                partner. We look forward to hearing from you soon.
                <br />
                <br />
              </p>
              <p>
                Address: Office# 07, First Floor, Al Barkat Plaza, G-13/4,
                Islamabad <br />
                Email: mountpakistan@hotmail.com
                <br />
                Zahid Jalal: 0333-0333254
                <br />
                Waleed Ahmed : 0333-5255592
                <br />
                Imran Tanoli: 0333-7445553
                <br />
                Amir: 0333-9332854
              </p>
              <hr />
              <div className="d-flex justify-content-between col-3">
                <div>
                  <a
                    target="_blank"
                    href="http://Instagram.com/mountpakistanrealestate"
                  >
                    <img
                      src={insta}
                      style={{
                        width: "82px",
                        height: "48px",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/mountpakistanrealestate"
                  >
                    <img
                      src={facebook}
                      style={{
                        width: "90px",
                        height: "53px",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                </div>
                <div>
                  <a onClick={openWhatsAppChat}>
                    <img
                      src={whatsapp}
                      alt="whatsapp logo"
                      style={{
                        width: "70px",
                        height: "50px",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                </div>
              </div>
            </p>
          </section>
          <section
            className="col-md-5"
            style={{ background: "#f4f4f4", padding: "30px" }}
          >
            <div className="mb-3">
              <h3 className="text-info">HOW WE CAN HELP YOU?</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  aria-describedby="nameHelp"
                  placeholder="Name *"
                  required
                  style={styleOpacity}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Email Address *"
                  required
                  style={styleOpacity}
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Phone"
                  required
                  style={styleOpacity}
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Message *"
                  required
                  style={styleOpacity}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Message Sent!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>
                Thank you for contacting us. We will responde at our earliest
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>Directions</h3>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.257502068338!2d72.96905901454359!3d33.650489146243146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9615dd0cb5c5%3A0x3fb65fbf1227372d!2sPunjab%20Market!5e0!3m2!1sen!2s!4v1680035506894!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: "0px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
