import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


import CustomerLayout from "~/layouts/CustomerLayout";
import Menu from "./pages/Menu";

function App() {
  return (
    <CustomerLayout>
      <Menu />
    </CustomerLayout>
  );
}

export default App;
