import React, { useState } from "react";
import "./Categories.css";

const categories = [
  "Apps & Games",
  "Arts, Crafts & Sewing",
  "Automotive & Motorcycle",
  "Baby",
  "Beauty & Personal Care",
  "Books",
  "Computers",
  "Electronics",
  "Fashion",
  "Gift Cards",
  "Grocery & Gourmet Food",
  "Health, Household & Baby Care",
  "Home & Business Services",
  "Home & Kitchen",
  "Industrial & Scientific",
  "Just for Prime",
  "Luggage",
  "Movies & TV",
  "Musical Instruments",
  "Office Products",
  "Pet Supplies",
  "Premium Beauty",
  "Smart Home",
  "Sports & Outdoors",
  "Tools & Home Improvement",
  "Toys & Games",
  "Video Games",
  "All",
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className='dropdown-container'>
      <button className='dropdown-toggle' onClick={() => setIsOpen(!isOpen)}>
        {selectedCategory}{" "}
        <span className={`arrow ${isOpen ? "up" : "down"}`} />
      </button>
      {isOpen && (
        <div className='dropdown-menu'>
          {categories.map((category) => (
            <button
              key={category}
              className={`dropdown-item ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleSelect(category)}>
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;