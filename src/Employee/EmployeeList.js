import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Employee from "./Employee";
import { Button } from "@mui/material";
import AddEmployeeModalView from "../Modal/AddEmployeeModalView";
import {EmployeeInfo} from "../App";
import EditModalview from "../Modal/EditModalview";

export default function BasicTable() {
  const {employees,setInputValue,inputValue,setEmployees}=React.useContext(EmployeeInfo);
  const [open,setOpen]=React.useState(false);
  
  const editEmployees=(id)=>{
    employees.filter((item)=>{
      if(id===item.id){
        setInputValue(item);
        setOpen(true);
      }
    });
  }

  const deleteEmployee=(id)=>{
    const newEmployeeList =employees.filter((item)=>{
      if(id!==item.id){
        return item;
      }
      //  return id!==item.id;
    })
    setEmployees(newEmployeeList);                                               
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((e) => (
              <TableRow
                key={e.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {e.name}
                </TableCell>
                <TableCell>{e.email}</TableCell>
                <TableCell>{e.phone}</TableCell>
                <TableCell>{e.address}</TableCell>
                <TableCell>
                  <Button color="success" variant="contained" onClick={()=>{
                    editEmployees(e.id)
                  }} >
                    Edit
                  </Button>
                  <Button color="error" variant="contained" onClick={()=>{deleteEmployee(e.id)}}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditModalview open={open} setOpen={setOpen} value={inputValue}/>
    </>
  );
}
