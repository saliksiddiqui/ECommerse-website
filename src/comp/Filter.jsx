import React, { useState } from "react";

const Filter = ({ pageData }) => {
  const { originalData, setCurrentPage, setProductData } = pageData;
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleClick = (e) => {
    const filterValue = e.target.dataset.filter;

    if (filterValue === "expensive") {
      const sortedExpensive = [...originalData].sort((a, b) => b.price - a.price);
      setProductData(sortedExpensive);
    } else if (filterValue === "cheapest") {
      const sortedCheapest = [...originalData].sort((a, b) => a.price - b.price);
      setProductData(sortedCheapest);
    }

    setCurrentPage(1);
    setOpen(false); 
  };

  return (
    <div className="filter">
      <button onClick={toggleDropdown} className="filterButton">
        Options
      </button>
      {open && (
        <div className="dropdownMenu">
          <button data-filter="expensive" onClick={handleClick}>
            Expensive
          </button>
          <button data-filter="cheapest" onClick={handleClick}>
            Cheapest
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
