import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from './components/ProductPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';




function App() {

  const productList = [{
    id: "1",
    name: "Surgical Mask",
    price: "5$",
    quantity: "24pcs"
  },
  {
    id: "1",
    name: "Surgical Scissors",
    price: "2$",
    quantity: "1pc"
  }, 
  {
    id: "1",
    name: "Surgical Gloves",
    price: "10$",
    quantity: "30pcs"
  }
  ]

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products"  element={<ProductPage productList={productList} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
