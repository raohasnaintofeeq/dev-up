import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Checkbox, FormControlLabel, Button, MenuItem, FormGroup, Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import * as Yup from 'yup';

// Sample data for users and permissions
const users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
];

const permissions = [
  'Read',
  'Write',
  'Delete',
  'Update',
];

// Validation schema
const validationSchema = Yup.object({
  user: Yup.string().required('User is required'),
  permissions: Yup.array().min(1, 'At least one permission is required'),
});

// Styled Checkbox with Circular Shape
const CircularCheckbox = styled(Checkbox)({
  '&.Mui-checked': {
    color: '#1976d2', // Change this color to customize the checked color
  },
  '& .MuiSvgIcon-root': {
    borderRadius: '50%',
  },
});

const PermissionForm = () => {
  return (
    <Formik
      initialValues={{
        user: '',
        permissions: [],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form Data:', values);
      }}
    >
      {({ values, handleChange, setFieldValue, errors, touched }) => (
        <Container maxWidth="sm">
          <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center" 
          minHeight="100vh"
          >
            <Form style={{ width: '100%' }}>
              {/* User Select Field */}
              <Field
                as={TextField}
                select
                name="user"
                label="Select User"
                fullWidth
                variant="outlined"
                margin="normal"
                value={values.user}
                onChange={handleChange}
                error={touched.user && Boolean(errors.user)}
                helperText={touched.user && errors.user}
              >
                {users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Field>

              {/* Permissions Checkboxes */}
              <Box marginTop={2} marginBottom={2} >
                <FormGroup sx={{flexDirection: 'row'}}>
                  {permissions.map((permission, index) => (
                    <Box key={index}
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                      flexWrap="nowrap"

                      marginBottom={2} >
                      <Typography variant="body1">{permission}</Typography>
                      <FormControlLabel
                        control={
                          <CircularCheckbox
                            checked={values.permissions.includes(permission)}
                            onChange={() => {
                              if (values.permissions.includes(permission)) {
                                setFieldValue(
                                  'permissions',
                                  values.permissions.filter((p) => p !== permission)
                                );
                              } else {
                                setFieldValue('permissions', [...values.permissions, permission]);
                              }
                            }}
                            name="permissions"
                          />
                        }
                        label=""
                        style={{ marginLeft: 0 }}
                      />
                    </Box>
                  ))}
                </FormGroup>
                {touched.permissions && errors.permissions && (
                  <div style={{ color: 'red', fontSize: '12px' }}>{errors.permissions}</div>
                )}
              </Box>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Form>
          </Box>
        </Container>
      )}
    </Formik>
  );
};

export default PermissionForm;
