"use client"
import { getCookie } from "cookies-next";
import DrawerAppBar from "../page";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const StudentData = () => {
 const getData = getCookie("saveData")
 let savedData;

 if(getData){
    savedData = JSON.parse(getData)
  }
  console.log("data :: ", savedData)
  const newarray = savedData.filter((item: { class: string; }) => item.class === "nine")
  const matricStudent = savedData.filter((item: { class: string; }) => item.class === "matric")
  console.log("newarray :: ", newarray)
  console.log("matric student :: ", matricStudent)
  return (
    <div>
      <DrawerAppBar />
      <TableContainer component={Paper} >
      <Table size="small" aria-label="a dense table">
          <TableHead sx={{backgroundColor: "#1976d2"}}>
            <TableRow sx={{ '& th': { color: 'white' } }}>
              <TableCell>name</TableCell>
              <TableCell>father name</TableCell>
              <TableCell>class</TableCell>
              <TableCell>roll number</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {savedData.map((entry: any, index: any) => (
              <TableRow key={index}>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.fname}</TableCell>
                <TableCell>{entry.class}</TableCell>
                <TableCell>{entry.rollnumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default StudentData;