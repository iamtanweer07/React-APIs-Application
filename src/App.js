import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Post from './Components/Post';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Post" element={<Post/>} />
        </Routes>
        </BrowserRouter>
        

    </div>
  );
}

export default App;
