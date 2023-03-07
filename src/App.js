import './App.css';
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import Home from "./Home";
import NewList from "./NewList";
import Search from "./Search";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import AddList from "./AddList";
function App() {
    return (
        <>
            <Navbar/>
            <div className={"sm:hidden"}><MobileMenu></MobileMenu></div>
            <Router>
                <Routes>
                    <Route element={<Home/>} exact path="/"/>
                    <Route element={<AddList/>} path="/add"/>
                    <Route element={<Search/>} path="/search"/>
                    <Route element={<NewList/>} path="/add/newlist"/>
                </Routes>
            </Router>

        </>
    );

}


export default App;
