
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import About from './pages/About';
import Shopping from './pages/Shopping';
import Home from './pages/Home';
import { Route, Routes} from 'react-router-dom'
import Reviews from './pages/Review';

function App() {
  
  return (
    <div className="App">
      
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/about" element={<About/> }/>
          <Route path="/shopping" element={<Shopping/> }/>
          <Route path="/review" element={<Reviews/> }/>

        </Routes>
      </div>
      <Footer/>
      
    
    </div>
  );
}

export default App;
