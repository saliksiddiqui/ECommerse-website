import React, { useState } from "react";

const Filter = ({ pageData }) => {
  const { originalData,  setCurrentPage, setProductData} = pageData;

  const handleClick = (e) => {
  const filterValue = e.target.Dataset.filter;
  
  if (filterValue === "expensive") {
    const sortedExpensive =[...originalData].sort((a, b) => b.price - a.price);
    setProductData(sortedExpensive);
  } else {
    const sortedCheapest = [...originalData].sort((a, b) => a.price - b.price);
    setProductData(sortedCheapest);
  }

  setCurrentPage(1);
};

  const [open, setOpen] = useState(false);
  const toggleDropdown = () =>{
     setOpen(!open);
  }

  return (
    <>
      <div className="filter">
      <button onClick={toggleDropdown} className="filterButton">
        Options
      </button>
      {open && (
        <div className="absolute mt-2 bg-white border rounded shadow">
          <button className="expensive" data-filter="expensive" onClick={handleClick}>Expensive</button>
          <button className="cheapest" data-filter="cheapest" onClick={handleClick}>Cheapest</button>
        </div>
       )}
    </div>
    </>
  );
};

export default Filter;
