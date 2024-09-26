import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, FormGroup, FormControl } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formValues);
    // Handle form submission logic here
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 15 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: 1,
          borderColor: 'grey.300',
          borderRadius: 2,
          p: 3,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <FormGroup sx={{ mb: 3 }}>
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                value={formValues.name}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                value={formValues.email}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone"
                type="tel"
                variant="outlined"
                value={formValues.phone}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />
            </FormGroup>
            <FormGroup>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mb: 1 }}
              >
                Submit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<ArrowBack />}
                onClick={handleBack}
              >
                Back
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};

export default ContactPage;
