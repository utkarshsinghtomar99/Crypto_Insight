import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CoinDetails from "./pages/CoinDetails";
import SearchedCoin from "./pages/SearchedCoin";

const App = () =>
{
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/coin/:id' element={<CoinDetails />} />
        <Route path='/search/:searchTerm' element={<SearchedCoin />} />
      </Routes>
    </Router>
  )
}

export default App