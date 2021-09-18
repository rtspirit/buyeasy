import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-utilities.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import {
  Home,
  TopDeals,
  DealOfTheday,
  TopBrands,
  ProductDescription,
  ShoppingCart,
  Login,
  SignUp,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/customStyles.css";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="bg">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/topdeals" component={TopDeals} />
            <Route exact path="/cart" component={ShoppingCart} />
            <Route exact path="/dealoftheday" component={DealOfTheday} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/topbrands" component={TopBrands} />
            <Route
              path="/description/:productID"
              component={ProductDescription}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
