import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Booklist from './pages/Booklist';
import Book from './pages/Book';
import Newbook from './pages/Newbook';
import Notfound from './pages/Notfound';
import Booklayout from './pages/Booklayout';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            {' '}
            <Link to='/'> Home </Link>
          </li>
          <li>
            {' '}
            <Link to='/books'> Books </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Booklayout />}>
          <Route index element={<Booklist />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<Newbook />} />
        </Route>

        {/* <Route path='/books' element={<Booklist />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/new' element={<Newbook />} /> */}
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
