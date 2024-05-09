import { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CorrectStopWatch = () => {
  const [isRunning, setisRunning] = useState(false);
  const [timer, settimer] = useState(0);
  const [isActive, setisActive] = useState(false);
  const [isPaused, setisPaused] = useState(false);
  const timeCounter = useRef(null);

  //isActive is to check if the timer is currently running
  //is Paused is to see if the timer is paused..For a strter they are both false

  // the useRefHook behaves like - document.getElmenet by ID in the sense that you can skip the virtual dom to acess the thing you wnat to acess

  // TASKS TO DO
  // to write a function for each button
  // format the timer the way we see in stopwatch (00: 00: 00)

  //when we start this function we want it to keep runing until we stop it. But for now we just want it to keep running so we need setinterval

  useEffect(() => {
    if (isRunning == true) {
      timeCounter.current = setInterval(() => {
        settimer((previousValue) => previousValue + 1);
      }, 1000);
    } else {
      clearInterval(timeCounter.current);
    }
  }, [isRunning]);

  const handleStart = () => {
    //whne we hit the startButton
    setisActive(true);
    // add one to the the timer every one seconds and send the referece to the timeCounter
    setisRunning(!isRunning);
  };

  const handlePause = () => {
    setisRunning(!isRunning);
    setisPaused(true);
  };

  const handleReset = () => {
    setisPaused(false);
    setisActive(false);
    setisRunning(!isRunning);
    settimer(0);
  };

  const handleResume = () => {
    setisRunning(!isRunning);
    setisPaused(true);
  };

  return (
    <section className='text-center my-5'>
      <h1 className='fs-1'>
        {'0' +
          Math.floor(timer / 3600)
            .toString()
            .slice(-2) +
          ':' +
          '0' +
          Math.floor((timer % 3600) / 60)
            .toString()
            .slice(-2) +
          ':' +
          ('0' + (timer % 60)).toString().slice(-2)}
      </h1>
      <p>Stop Watch Timer</p>
      <div className=' d-flex justify-content-center gap-3 py-3'>
        {isActive ? (
          isRunning && (
            <button
              className='btn btn-secondary rounded-3'
              onClick={handlePause}
            >
              Pause
            </button>
          )
        ) : (
          <button className='btn btn-success' onClick={handleStart}>
            Start
          </button>
        )}
        {isActive && isPaused && isRunning == false && (
          <button className='btn btn-warning rounded-3' onClick={handleResume}>
            Resume
          </button>
        )}

        <button className='btn btn-danger rounded-3' onClick={handleReset}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default CorrectStopWatch;
