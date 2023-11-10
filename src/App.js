import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe("pk_test_3e0ixkUM0GkeLQ44AxWTXESQ00jsrkAhFw");

function App() {
  const [{}, dispatch] = useStateValue();
  const [city, setCity] = useState(null);
  const [stateName, setStateName] = useState(null);

  useEffect(() => {
    // This will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        // The user was logged in / the user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const parseGeoData = (data) => {
    if (!data) return;
    setCity(data.city.name);
    setStateName(data.state.name);
  };

  const requestOptions = {
    method: "GET",
  };

  const geoData = async () => {
    const data = await fetch(
      "https://api.geoapify.com/v1/ipinfo?&apiKey=583e8c60a9ca4bbbaaee312a3054cce9",
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));

    parseGeoData(data);
  };

  geoData();

  return (
    // BEM
    <Router>
      <div className="app">
        <Header city={city} stateName={stateName} />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
