import { Button } from "@mui/material";
import React from "react";
import AddEmployeeModalView from "../Modal/AddEmployeeModalView";

const Employee = () => {
  return (
    <>
      <Button variant="contained" size="large">
        Add Employee
      </Button>
      <Button color="tertiary" size="large" variant="filled">
        Delete All
      </Button>
    </>
  );
};

export default Employee;
