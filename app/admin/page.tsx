"use client"
import * as React from 'react';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon, Dashboard as DashboardIcon, AccountCircle as AccountCircleIcon, Settings as SettingsIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

function Dashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  console.log("sidebar toggling", sidebarOpen)

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem>
          <ListItemIcon onClick={() => router.push('/admin/dashboard')}>
            <DashboardIcon />
          </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem>
          <ListItemIcon onClick={() => router.push('/admin/inventory/stocks')}>
            <AccountCircleIcon />
          </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItem>
        <ListItem>
          <ListItemIcon onClick={() => router.push('/admin/inventory/permissions')}>
            <SettingsIcon />
          </ListItemIcon>
           <ListItemText primary="Settings" />
        </ListItem>
        <ListItem>
          <ListItemIcon onClick={() => router.push('')}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ 
          width: sidebarOpen ? `calc(100% - ${drawerWidth}px)` : `calc(100% - 56px)`, // 56px to account for the icon width when collapsed
          ml: sidebarOpen ? `${drawerWidth}px` : '56px',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle sidebar"
            edge="start"
            onClick={toggleSidebar}
            sx={{ mr: 2 }}
          >
            {sidebarOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        sx={{
          width: sidebarOpen ? drawerWidth : '56px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: sidebarOpen ? drawerWidth : '56px',
            transition: 'width 0.3s',
            overflowX: 'hidden',
          },
        }}
        open={!sidebarOpen}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          width: sidebarOpen ? `calc(100% - ${drawerWidth}px)` : `calc(100% - 56px)`,
        }}
      >
        <Toolbar />
        <Typography>hello hasnain</Typography>        
      </Box>
    </Box>
  );
}

export default Dashboard;