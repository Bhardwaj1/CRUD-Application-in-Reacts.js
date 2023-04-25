import React, { useContext, useState } from "react";

import {
  Box,
  Button,
  Input,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { EmployeeInfo } from "../App";
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

const EditModalview = (props) => {
  const {
    handleInputChange,
    employees,
    inputValue,
    setEmployees,
    setInputValue,
  } = useContext(EmployeeInfo);
  const handleClose = () => {
    props.setOpen(false);
    setInputValue({ name: "", email: "", phone: "", address: "" });
  };
  const editEmployee = () => {
    let newValue = [];
    employees.map((item) => {
      if (item.id === inputValue.id) {
        newValue.push(inputValue);
      } else {
        newValue.push(item);
      }
    });
    setEmployees(newValue);
    handleClose();
  };

  return (
    <>
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
              style={{ margin: 10 }}
              onClick={() => {
                editEmployee();
              }}
            >
              Edit Employee
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default EditModalview;
