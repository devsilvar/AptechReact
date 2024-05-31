import { useContext } from 'react';
import { SurnameContext } from './context/FamilyContexts';
const StudentName = () => {
  const { surname } = useContext(SurnameContext);

  return <div>The surname of our President is {surname} </div>;
};

export default StudentName;
