import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, List, ListItem, Divider } from '@mui/material';
import UserManagement from "@/components/User"

const RoleManagement = () => {
  const [roles, setRoles] = useState(['Admin']); // Default role
  const [roleName, setRoleName] = useState('');

  const handleCreateRole = () => {
    if (roleName && !roles.includes(roleName)) {
      setRoles([...roles, roleName]);
      setRoleName('');
    }
  };

  console.log("role management")

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4">Role Management</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Role Name"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleCreateRole} style={{ marginTop: 16 }}>
          Create Role
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">Existing Roles</Typography>
        <List>
          {roles.map((role, index) => (
            <React.Fragment key={index}>
              <ListItem>{role}</ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
        <UserManagement roles={roles} />
      </Grid>
    </Grid>
  );
};

export default RoleManagement;
