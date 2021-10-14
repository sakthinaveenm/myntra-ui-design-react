import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import { deals, bdeals, categories } from "./consants/data";
import Categories from "./components/Categories";
import React, { useState } from "react";
import Rightpopup from "./components/Rightpopup";

function App() {
  return (
    <div>
      <Navbar />
      <Rightpopup />
      <Carousel />
      <Title title="Deals of the day" />
      <Card data={deals} />
      <Title title="Biggest Deals on Top Brands" />
      <Card data={bdeals} />
      <Title title="categories to bag" />
      <Card data={categories} />
      <Title title="Explore top brands" />
      <Card data={deals} />
    </div>
  );
}

export default App;
