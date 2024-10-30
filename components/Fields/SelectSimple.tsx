import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { ClassName } from "@/constants/select/select";
const SelectField = ({ label, labelId, value, handleChange, ...props }: any) => {
  useEffect(() => {
    if (window.location.pathname === "/admin/students") {
      ClassName.push({ id: "all", name: "All" })
    }
  }, [ClassName])

  return (
    <div>
      <FormControl
        fullWidth
        {...props}
      >
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          {...props}
          labelId={labelId}
          label={label}
          value={value}
          onChange={handleChange}
        >
          {ClassName.map((clas, index) =>
            <MenuItem key={index} value={clas.id}>{clas.name}</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  )
}
export default SelectField;