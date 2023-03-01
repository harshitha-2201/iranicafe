import { BrowserRouter , Route ,Routes, } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Features from './components/Features';
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
  return (
    
    <BrowserRouter>
    
      <Navbar/>
      <Routes>
      
       <Route exact path="/"  element = {<Home />}/>
        <Route  exact path = '/about' element = {<About/>}/>
        <Route exact path = '/features'  element = {<Features/>}/>
        <Route exact path = '/service'  element = {<Service/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
