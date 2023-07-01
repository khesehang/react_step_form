import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider,  } from '@mui/material/styles';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import {  Stack, Typography, } from '@mui/material';

const theme = unstable_createMuiStrictModeTheme();

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                            Enter Personal Details
                        </Typography>
                    </AppBar>
                    <Stack
                        display='flex'
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>

                        <TextField
                        sx={{ width: '550px' }}
                            placeholder='Enter Your Occupation'
                            label='Occupation' onChange={handleChange('occupation')}
                            defaultValue={values.occupation} margin='normal'
                            fullWidth
                        />
                        <br />
                        <TextField
                        sx={{ width: '550px' }}
                            placeholder='Enter Your city'
                            label='city' onChange={handleChange('city')}
                            defaultValue={values.city} margin='normal'
                            fullWidth
                        />
                        <br />
                        <TextField
                        sx={{ width: '550px' }}
                            placeholder='Enter Your Bio'
                            label='Bio' onChange={handleChange('bio')}
                            defaultValue={values.bio} margin='normal'
                            fullWidth
                        />
                        </Stack>
                        <br />
                        <Button
                            color='primary' variant='contained'
                            onClick={this.back}
                        >Back</Button>
&nbsp;
&nbsp;

                        <Button
                            color='primary' variant='contained'
                            onClick={this.continue} >Continue</Button>
                        
                </>
            </ThemeProvider>
        )
    }

}