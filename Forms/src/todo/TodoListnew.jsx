import './todo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef, useEffect } from 'react';

const TodoListnew = () => {
  const [userValue, setuserValue] = useState('');
  const [todos, settodos] = useState([]);
  const todoIndex = useRef(0);
  const [editState, seteditState] = useState(false);
  const currentTodoIndex = useRef(null);

  const resetInput = () => {
    setuserValue('');
  };

  // useEffect(() => {
  //   console.log(UpdatedTodo);
  // }, []);

  const addTask = (e) => {
    e.preventDefault();

    todoIndex.current = todoIndex.current + 1;

    //group our todo

    let currentTodo = { id: todoIndex.current, task: userValue };

    //send it to the todos state Array
    settodos([...todos, currentTodo]);

    resetInput();
  };

  // useEffect(() => {
  //   console.log(todos);
  // });

  const deleteTodo = (currentIndex) => {
    //filter out the remining Todod

    let filtereTodo = todos.filter((item) => {
      return item.id != currentIndex;
    });

    //Update the Todo Array with teh filtered Todo
    settodos(filtereTodo);
  };

  const editTodo = (currentIndex) => {
    seteditState(true);
    console.log(currentIndex);
    //sedn the values to the Input Tag
    let seletedTodo = todos.filter((item) => item.id == currentIndex);

    //send the values from selected toodo to the Input Tag value

    setuserValue(seletedTodo[0].task);
    currentTodoIndex.current = currentIndex;
    console.log(seletedTodo);
  };

  const updateTodo = (e) => {
    e.preventDefault();

    let UpdatedTodoState = todos.map((item) => {
      if (item.id == currentTodoIndex.current) {
        return { ...item, task: userValue };
      }
      return item;
    });

    settodos(UpdatedTodoState);
  };

  return (
    <section>
      <form action='' onSubmit={addTask}>
        <label htmlFor=''>Enter the Task</label>
        <input
          type='text'
          id='task'
          value={userValue}
          onChange={(e) => setuserValue(e.target.value)}
        />

        {editState == false ? (
          <button className='addTask' type='submit'>
            Add Task
          </button>
        ) : (
          <button className='updateTask' onClick={updateTodo}>
            Update Todo
          </button>
        )}
      </form>

      <div className='taskes'>
        {todos.map((item) => {
          return (
            <div className='task' key={item.id}>
              <p>{item.task}</p>{' '}
              <button className='del' onClick={() => deleteTodo(item.id)}>
                Delete
              </button>{' '}
              <button className='edit' onClick={() => editTodo(item.id)}>
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TodoListnew;
