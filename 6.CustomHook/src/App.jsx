import { useEffect } from 'react';
import './App.css';
import { BASE_URL } from './api/api';
import Products from './Products';
import UseCustom from './custom/UseCustom';
import Jordan from './Jordan';
function App() {
  let { products, loading } = UseCustom(`${BASE_URL}/users`);
  console.log(products);
  return <Jordan />;
}

export default App;
