import React, { useState } from "react";
import history from "../../session/history";

const SearchProduct = () => {
  const [keyword, setKeyword] = useState("");

  const SearchProductHandler = (e) => {
    // e.preventDefault();
    if (keyword.trim()) {
      history.push(`/Products/${keyword}`);
    } else {
      history.push(`/products`);
    }
  };

  return (
    <div>
      <form onSubmit={SearchProductHandler}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            // name="keyword"
          />
          <div className="input-group-append">
            <button type="submit" className="input-group-text bg-transparent text-primary">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchProduct;
