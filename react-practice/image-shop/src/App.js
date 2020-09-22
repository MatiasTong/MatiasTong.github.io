import React from 'react';
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Route, Switch } from "react-router-dom"
import './App.css';
import { Context } from './Context';

//https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Home Page</h1>

      <Switch>
          <Route exact path="/">
            <Photos />
          </Route>
        <Route path="/cart">
          <Cart />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
