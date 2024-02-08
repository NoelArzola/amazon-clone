import React, { useEffect, useState } from "react";
import "./css/App.css";
import Header from "./js/components/Header";
import Home from "./js/components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./js/components/Checkout";
import Login from "./js/components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./js/components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./js/components/Orders";

const promise = loadStripe("pk_test_3e0ixkUM0GkeLQ44AxWTXESQ00jsrkAhFw");

function App() {
  const [{}, dispatch] = useStateValue();
  const [city, setCity] = useState<string | null>(null);
  const [stateName, setStateName] = useState<string | null>(null);

  useEffect(() => {
    // This will only run once when the app component loads...

    auth.onAuthStateChanged((authUser: any) => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        // The user was logged in / the user just logged in
        dispatch &&
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
      } else {
        // The user is logged out
        dispatch &&
          dispatch({
            type: "SET_USER",
            user: null,
          });
      }
    });
  }, []);

  const parseGeoData = (data: any) => {
    if (!data) return;
    setCity(data.city.name);
    setStateName(data.state.name);
  };

  const requestOptions: RequestInit = {
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
