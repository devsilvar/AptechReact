import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export let productData = [
  { id: '1', name: 'Rice', price: 'N2000' },
  { id: '2', name: 'Beans', price: 'N2000' },
  { id: '3', name: 'Yam', price: 'N2000' },
  { id: '4', name: 'Shawa', price: 'N2000' },
  { id: '5', name: 'Ponmo', price: 'N2000' },
  { id: '6', name: 'Fuku', price: 'N2000' },
];
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
