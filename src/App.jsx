import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/cards/JobCard";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  console.log(store.default);
  return (
    <>
      <Provider store={store.default}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
