'use client'
import React from "react";
interface formProps {
  name: string;
  fname: string;
}
const formValues: formProps = {
  name: "",
  fname: "",
}
const handleState = () => {
  const [value, setValue] = React.useState(formValues)
  const [copy, setCopy] = React.useState([] as any)
  const handleChange = (e: string, optional: string) => {
    setValue((prev) => {
      return {
        ...prev,
        [optional]: e
      }
    })
  }
  const handleSubmit = () => {
    setCopy((prev: []) => {
      return [...prev, value]
    })
    setValue(formValues)
  }
  console.log("value ", copy)
  return (
    <div>
      <input type="text" value={value.name} onChange={(e) => handleChange(e.target.value, "name")} />
      <input type="text" value={value.fname} onChange={(e) => handleChange(e.target.value, "fname")} />
      <button type="submit" onClick={handleSubmit}>submit</button>
    </div>
  )
}
export default handleState;