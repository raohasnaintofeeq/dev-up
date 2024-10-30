"use client"
import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, Button, Grid } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import DrawerAppBar from '../page';

const Dashboard = () => {
  const [location, setLocation] = useState('');
  // Fake data for attendance trends (last 7 days)
  const attendanceData = [2, 5.5, 2, 8.5, 1.5, 5];
  const dateData = [1, 2, 3, 5, 8, 10];

  useEffect(() => {
    setLocation(window.location.pathname)
    console.log("window location :: ", location)
  },[])

  return (
    <div>
      <DrawerAppBar />
    <Box display="flex" flexDirection="column" p={3}>
      <Typography variant='h4' style={{textTransform:'capitalize'}}>{location}</Typography>
      <Grid container spacing={3} marginTop={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Box p={2}>
              <Typography variant="h6">Total Students</Typography>
              <Typography variant="h4">120</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Box p={2}>
              <Typography variant="h6">Present Today</Typography>
              <Typography variant="h4">98</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Box p={2}>
              <Typography variant="h6">Absent Today</Typography>
              <Typography variant="h4">22</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Box p={2}>
              <Typography variant="h6">Late Arrivals</Typography>
              <Typography variant="h4">5</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Attendance Area Chart */}
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Attendance Trends (Last 7 Days)
        </Typography>
        <LineChart
          xAxis={[{ data: dateData, label: 'Date' }]}
          series={[
            {
              data: attendanceData,
              area: true,
              label: 'Attendance',
            },
          ]}
          width={500}
          height={300}
        />
      </Box>
    </Box>
    </div>
  );
};

export default Dashboard;
