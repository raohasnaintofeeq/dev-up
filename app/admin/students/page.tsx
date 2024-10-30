"use client"
import React, { useEffect, useState} from "react";
import { getCookie } from "cookies-next";
import DrawerAppBar from "../page";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, SelectChangeEvent } from "@mui/material";
import { Delete } from "@mui/icons-material";
import SelectField from "@/components/Fields/SelectSimple";

interface AttendanceRecord {
  id: string;
  present: boolean;
}
const StudentData = () => {
  const [classes, setClasses] = useState('')
  const [filteredData, setFilteredData] = useState<AttendanceRecord[]>([])

 const getData = getCookie("saveData")
 let savedData: any[] = [];

 if(getData){
    savedData = JSON.parse(getData)
  }

const handleClassChange = (event: SelectChangeEvent) => {
  const selected = event.target.value as string
  setClasses(selected)

  const newdata = savedData.filter((item) => item.class === selected)
  setFilteredData(newdata.length ? newdata : savedData)
}
useEffect(() => setFilteredData(savedData),[])

  return (
    <div>
      <DrawerAppBar />
      <Box sx={{
        width: "30%",
        margin: "0% 0% 35px 30%"
      }}>
      <SelectField
      label="Select Class"
      value={classes}
      handleChange={handleClassChange}
       />
      </Box>
      
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
            {Array.isArray(filteredData) && filteredData.map((entry: any, index: any) => (
              <TableRow key={index}>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.fname}</TableCell>
                <TableCell>{entry.class}</TableCell>
                <TableCell>{entry.rollnumber}</TableCell>
                {/* <TableCell>
                  <IconButton onClick={() => handleDelete(entry.rollnumber)}>
                    <Delete />
                  </IconButton>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default StudentData;