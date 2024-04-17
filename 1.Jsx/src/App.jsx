import Students from './component/Students';
import Reusable from './component/Reusable';

function App() {
  return (
    <>
      <Students noOfSTudents={13} pa='Eniola' />
      <Reusable heading='APtech Studenst' centerText={2} Ptext='great' />
      <Reusable heading='APtech Studenst' centerText={1} Ptext='Uthman' />
    </>
  );
}
export default App;
