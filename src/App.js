
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Aboutme from './pages/Aboutme';
import Abouttc from './pages/Abouttc';
import Aboutntc from './pages/Aboutntc';

function App() {
  return (
    <div className="App">
      <h1>Apps</h1>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route  path='about' element={<About/>}>
          <Route index element={<Aboutme/>}></Route>
          <Route path='/abouttc' element={<Abouttc/>}></Route>
          <Route path='/aboutntc' element={<Aboutntc/>}></Route>
        </Route>
        <Route path='services' element={<Services/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
