import { useState, useEffect } from 'react';

export default function StopWatch() {
  const [start, setStart] = useState(0);
  const [timer, settimer] = useState({ myHours: 0, myMinutes: 0, mySecond: 0 });

  let timeCount = ` ${
    timer.myHours < 10 ? '0' + timer.myHours : timer.myHours
  }  ${timer.myMinutes < 10 ? '0' + timer.myMinutes : timer.myMinutes} : ${
    timer.mySecond < 10 ? '0' + timer.mySecond : timer.mySecond
  }`;

  useEffect(() => {
    setInterval(() => {
      startSeconds();
    }, 1000);

    setInterval(() => {
      startMinutes();
    }, 10000);

    setInterval(() => {
      startHours();
    }, 100000);

    // setInterval(() => {
    //   settimer((prevTime) => {
    //     return {
    //       ...prevTime,
    //       myHours: prevTime.myHours++,
    //     };
    //   });
    // }, 10000);

    // setInterval(() => {
    //   startSeconds;
    // }, 1000);

    // setInterval(() => {
    //   startMinutes;
    // }, 10000);

    // setInterval(() => {
    //   startHours;
    // }, 100000);
    console.log(start);
    console.log(timer.mySecond);
    console.log(timer.myMinutes);
    console.log(timer.myHours);
  }, [start]);

  const StopWatch = () => {};

  const startSeconds = () => {
    settimer((prevTime) => {
      return {
        ...prevTime,
        mySecond:
          prevTime.mySecond == 10
            ? (prevTime.mySecond = 0)
            : prevTime.mySecond++,
      };
    });
  };

  const startMinutes = () => {
    settimer((prevTime) => {
      return {
        ...prevTime,
        myMinutes:
          prevTime.myMinutes == 10
            ? (prevTime.myMinutes = 0)
            : prevTime.myMinutes++,
      };
    });
  };

  const startHours = () => {
    settimer((prevTime) => {
      return {
        ...prevTime,
        myHours:
          prevTime.myHours == 10 ? prevTime.myHours == 0 : prevTime.myHours++,
      };
    });
  };

  function StartWatch() {
    setStart((prev) => prev + 1);
  }

  return (
    <section>
      <h2 className='text-center'>{timeCount}</h2>
      <p>Timer Stop Watch</p>

      <div className='d-flex justify-content-center gap-3'>
        <button className='btn btn-success' onClick={StartWatch}>
          Start
        </button>
        <button className='btn btn-danger'>Stop</button>
      </div>
    </section>
  );
}
