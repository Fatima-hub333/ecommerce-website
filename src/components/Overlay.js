import React from "react";
import { useGlobalContext } from "../context";

function Overlay() {
  const { isNavOpen, isCartOpen, isView } = useGlobalContext();
  return (
    <div
      className={`${
        isNavOpen || isCartOpen || isView ? "overlay overlay-active" : "overlay"
      }`}
    ></div>
  );
}

export default Overlay;
