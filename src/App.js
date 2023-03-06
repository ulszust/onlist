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
function App() {
    return (
        <>
            <Navbar/>
            <div className={"sm:hidden"}><MobileMenu></MobileMenu></div>
            <Router>
                <Routes>
                    <Route element={<Home/>} exact path="/"/>
                    <Route element={<NewList/>} path="/add"/>
                    <Route element={<Search/>} path="/search"/>
                </Routes>
            </Router>

        </>
    );

}


export default App;
