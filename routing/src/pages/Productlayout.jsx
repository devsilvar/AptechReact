import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { productData } from '../utils/data';

const Productlayout = () => {
  const [Datas, setDatas] = useState(productData);

  const goToDetails = (index) => {
    console.log(index);
  };
  return (
    <>
      <div className='d-flex gap-3 justify-content-center my-5'>
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
      <Outlet />
    </>
  );
};

export default Productlayout;
