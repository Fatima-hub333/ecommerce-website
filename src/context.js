import React, { useContext, useState, useEffect } from "react";
import data from "./data";

//the context to use with the whle app
const AppContext = React.createContext();

const getLocalStorage = () => {
  let cartList = localStorage.getItem("cart");
  if (cartList) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const getwindowsDimension = () => {
  const { innerWidth: width } = window;
  return width;
};

const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [CartInfo, setCartInfo] = useState(getLocalStorage());

  const [getWidth, setGetWidth] = useState(getwindowsDimension);

  const [grandTotals, setgrandTotals] = useState({});

  const [isView, setIsView] = useState(false);

  //set navOpen to false if the screen is more than 768
  useEffect(() => {
    if (getWidth > 768 && isNavOpen === true) {
      setIsNavOpen(false);
    }
  }, [getWidth]);

  useEffect(() => {
    function handleResize() {
      setGetWidth(getwindowsDimension());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //clearing the cart
  const clearCart = () => {
    setCartInfo(() => {
      return setCartInfo([]);
    });
  };

  //changing quantity type
  const toggleQuantity = (slug, type) => {
    //loop through cart items
    let tempCart = CartInfo.map((cartItem) => {
      if (cartItem.slug === slug) {
        if (type === "INC") {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        if (type === "DEC") {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
      }
      return cartItem;
    }).filter((cartItem) => cartItem.quantity !== 0);
    return setCartInfo(tempCart);
  };

  //get data from data.js
  const getData = () => {
    let newData = data.map((item) => {
      return item;
    });
    return newData;
  };

  const getProduct = (slug) => {
    //initialise getData to tempProducts
    let tempProducts = [...getData()];

    //then find the objects that matches with just only the name
    const product = tempProducts.find((product) => product.slug === slug);

    //then return product
    return product;
  };

  //calcuating the grandTotal
  const grandTotal = () => {
    let vatAmount = parseFloat(getTotals() * 0.2).toFixed(2);
    let grandtotal = parseFloat(getTotals() + 50);

    return setgrandTotals({ vatAmount, grandtotal });
  };

  const getTotals = () => {
    let totals = CartInfo.reduce((total, cartItem) => {
      //the cartItem in this case will be current object mapping on
      const { price, quantity } = cartItem;
      const itemTotal = parseFloat((price * quantity).toFixed(2));

      //to add itemTotal togehter
      total += itemTotal;
      return total;
    }, 0);

    return totals;
  };

  useEffect(() => {
    //get values in the json data when the app is first loaded
    getData();
  }, []);

  //an useFfect to update localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(CartInfo));
    getTotals();
    grandTotal();
  }, [CartInfo]);

  return (
    <AppContext.Provider
      value={{
        isNavOpen,
        isCartOpen,
        isView,
        setIsView,
        setIsCartOpen,
        setIsNavOpen,
        getWidth,
        getProduct,
        CartInfo,
        setCartInfo,
        clearCart,
        toggleQuantity,
        getTotals,
        grandTotals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
