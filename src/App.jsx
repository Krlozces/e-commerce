import '@fortawesome/fontawesome-free/css/all.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
function App() {

  return (
    <>
      <BrowserRouter>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path='/producto/:nombreParam' element={<Producto />}/> */}
          </Routes>
        </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
