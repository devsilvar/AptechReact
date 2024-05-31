import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../api/link';
import Loader from '../components/Loader';
const Details = () => {
  const { id } = useParams();
  const [Data, setData] = useState([]);
  const [isActive, setisActive] = useState(true);

  useEffect(() => {
    async function GenData() {
      try {
        let initData = await fetch(API_URL);
        let convData = await initData.json();
        console.log(convData.drinks);
        setData(convData.drinks);
        setisActive(false);
      } catch (err) {
        console.log(err);
      }
    }

    GenData();
  }, []);

  let filteredData = Data.filter((item) => item.idDrink == id);

  return (
    <section>
      {isActive == true ? (
        <Loader />
      ) : (
        <>
          <h2>More Details : {id}</h2>
          <img src={filteredData[0].strDrinkThumb} alt='' />
          <div className='detailss'>
            <div>
              <span className='badge text-bg-success fw-light fs-6 px-3 py-2'>
                {' '}
                vasvsaName{' '}
              </span>{' '}
              : sackaops
            </div>

            <div>
              <span className='badge text-bg-success fw-light fs-6 px-3 py-2'>
                Category{' '}
              </span>
              : viasnvoi
            </div>
            <div>
              <span className='badge text-bg-success fw-light fs-6 px-3 py-2'>
                Info{' '}
              </span>{' '}
              : iasnvcsaoiv
            </div>

            <div>
              <span className='badge text-bg-success fw-light fs-6 px-3 py-2'>
                Glass{' '}
              </span>
              : cvuadbvi
            </div>

            <div>
              <span className='badge text-bg-success fw-light fs-6 px-3 py-2'>
                Ingredients{' '}
              </span>{' '}
              : evinsadovi
            </div>

            <div>
              <span className='badge text-bg-success fw-light fs-6 px-3 py-2'>
                Instructions{' '}
              </span>{' '}
              : dsaivbdo
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Details;
