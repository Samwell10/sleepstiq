
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import FAQs from './Pages/FAQs/Faqs';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/FAQs' element={<FAQs/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
