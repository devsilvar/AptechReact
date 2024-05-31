import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../utils/data';
import { useTheme } from '../Context/DarkModeContext';

const Products = () => {
  const [Datas, setDatas] = useState(productData);
  const { mode, toggleMode } = useTheme();

  const goToDetails = (index) => {
    console.log(index);
  };
  return (
    <div className='d-flex gap-3 justify-content-center my-5'>
      <button onClick={toggleMode}>Click Button</button>

      {Datas.map((item) => {
        return (
          <>
            <div className='box' key={item.id}>
              <h3>{item.name} </h3>
              <h5>{item.price}</h5>
              <Link to={`/products/${item.id}`}>
                <button onClick={goToDetails(item.id)}>Buy Products</button>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Products;
