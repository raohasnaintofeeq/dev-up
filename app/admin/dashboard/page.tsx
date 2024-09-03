'use client'
import React from 'react';
import { Grid, TextField, Box, Typography, Button, Menu, MenuItem, Divider } from '@mui/material';
import { DateRange, ArrowForwardIos } from '@mui/icons-material';

const SearchRow = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box p={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box display="flex" alignItems="center">
            <TextField
              variant="outlined"
              label="Start Date"
              type="date"
              defaultValue="2024-08-11"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <ArrowForwardIos style={{ margin: '0 8px' }} />
            <TextField
              variant="outlined"
              label="End Date"
              type="date"
              defaultValue="2024-08-18"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={6} lg={5}>
          <Grid container spacing={1}>
            {['Today', 'This Week', 'This Month', 'This Year'].map((label, index) => (
              <Grid item xs={3} key={index}>
                <Button variant="text">{label}</Button>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={1}>
            {['Yesterday', 'Last Week', 'Last Month', 'Last Year'].map((label, index) => (
              <Grid item xs={3} key={index}>
                <Button variant="text">{label}</Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button onClick={handleClick}>
              Report times are UTC+5 <ArrowForwardIos />
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <Typography variant="body1">UTC</Typography>
                <Typography variant="body2">Coordinated Universal Time</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <Typography variant="body1">UTC+4</Typography>
                <Typography variant="body2">Muhammad Aamir</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <Typography variant="body1">UTC+5</Typography>
                <Typography variant="body2">Hasnain Tofeeq</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchRow;


// import react, { useCallback, useState, memo, useEffect } from "react";
//  const Parent = () => {
//   const [count, setCount] = useState(0)
//   const handleClick = useCallback(() => {
//     setCount((prev) => prev + 1)
//   }, [])

//   return (
//     <>
//       <Momoized user={count} />
//       <button onClick={() => handleClick()}>button</button>
//     </>
//   )
// }
// export default Parent;
// function Child({ user }) {
//   console.log("handle")
//   useEffect(() => {},[user])
//   return (
//     <div>{user}</div>
//   );
// }
// const Momoized = memo(Child)