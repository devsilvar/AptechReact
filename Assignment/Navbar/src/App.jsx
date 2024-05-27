import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Profile from './pages/Profile';
import Project from './pages/Project';

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route element={<Homepage />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Profile />} path='/profile' />
        <Route element={<Project />} path='/project' />
      </Routes>
    </section>
  );
}

export default App;
