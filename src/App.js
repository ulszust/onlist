import "./App.css";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import Home from "./Home";
import AddProducts from "./AddProducts";
import Search from "./Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddList from "./AddList";
import ListView from "./ListView";
function App() {
  return (
    <>
      <Navbar />
      <div className={"sm:hidden"}>
        <MobileMenu></MobileMenu>
      </div>
      <Router>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<AddList />} path="/list" />
          <Route element={<Search />} path="/search" />
          <Route element={<AddProducts />} path="/list/:name/add-products" />
          <Route element={<ListView />} path="/list/:id" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
