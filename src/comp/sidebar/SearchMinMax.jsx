import React, { useEffect, useState } from "react";

const SearchMinMax = ({ pageData }) => {
  const { setCurrentPage, originalData, setProductData } = pageData;
  const [inputValue, setInputValue] = useState("");
  const [min, setmin] = useState("");
  const [max, setmax] = useState("");
  const [selectedCtg, setSelectedCtg] = useState("");

  const handleChange = (e) => {
    setCurrentPage(1);
    let text = e.target.value;
    if (e.target.Dataset.type == "title") {
      setInputValue(text);
      setProductData(
        [...originalData].filter((item) => {
          return item.title.toLowerCase().includes(text.toLowerCase());
        })
      );
    }
    if (e.target.Dataset.type == "min") {
      setmin(text);
      setProductData(
        originalData.filter((item) => {
          return item.price > text;
        })
      );
    }
    if (e.target.Dataset.type == "max") {
      setmax(text);
      setProductData(
        originalData.filter((item) => {
          return item.price < text;
        })
      );
    }
  };
  useEffect(()=>{
    setCurrentPage(1);
  },[inputValue,min,max,selectedCtg])

  const handleChangeCtg = (e) => {
    let val = e.target.value;
    setSelectedCtg(val);
    console.log("originalData:", originalData);
    console.log("Selected category:", val);
    setProductData(
      originalData.filter((item) => {
        return item.category === val;
      })
    );
  };

  const handleClick = () => {
    setProductData(originalData);
    setInputValue("");
    setmin("");
    setmax("");
    setSelectedCtg("");
  };

  return (
    <>
      <div className="sideBar">
        <label className="Categoryinput">PRODUCT NAME:</label>
        <input
          type="text"
          onChange={handleChange}
          data-type="title"
          value={inputValue}
        />
        <br />
        <label className="minInput">min:</label>
        <input
          type="number"
          onChange={handleChange}
          data-type="min"
          value={min}
        />
        <label className="minInput">max:</label>
        <input
          type="number"
          onChange={handleChange}
          data-type="max"
          value={max}
        />
        <br />
        <div>
          <label>
            <input
              type="radio"
              onChange={handleChangeCtg}
              checked={selectedCtg == "men's clothing"}
              name="category"
              id="men's clothing"
              value="men's clothing"
            />
            Men clothing
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={handleChangeCtg}
              checked={selectedCtg == "jewelery"}
              name="category"
              id="jewelery"
              value="jewelery"
            />
            Jewelery
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={handleChangeCtg}
              checked={selectedCtg == "electronics"}
              name="category"
              id="electronics"
              value="electronics"
            />
            Electronics
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={handleChangeCtg}
              checked={selectedCtg == "women's clothing"}
              name="category"
              id="women's clothing"
              value="women's clothing"
            />
            Women Clothing
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={handleChangeCtg}
              checked={selectedCtg == "home & kitchen"}
              name="category"
              id="home & kitchen"
              value="home & kitchen"
            />
            Home & kitchen
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={handleChangeCtg}
              checked={selectedCtg == "sports & outdoors"}
              name="category"
              id="sports & outdoors"
              value="sports & outdoors"
            />
            Sport & outdoors
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={handleChangeCtg}
              checked={selectedCtg == "beauty"}
              name="category"
              id="beauty"
              value="beauty"
            />
            Beauty
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={handleChangeCtg}
              checked={selectedCtg == "footwear"}
              name="category"
              id="footwear"
              value="footwear"
            />
            Footwear
          </label>
          <br />
        </div>
        <button className="clear" onClick={handleClick}>
          Clear
        </button>
      </div>
    </>
  );
};

export default SearchMinMax;
