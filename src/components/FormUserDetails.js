import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

const theme = unstable_createMuiStrictModeTheme();

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }




    render() {
        const { values, handleChange } = this.props;
        return (
            <ThemeProvider theme={theme} >

                <>

                    <AppBar position='static'
                        sx={{ p: 2 }}
                    >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Enter User Details
                        </Typography>
                    </AppBar>
                    <Stack
                        display='flex'
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}>

                        <TextField
                            sx={{ width: '550px' }}
                            placeholder='Enter Your First Name'
                            label='First Name' onChange={handleChange('firstName')}
                            defaultValue={values.firstName} margin='normal'
                            fullWidth
                        />
                        <br />
                        <TextField
                            sx={{ width: '550px' }}
                            placeholder='Enter Your Last Name'
                            label='Last Name' onChange={handleChange('lastName')}
                            defaultValue={values.lastName} margin='normal'
                            fullWidth
                        />
                        <br />
                        <TextField
                            sx={{ width: '550px' }}
                            placeholder='Enter Your Email'
                            label='Email' onChange={handleChange('email')}
                            defaultValue={values.email} margin='normal'
                            fullWidth
                        />
                        <br />
                        <Button color='primary' variant='contained' onClick={this.continue} >Continue</Button>
                    </Stack>

                </>
            </ThemeProvider>
        )
    }

}