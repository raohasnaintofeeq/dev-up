import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Button, Grid, Typography, List, ListItem, Divider } from '@mui/material';
const UserManagement = ({ roles }: any) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User1', role: '' },
    { id: 2, name: 'User2', role: '' },
    // Add more mock users as needed
  ]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleAssignRole = () => {
    setUsers(users.map(user => String(user.id) === selectedUser ? { ...user, role: selectedRole } : user));
  };
  console.log("user :: ", users)
  console.log("role :: ", roles)
  console.log("selectedrole :: ", selectedRole)

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4">User Management</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel>User</InputLabel>
          <Select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginTop: 16 }}>
          <InputLabel>Role</InputLabel>
          <Select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            {roles.map((role, index ) => (
              <MenuItem key={index} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleAssignRole} style={{ marginTop: 16 }}>
          Assign Role
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Users and Their Roles</Typography>
        <List>
          {users.map((user) => (
            <React.Fragment key={user.id}>
              <ListItem>
                {user.name} - {user.role || 'No role assigned'}
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default UserManagement;
