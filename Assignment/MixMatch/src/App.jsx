import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import NewsLetter from './pages/NewsLetter';
import ErrorPage from './pages/ErrorPage';
import Details from './pages/Details';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/newsletter' element={<NewsLetter />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/:id' element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
