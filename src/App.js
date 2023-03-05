import React from "react";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import { useSelector, useDispatch } from "react-redux";
import useApi from "./hooks/useApi";
import { setCategories } from "./redux/actions/category-actions";
import CategoryDetails from "./pages/category-details";


function App() {
  const { categoryState } = useSelector((state) => state);
  const api = useApi();
  const dispactch = useDispatch();

  if (categoryState.initialized === false) {
    const params = { page: 1, itemsPerPage: 30 };
    api.get("shop/taxons", { params }).then((res) => {
      console.log(res);
      dispactch(setCategories(res.data));
    });
  }

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Index />} />
        <Route path="category/:category_code" element={<CategoryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
