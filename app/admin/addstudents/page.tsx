"use client"
import DrawerAppBar from "../page";
import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { setCookie } from "cookies-next";
import { Button, Typography } from "@mui/material";
import InputField from "@/components/Fields/InputField";
import SelectInput from "@/components/Fields/Select";

interface Props {
  name: string;
  fname: string;
  class: string;
  rollnumber: number;
}

const width = {
  width: "100%"
}
const HandleState = () => {
  const [copy, setCopy] = useState([] as any)
  const initialValues: Props = {
    name: "",
    fname: "",
    class: "",
    rollnumber: 0
  }

  console.log("window confirm", window.confirm)

  const handleSubmitForm = (values: Props) => {
    const payload = { ...values }

    setCopy((prev: any) => {
      const updatedCopy = [...prev, payload]
      setCookie("saveData ", updatedCopy)
      return updatedCopy
    })
  }

  return (
    <div>
      <DrawerAppBar />
      <div style={{
        width: "35%",
        marginLeft: "30%",
        border: "1px solid",
        borderRadius: "30px",
        borderBlock: "1px"
      }}
      >
        <div style={{ margin: "40px", marginLeft: "12%" }}>
          <Typography textAlign="center"  sx={{textAlign: "center", mb: 4}}
          variant="h4">Add Student</Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values, { resetForm }: FormikHelpers<Props>) => {
              await handleSubmitForm(values)
              resetForm()
            }}
          >
            {() => (
              <Form>
                <InputField
                  name="name"
                  type="text"
                  label="Enter name"
                />
                <InputField
                  name="fname"
                  type="text"
                  label="Enter father name"
                />
                <SelectInput
                  name="class"
                  label="Enter class"
                />
                <InputField
                  name="rollnumber"
                  type="number"
                  label="Enter roll number"
                />
                <Button type="submit" variant="outlined" fullWidth>+submit</Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
export default HandleState;