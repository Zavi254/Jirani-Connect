import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import data from "../data/data.json";
import emailIcon from "/assets/images/waitlist/waitlist-email-icon.svg";

import Popup from "./Popup";

const WaitListForm = ({ className }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);
  const handleOpenThankYou = () => setIsThankYouOpen(true);
  const handleCloseThankYou = () => setIsThankYouOpen(false);

  const { form } = data.heroSection;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Email added Successfully");
        setEmail("");
        setIsFormOpen(false);
        setIsThankYouOpen(true);
      } else {
        toast.error(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(`Error: ${error}`);
      toast.error("Something went wrong. Please try again");
    }
    setLoading(false);
  };
  return (
    <div>
      <button onClick={handleOpenForm} className={className} disabled={loading}>
        Join Waitlist
      </button>
      <Popup isOpen={isFormOpen} onClose={handleCloseForm}>
        <img src={emailIcon} alt="" className="waitlist_email_icon" />
        <h2 className="join-waitlist-headline">
          Join the Waitlist for Early Access
        </h2>
        <p className="join-waitlist-description">
          Be the first to experience Jirani Connect, our upcoming local
          eCommerce platform for Hakika Estate. Enter your email below to join
          our waitlist and receive exclusive updates.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={form.emailPlaceholder}
              className="email-input"
              required
            />
            <button type="submit" className="join-waitlist-hero-button">
              {loading ? "Submitting..." : `${form.buttonText}`}
            </button>
          </div>
        </form>
      </Popup>

      <Popup isOpen={isThankYouOpen} onClose={handleCloseThankYou}>
        <h2>Thank You!</h2>
        <p>
          Thank you for joining the waitlist! We'll notify you once the first
          version of the product is available
        </p>
      </Popup>
    </div>
  );
};

export default WaitListForm;
