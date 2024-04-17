import './App.css';
import About from './components/about/About';
import Carousel from './components/carousel/Carousel';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
