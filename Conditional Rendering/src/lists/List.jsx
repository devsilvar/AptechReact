import { HouseData, studentNames } from '../Fakedata';

const List = () => {
  return (
    <>
      <ol>
        {studentNames.map((item, index, arr) => (
          <li key={index}> {item}</li>
        ))}
      </ol>

      <section className='d-flex flex-wrap gap-4'>
        {HouseData.map((item, index) => (
          <div key={item.id} className='house w-25 p-4'>
            <img className='img-fluid' src={item.img} alt='' />
            <h3>{item.title}</h3>
            <h2>Price : {item.price}</h2>
            <sub>Bedroom : {item.bedroom}</sub>
            <p>{item.address}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default List;
