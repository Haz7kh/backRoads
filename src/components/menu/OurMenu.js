import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "../../data";
import Title from "../Title";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function OurMenu() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section" id="menu">
        <div className="title">
          <Title title="Our" subTitle="menu" />
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default OurMenu;
