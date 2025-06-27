import React from "react";
import Get from "../components/contact/Get";
import ContactForm from "../components/contact/ContactForm1"; // ✅ fixed

const Contactes = () => {
  return (
    <div>
      <Get />
      <ContactForm />
    </div>
  );
};

export default Contactes;
