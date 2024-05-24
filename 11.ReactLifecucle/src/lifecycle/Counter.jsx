const Counter = ({ startNum, changeStartNum }) => {
  const increase = () => {
    changeStartNum((prev) => prev + 1);
  };

  const decrease = () => {
    changeStartNum((prev) => prev - 1);
  };

  return (
    <>
      <div
        className='counter'
        style={{
          padding: '20px',
          backgroundColor: 'orange',
          fontSize: '4rem',
          color: 'black',
          width: '20%',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        {startNum}

        <div className='btns'>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
