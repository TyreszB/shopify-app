import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <Routes>
          <Route path="/products/:handle" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
