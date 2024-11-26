import React from "react";

import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GetAllCarts from "./GetAllCarts";
import UpdateCardDetails from "./UpdateCardDetails";
import AddUser from "./AddUser";
import CreateNewProduct from "./CreateNewProduct";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/all-product" element={<GetAllCarts />} />
          <Route path="/add-product" element={<CreateNewProduct />} />
          <Route path="/updateProduct" element={<UpdateCardDetails />} />
          <Route path="/deleteProduct" element={<span>Update-product</span>} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/update-product/:id" element={<UpdateCardDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
