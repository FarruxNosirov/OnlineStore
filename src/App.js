import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./components/Products/ProductsPage/ProductsPage";
import Header from "./components/heder/navbar";
import Footer from "./components/Footer/Footer";
import { Component } from "./Component";
import ProductInfo from "./components/Products/ProductInfo/ProductInfo";
import BaskeetHome from "./components/Basket/BasketHome/BaskeetHome";
import Checkout from "./components/Checkout/Checkout";
import { createContext, useReducer } from "react";
import Registir from "./components/Modal/Register/Registir";
import Login from "./components/Modal/Login/Login";
import { useState } from "react/cjs/react.development";
let Data = [
  {
    id: 1,
    name: "6 Fresh & Tasty Eggs",
    red_money: "£72.00",
    black_money: "£60",
    img_url: "/products/6 Fresh and Tasty Eggs.png",
  },
  {
    id: 2,
    name: "7up Cherry",
    red_money: "£72.00",
    black_money: "£5.00",
    img_url: "/products/7up Cherry.png",
  },
  {
    id: 3,
    name: "Anchor Butter",
    red_money: "£72.00",
    black_money: "£60.00",
    img_url: "/products/Anchor Butter.png",
  },
  {
    id: 4,
    name: "Butterkist Salted",
    red_money: "£72.00",
    black_money: "£60.00",
    img_url: "/products/Butterkist Salted.png",
  },
  {
    id: 5,
    name: "Desi Yogurt",
    red_money: "£72.00",
    black_money: "£60.00",
    img_url: "/products/Desi Yogurt.png",
  },
  {
    id: 6,
    name: "KTC Coconut Milk",
    red_money: "£72.00",
    black_money: "£60.00",
    img_url: "/products/KTC Coconut Milk.png",
  },
  {
    id: 7,
    name: "Asya Cocktail",
    red_money: "£72.00",
    black_money: "£60.00",
    img_url: "/products/Asya Cocktail.png",
  },
  {
    id: 8,
    name: "Happy Cow Cheeze",
    red_money: "£72.00",
    black_money: "£60.00",
    img_url: "/products/Happy Cow Cheeze.png",
  },
];

const defaultState = {
  basket: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD_CARD": {
      return {
        ...state,
        basket: state.basket + Number(action.payload.money.replace(/\D/, "")),
      };
    }
    default:
      return state;
  }
}
export const AppContext = createContext(null);
function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const [clickMe, setClickMe] = useState(false);
  const clickHandler = () => {
    setClickMe((p) => !p);
  };
  const [onClickMe, setOnClickMe] = useState(false);
  const loginFunction = () => {
    setOnClickMe((a) => !a);
    setClickMe((p) => !p);
  };
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div>
          <Registir
            clickMe={clickMe}
            clickHandler={clickHandler}
            login={loginFunction}
          />
          <Login onClickMe={onClickMe} loginFunction={loginFunction} />
          <Header clickHandler={clickHandler} />
          <Routes>
            <Route path="/" element={<Component Data={Data} />} />
            <Route path="/products" element={<ProductsPage Data={Data} />} />
            <Route path="/:id" element={<ProductInfo Data={Data} />} />
            <Route
              path="/products_all"
              element={<ProductsPage Data={Data} />}
            />
            <Route path="/basket" element={<BaskeetHome />} />
            <Route path="/check" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
