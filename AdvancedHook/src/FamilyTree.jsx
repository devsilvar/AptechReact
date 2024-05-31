import { useContext } from "react";
import { SurnameContext } from "./context/FamilyContexts";
const FamilyTree = () => {
    const { surname } = useContext(SurnameContext)

 
  return <div>My name is Seyi {surname}</div>;
};

export default FamilyTree;
