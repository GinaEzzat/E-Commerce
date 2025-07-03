import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
