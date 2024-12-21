import Home from "./pages/home/homePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductPage from "./pages/productPage/productPage";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/products" element={<>404</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
