import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./components/Products/ProductsPage/ProductsPage";
import Navbar from "./components/heder/Navbar";
import Footer from "./components/Footer/Footer";
import { Component } from "./Component";
import ProductInfo from "./components/Products/ProductInfo/ProductInfo";
import BaskeetHome from "./components/Basket/BasketHome/BaskeetHome";
import Checkout from "./components/Checkout/Checkout";
import Registir from "./components/Modal/Register/Registir";
import Login from "./components/Modal/Login/Login";
import { useState } from "react/cjs/react.development";
import Bottom from "./components/BottomMenyu/Bottom";
import ClickMenyu from "./components/BottomMenyu/ClickMenyo/ClickMeyu";


function App() {
  const [add2, setadd2] = useState(false);
  const menbar2 = () => {
    setadd2((s) => !s);
  };
  const [add, setadd] = useState(false);
  const menbar = () => {
    setadd((s) => !s);
  };

  const [registerBtn, setregistrBtn] = useState(false);
  const chengBtn = () => {
    setregistrBtn((q) => !q);
    setClickMe((p) => !p);
  };

  const chengBtn2 = () => {
    setOnClickMe(false);
    setregistrBtn((q) => !q);
  };

  const [clickMe, setClickMe] = useState(false);
  const clickHandler = () => {
    setClickMe((p) => !p);
  };
  const [onClickMe, setOnClickMe] = useState(false);
  const loginFunction = () => {
    setClickMe((p) => !p);
    setOnClickMe((a) => !a);
  };

  const loginFunction2 = () => {
    setOnClickMe(false);
  };

  return (
    <BrowserRouter>
      <div>
        <Registir
          clickMe={clickMe}
          clickHandler={clickHandler}
          login={loginFunction}
          chengBtn={chengBtn}
        />
        <Login
          onClickMe={onClickMe}
          loginFunction2={loginFunction2}
          chengBtn2={chengBtn2}
          onClickMe={onClickMe}
        />
        <Navbar registerBtn={registerBtn} clickHandler={clickHandler} />
        <ClickMenyu add={add} menbar={menbar} />
        <Routes>
          <Route
            path="/"
            element={
              <Component
                clickHandler={clickHandler}
                registerBtn={registerBtn}
              />
            }
          />
          <Route
            path="/products"
            element={
              <ProductsPage
                menbar2={menbar2}
                add2={add2}
              />
            }
          />
          <Route path="/:id" element={<ProductInfo  />} />
          <Route path="/products_all" element={<ProductsPage  />} />
          <Route path="/basket" element={<BaskeetHome />} />
          <Route path="/check" element={<Checkout />} />
        </Routes>
        <Bottom
          clickHandler={clickHandler}
          registerBtn={registerBtn}
          menbar={menbar}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
