import { useState, useRef } from 'react';
const Todolist = () => {
  const [todos, settodos] = useState([]);
  const [getInputValue, setgetInputValue] = useState('');
  const [updateState, setupdateState] = useState(false);
  const countTodo = useRef(null);
  const todoIndex = useRef(null);

  function handleInput(e) {
    setgetInputValue(e.target.value);
  }

  function resetForm() {
    setgetInputValue('');
  }

  function storeTodo(e) {
    e.preventDefault();
    countTodo.current++;
    let currentTodo = { id: countTodo.current, task: getInputValue };
    settodos([...todos, currentTodo]);
    resetForm();
    console.log(todos);
  }

  function deleteTodo(index) {
    let newTodo = todos.filter((item) => {
      return item.id != index;
    });
    settodos(newTodo);
    console.log(todos);
  }

  function editTodo(index) {
    console.log(index);
    //get the todo

    let selectedTodo = todos.filter((item) => {
      return item.id == index;
    });

    console.log(selectedTodo);
    setgetInputValue(selectedTodo[0].task);
    setupdateState(!updateState);
    todoIndex.current = index;
  }

  function updateTodo(e) {
    e.preventDefault();

    console.log(todoIndex.current);
    let updatedTodo = todos.map((item) => {
      if (item.id == todoIndex.current) {
        return { ...item, task: getInputValue };
      }
      return item;
    });
    settodos(updatedTodo);
    setupdateState(false);
    resetForm();
  }

  return (
    <section>
      <form>
        <input
          type='text'
          name=''
          id=''
          value={getInputValue}
          onChange={handleInput}
        />
        {updateState ? (
          <button onClick={updateTodo}>Update Todo</button>
        ) : (
          <button onClick={storeTodo}>Add Todo</button>
        )}
      </form>
      <ol>
        {todos.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                marginBottom: '10px',
                padding: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '300px',
                backgroundColor: 'lightgreen',
              }}
            >
              {item.task}
              <span>
                <button onClick={() => deleteTodo(item.id)}>Delete</button>{' '}
                <button onClick={() => editTodo(item.id)}>Edit </button>
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Todolist;
