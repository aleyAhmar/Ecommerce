import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ProductPage from './components/ProductPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';




function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
