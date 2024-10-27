import React from "react";
import { Field } from "formik";
import { Box, TextField } from "@mui/material";

const InputField = ({ name, ...props }: any) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Field name={name}>{({ field }: any) => (
        <TextField
          {...field}
          {...props}
          fullWidth
        />
      )}</Field>
    </Box>
  )
}
export default InputField;