import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', phone: '', email: '' });
    const [open, setOpen] = useState(false);

    const handleChange = (prop: keyof typeof user) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [prop]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        localStorage.setItem('userDetails', JSON.stringify(user));
        navigate('/department-list'); // Adjust the path as needed
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
                sx={{
                    width: '100%', // Full width of the container
                    maxWidth: 600, // Max width for larger form
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'background.paper',
                    boxShadow: 3,
                    borderRadius: 2
                }}
            >
                <Typography component="h1" variant="h4" gutterBottom>
                    Enter Your Details
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Name"
                        autoFocus
                        value={user.name}
                        onChange={handleChange('name')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Phone"
                        value={user.phone}
                        onChange={handleChange('phone')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        value={user.email}
                        onChange={handleChange('email')}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                </Box>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="Details saved successfully!" />
            </Box>
        </Container>
    );
};

export default UserForm;
