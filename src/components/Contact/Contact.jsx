import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-24">
      <div className="md:w-1/2 text-center md:text-left lg:ms-24">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">123 Main Street</p>
        <p className="text-lg mb-4">City, State 12345</p>
        <p className="text-lg mb-4">09909873234</p>
        <p className="text-lg mb-4">flavorLab@recipe.com</p>
      </div>
      <div className="md:w-1/2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjU1Mmfcx8usqAecc8NqsxzSSQvqMCeSBEIu-rXpxUlA&s" alt="Contact" className="rounded-full shadow-xl" />
      </div>
    </div>
  );
};

export default Contact;
