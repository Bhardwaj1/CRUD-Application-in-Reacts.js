import "./App.css";
import EmployeeList from "./Employee/EmployeeList";
import AddEmployeeModalView from "./Modal/AddEmployeeModalView";
import { createContext, useState } from "react";

export const EmployeeInfo = createContext();
function App() {
  const [open, setOpen] = useState(false);
  const [employees,setEmployees]=useState([]);
  console.log({employees});
  const [inputValue, setInputValue] = useState({name:"",email:"",phone:"",address:""});
  const handleInputChange = (e) => {
    setInputValue({...inputValue,[e.target.name]:e.target.value});
  };
  return (
    <>
      <EmployeeInfo.Provider value={{employees,setEmployees,inputValue,setInputValue,handleInputChange,setEmployees}}>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wraper">
              <AddEmployeeModalView open={open} setOpen={setOpen} />
              <EmployeeList open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </EmployeeInfo.Provider>
    </>
  );
}

export default App;
