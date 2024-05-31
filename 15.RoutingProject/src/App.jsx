import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import UserProfile from './components/UserProfile';
import SearchUser from './components/SearchUser';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/user/:username' element={<UserProfile />} />
          <Route path='/search' element={<SearchUser />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
