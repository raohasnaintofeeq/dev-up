"use client"
import DrawerAppBar from "../page";
import React from "react";
import { Formik, Form, Field } from "formik";
import { setCookie } from "cookies-next";

interface Props {
  name: string;
  fname: string;
}
const handleState = () => {
  const [copy, setCopy] = React.useState([] as any)
  const initialValues: Props = {
    name: "",
    fname: ""
  }

  const handleSubmitForm = (values: Props) => {
    const payload = {...values}
    setCopy((prev: any) => {
      return [...prev, payload]
    })
    setCookie("saveData ", copy)

    console.log("copy :: ", copy)
  }
 
  return (
    <div>
      <DrawerAppBar />
      <Formik
      initialValues={initialValues}
      onSubmit={async(values) => {
        await handleSubmitForm(values)
      }}
      >
        {() => (
          <Form>
            <Field name="name"/>
            <Field name="fname"/>
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik> 
    </div>
  )
}
export default handleState;