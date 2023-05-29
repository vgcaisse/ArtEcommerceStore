import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./thankYou.css";

export const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);

  return (
    <div className="thank-you">
      <h1>Thank You for Your Business!</h1>
      <p>Your order has been successfully placed.</p>
      <p>You will be redirected to the home page in {countdown} seconds...</p>
    </div>
  );
};
