import './App.css';
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <div className={"sm:hidden"}><MobileMenu></MobileMenu></div>


        </>
    );

}


export default App;
