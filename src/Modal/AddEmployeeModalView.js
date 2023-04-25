import { Label, MarginOutlined } from "@mui/icons-material";
import {EmployeeInfo} from '../App'
import {
  Box,
  Button,
  Input,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState,useContext } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const AddEmployeeModalView = (props) => {
  const {employees,setEmployees,inputValue,setInputValue,handleInputChange} =useContext(EmployeeInfo);
  const handleOpen = () => props.setOpen(true);
  const handleClose = () => props.setOpen(false);
  // const handleInputChange = (e) => {
  //   setInputValue({...inputValue,[e.target.name]:e.target.value});
  // };

const addEmployee=()=>{
  setInputValue({name:"",email:"",phone:"",address:""});
  setEmployees([...employees,{...inputValue,id:Date.now()}]);
  handleClose(false);
}
  return (
    <>
      <Button onClick={handleOpen}>Add Employee</Button>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              label="Name"
              value={inputValue.name}
              name="name" 
              style={{ margin: 10 }}
              onChange={handleInputChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              style={{ margin: 10 }}
              value={inputValue.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Phone No."
              variant="outlined"
              name="phone"
              style={{ margin: 10 }}
              value={inputValue.phone}
              onChange={handleInputChange}
            />
            <TextField
              label="Address"
              variant="outlined"
              name="address"
              style={{ margin: 10 }}
              value={inputValue.address}
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
              color="primary"
              style={{margin:10}}
              onClick={addEmployee}
            >
              Add Employee
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AddEmployeeModalView;
