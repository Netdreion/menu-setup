import { useState } from "react";

const Category = ({ categories, filteredItems }) => {
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <button onClick={filteredItems} key={index}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
