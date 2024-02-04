import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
