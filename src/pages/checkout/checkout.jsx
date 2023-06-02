import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import emailjs from "emailjs-com";
import "./checkoutForm.css";

export const CheckoutForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary actions with the form data
    // For example, you could send the form data to a server for order processing

    // After processing the form, you can navigate to a success page or perform any other necessary actions
    // Here, we navigate back to the home page

    // // Send email using emailjs-com
    // const templateParams = {
    //   fullName,
    //   email,
    //   address,
    //   city,
    //   zipCode,
    // };

    // emailjs
    //   .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_USER_ID")
    //   .then((response) => {
    //     console.log("Email sent successfully!", response.text);
    //   })
    //   .catch((error) => {
    //     console.error("Error sending email:", error);
    //   });

    // After processing the form and sending the email, you can navigate to a success page or perform any other necessary actions
    // Here, we navigate back to the home page
    navigate("/thankyou");
  };

  return (
    <div className="checkout-form">
      <h1>Checkout Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Place Order
        </button>
      </form>
    </div>
  );
};

