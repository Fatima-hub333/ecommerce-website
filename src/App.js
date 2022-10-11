import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Overlay from "./components/Overlay";
import { Route, Switch } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct/SingleProducts";
import EarPhone from "./pages/EarPhone";
import HeadPhone from "./pages/HeadPhone";
import Speaker from "./pages/Speaker";
import Error from "./components/Error";
import ScrollToTop from "./ScrollToTop";
import Checkout from "./pages/CheckOut/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Overlay />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/speakers" component={Speaker} />
        <Route exact path="/speakers/:slug" component={SingleProduct} />
        <Route exact path="/earphones" component={EarPhone} />
        <Route exact path="/earphones/:slug" component={SingleProduct} />
        <Route exact path="/headphones" component={HeadPhone} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/headphones/:slug" component={SingleProduct} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
