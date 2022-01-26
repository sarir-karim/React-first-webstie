import './App.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Hero from './Pages/Hero';
import About from './Pages/About';
import WhyUs from './Pages/WhyUs';
import Specials from './Pages/Specials';
import Event from './Pages/Event';
import BookTable from './Pages/BookTable';
import Gallery from './Pages/Gallery';
import MenuMain from './Pages/Menu/MenuMain';
import Chefs from './Pages/Chefs';
import Testimonail from './Pages/Testimonil'
function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar/>
          <Hero/>
          <About/>
          <WhyUs/>
          <MenuMain/>
          <Specials/>
          <Event/>
          <BookTable/>
          <Gallery/>
          <Chefs/>
          <Testimonail/>
        </Router>
    </div>
    </>
  );
}

export default App;
