import "./App.css";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import Home from "./Home";
import AddProductsView from "./AddProductsView";
import Search from "./Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddList from "./AddList";
import ListView from "./ListView";
function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex-grow">
        <div className="pb-[100px]">
          <Router>
            <Routes>
              <Route element={<Home />} exact path="/" />
              <Route element={<AddList />} path="/list" />
              <Route element={<Search />} path="/search" />
              <Route
                element={<AddProductsView />}
                path="/list/:name/add-products"
              />
              <Route element={<ListView />} path="/list/:id" />
            </Routes>
          </Router>
        </div>
        <MobileMenu></MobileMenu>
      </div>
    </div>
  );
}

export default App;
