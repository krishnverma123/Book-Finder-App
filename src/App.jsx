// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import { FavoritesProvider } from "./context/FavoritesContext";
function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </div>
        </div>
      </Router>
    </FavoritesProvider>
  );
}


export default App;
