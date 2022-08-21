import React from "react";
import { NavBar, Footer } from "../blocks";

const GuestLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eos
        itaque praesentium, quis maxime sit vel ut laudantium error iusto,
        sequi, nesciunt eum numquam iure. Debitis ipsa natus saepe blanditiis?
      </p>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default GuestLayout;
