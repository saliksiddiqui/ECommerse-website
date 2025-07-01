import React, { useEffect, useState } from "react";

const ProductPages = ({pageData}) => {
 const {setCurrentPage,currentPage,totalPages}=pageData;  

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageNumber = (e) => {
    const pageNumber = Number(e.target.dataset.page);
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pageNumberButtons">
      <button onClick={handlePrev} className="prevPage">
        Prev
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={handlePageNumber}
          className={`page${index + 1}`}
          data-page={index + 1}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={handleNext} className="nextPage">
        Next
      </button>
    </div>
  );
};

export default ProductPages;
