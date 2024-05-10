import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './components/ProductDetail';
import Productlayout from './pages/Productlayout';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Productlayout />}>
          <Route index element={<Products />} />
          <Route path=':id' element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
