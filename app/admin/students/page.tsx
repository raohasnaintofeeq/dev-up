"use client"
import { getCookie } from "cookies-next";
import DrawerAppBar from "../page";

const StudentData = () => {
  let getData = getCookie("saveData")
  return (
    <div>
      <DrawerAppBar />
      {getData}
    </div>
  )
}
export default StudentData;