import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./composants/Header/Header";
import HomePage from "./Pages/HomhPage/HomePage";
import PageDetailProduit from "./Pages/PageDetailProduit/PageDetailProduit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<PageDetailProduit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
