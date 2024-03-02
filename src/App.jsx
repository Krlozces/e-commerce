import '@fortawesome/fontawesome-free/css/all.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Cart from './components/Cart';
import Product from './components/Product';
import { DataProvider } from './components/DataContext';
import GridSection from './components/GridSection';
function App() {

  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart"  element={<Cart />} />
              <Route path="/product/:nombreParam" element={<Product />} />
              <Route path='/shop/:nombreParam' element={<GridSection />} />
              {/* <Route path='/producto/:nombreParam' element={<Producto />}/> */}
            </Routes>
          </div>
        </BrowserRouter>
      </DataProvider>
    </>
  )
}

export default App
