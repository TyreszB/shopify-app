import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import { Switch } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Routes>
            <Route path="/products/:handle" element={<ProductPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
