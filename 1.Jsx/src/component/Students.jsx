import '../App.css';
import Absentess from './Absentess';

function Students({ noOfSTudents, pa }) {
  return (
    <div className='box'>
      <p>Total Number of Students : {noOfSTudents} </p>
      <h3>Mr Uthman</h3>
      <h3>Mr Daniel</h3>
      <h3>Mrs Great</h3>
      <h3>Master Emmanuel</h3>

      <p>But {pa} didint come today</p>
      <u>Students who didnt come to class</u>
      <Absentess totalSTudentNumber={noOfSTudents} />
    </div>
  );
}

export default Students;
