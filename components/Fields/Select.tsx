import React from "react"
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { Field } from "formik";

const ClassName = [
  { id: "nine", name: "Nine" },
  { id: "tenth", name: "Tenth" },
  { id: "firstyear", name: "First Year" },
  { id: "secondyear", name: "Second Year" },
]

const SelectInput = ({ name, label, labelId, ...props }: any) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Field name={name}>{({ field }: any) => (
        <FormControl
          fullWidth
          {...props}
        >
          <InputLabel id={labelId}>{label}</InputLabel>
          <Select
            {...props}
            {...field}
            labelId={labelId}
            label={label}
          >
            {ClassName.map((clas, index) =>
              <MenuItem key={index} value={clas.id}>{clas.name}</MenuItem>
            )}
          </Select>
        </FormControl>
      )}
      </Field>
    </Box>
  )
}
export default SelectInput;