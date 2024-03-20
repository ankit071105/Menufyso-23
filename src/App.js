import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import About from "./Components/About";
import "../src/Styles/app.scss"
import { Items } from "./Components/Items";
import { Toaster } from "react-hot-toast";
function App() {
  return (
   <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/items" element={<Items/>}/>  
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Toaster/>
      <Footer/>
    </Router>
   </>
  );
}

export default App;
