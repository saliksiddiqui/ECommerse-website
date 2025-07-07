import React, { useState, useEffect } from "react";
import products from "./Products";
import "../App.css";
import ProductPages from "./ProductPages";
import Filter from "./Filter";
import SearchMinMax from "./sidebar/SearchMinMax";

const Home = () => {
  const [originalData] = useState(products);
  const [productData, setProductData] = useState(products);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productPerPage =8;
  const totalPages = Math.ceil(productData.length / productPerPage);
  const indexLastProduct = currentPage * productPerPage;
  const indexFirstProduct = indexLastProduct - productPerPage;
  const sliced = productData.slice(indexFirstProduct, indexLastProduct);

  const pageData = {
    originalData,
    productData,
    setProductData,
    currentProducts,
    setCurrentProducts,
    currentPage,
    setCurrentPage,
    totalPages,
    indexFirstProduct,
    indexLastProduct,
    sliced,
  };
  useEffect(() => {
    setCurrentProducts(sliced);
  }, [currentPage, productData, setCurrentProducts]);
  return (
    <>
      <div className="mainContainer">
        {/* sidebar */}
        <div className="sidebar_box">
          <SearchMinMax pageData={pageData} />
          <br />
        </div>

        <div className="contentArea">
          {/* filter */}
          <div className="filter">
            <Filter pageData={pageData} />
          </div>

          {/* products */}
          <div className="products">
            {currentProducts.map((item) => (
              <div className="items" key={item.id}>
                <img src={item.image} alt={item.title} className="productImg" />
                <h3 className="name">{item.title}</h3>
                <p className="description">{item.description}</p>
                <div className="price">₹{item.price}</div>
              </div>
            ))}
          </div>

          {/* pagination */}
          <div className="pagination">
            <ProductPages pageData={pageData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
