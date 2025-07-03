import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Home/Home'
import Shop from './Components/shop/Shop'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
