import { useState } from "react";
import "./App.css";
import items from "./MenuData";
import Category from "./Category";
import Menu from "./Menu";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState([]);
  return (
    <>
      <section className="menu-section">
        <div className="title">
          <h2>MENU</h2>
          <div className="underline"></div>
        </div>
        <Category />
        <Menu items={items} />
      </section>
    </>
  );
}

export default App;
