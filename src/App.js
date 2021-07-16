import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import queryString from "query-string";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Wishlist from "./components/Wishlist";
import AddToCart from "./components/AddToCart";

import Checkout from "./components/Checkout";
function App(props) {
  console.log(props);
  return (
    <Router>
      <div className="App">
        {/* <h1>i am app compenent</h1>
      <p>my name is {props.myname}</p>
      <button
        onClick={() => {
          props.changeName();
        }}
      >
        change it
      </button> */}
        <Header />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/filter" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/Addtocart" component={AddToCart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     myname: state.name,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeName: () => {
//       dispatch(anotherName());
//     },
//   };
// };
export default App;
// connect(mapStateToProps, mapDispatchToProps)(App);
