import { useEffect, useState } from 'react';
import { API_URL } from '../api/link';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const HomePage = () => {
  const [isActive, setisActive] = useState(true);
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function GenData() {
      try {
        let initData = await fetch(API_URL);
        let convData = await initData.json();
        console.log(convData.drinks);
        setisActive(false);
        setData(convData.drinks);
      } catch (err) {
        console.log(err);
      }
    }
    GenData();
  }, []);

  return (
    <section>
      <div className=' mt-5 text-center py-5 px-3'>
        <input type='text' className=' py-2' />
        <button className='btn btn-success py-2 px-5 ms-3'>Search</button>
      </div>
      <div className='container '>
        <div className='serchsection d-flex flex-wrap justify-content-center gap-3'>
          {isActive == true ? (
            <Loader />
          ) : (
            Data.map((item, index, arr) => {
              return (
                <div className='card w-25' key={item.idDrink}>
                  <img src={item.strDrinkThumb} className='img-fluid' alt='' />
                  <div className='p-4'>
                    <p className='fw-bold'>{item.strDrink}</p>
                    <p className='fw-lighter'>{item.strGlass}</p>
                    <p className='fw-light'>{item.strAlcoholic}</p>
                    <Link to={`/${item.idDrink}`}>
                      <button className='btn btn-success w-50 m-auto'>
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
