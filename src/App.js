import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import queryString from "query-string";
import Header from "./components/header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Wishlist from "./components/Wishlist";
import AddToCart from "./components/AddToCart";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/filter" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/Addtocart" component={AddToCart} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
export default App;
