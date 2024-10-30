"use client"
import React, {useContext} from "react";
import { getCookie } from "cookies-next";
import DrawerAppBar from "../page";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

const StudentData = () => {
 const getData = getCookie("saveData")
 let savedData: any[] = [];

 if(getData){
    savedData = JSON.parse(getData)
  }

const handleDelete = (roll: any) => {
  savedData = savedData.filter((student) => student.rollnumber !== roll)
  console.log(" updated data :: ", savedData)
}

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
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(savedData) && savedData.map((entry: any, index: any) => (
              <TableRow key={index}>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.fname}</TableCell>
                <TableCell>{entry.class}</TableCell>
                <TableCell>{entry.rollnumber}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(entry.rollnumber)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default StudentData;