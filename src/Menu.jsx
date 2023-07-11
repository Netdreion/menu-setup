import { useState } from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, img, title, price, desc } = item;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <img src={img} />
            <h5>{price}</h5>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
