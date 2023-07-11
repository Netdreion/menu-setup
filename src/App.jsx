import { useState } from "react";
import "./App.css";
import items from "./MenuData";
import Category from "./Category";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState([allCategories]);

  const filteredItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
    }
    const newItems = items.map((item) => item.category === category);
    setCategory(newItems);
  };
  return (
    <>
      <section className="menu-section">
        <div className="title">
          <h2>MENU</h2>
          <div className="underline"></div>
        </div>
        <Category categories={categories} filteredItems={filteredItems} />
        <Menu items={items} />
      </section>
    </>
  );
}

export default App;
