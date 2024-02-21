import '@fortawesome/fontawesome-free/css/all.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Cart from './components/Cart';
function App() {

  return (
    <>
      <BrowserRouter>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart"  element={<Cart />} />
            {/* <Route path='/producto/:nombreParam' element={<Producto />}/> */}
          </Routes>
        </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
