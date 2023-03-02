import './App.css';
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import Home from "./Home";
import NewList from "./NewList";
import Search from "./Search";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
function App() {
    return (
        <>
            <Router>
            <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/add">
                        <NewList/>
                    </Route>
                    <Route exact patch="/search">
                    <Search/>
                    </Route>
                </Switch>
            <div className={"sm:hidden"}><MobileMenu></MobileMenu></div>

            </Router>
        </>
    );

}


export default App;
