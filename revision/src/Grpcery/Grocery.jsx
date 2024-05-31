import { useState, useRef } from 'react';
const Grocery = () => {
  const [task, settask] = useState('');
  const [taskupdate, settaskupdate] = useState('');
  const [goroceries, setgoroceries] = useState([]);
  const [editState, seteditState] = useState({ id: '', state: false });
  const uid = useRef(0);
  const editId = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    uid.current = uid.current + 1;
    const currentGrocery = { id: uid.current, task: task };
    setgoroceries((prev) => [...prev, currentGrocery]);
    reset();
  };

  const Remove = (id) => {
    let filteredData = goroceries.filter((item) => {
      return item.id != id;
    });
    setgoroceries(filteredData);
  };

  const Edit = (id) => {
    editId.current = id;
    let filteredData = goroceries.filter((item) => item.id == id);
    console.log(filteredData);
    if (filteredData[0].id == id) {
      seteditState((prev) => ({ ...prev, id: id, state: true }));
    }
  };

  const update = (id) => {};

  const reset = () => {
    settask('');
  };
  return (
    <>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          id='task'
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
        <button type='submit'>Add task</button>
      </form>

      {goroceries.map((item) => (
        <div
          className='bg-warning p-3 d-flex gap-2 justify-content-between w-50 mb-2'
          key={item.id}
        >
          {editState.state == true && editState.id == item.id ? (
            <input
              type='text'
              id='task'
              value={taskupdate}
              onChange={(e) => settaskupdate(e.target.value)}
            />
          ) : (
            item.task
          )}

          <div>
            {editState.state == true && editState.id == item.id ? (
              <>
                <button onClick={update(item.id)}>Update</button>
              </>
              
            ) : (
              <>
                <button onClick={() => Remove(item.id)}>Delete</button>
                <button onClick={() => Edit(item.id)}>Edit</button>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Grocery;
