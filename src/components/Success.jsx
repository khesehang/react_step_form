import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const theme = unstable_createMuiStrictModeTheme();

export class Success extends Component {



    render() {
        return (
            <ThemeProvider theme={theme} >
                <>
                    <AppBar position='static'
                        sx={{ p: 2 }}
                    >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Success
                        </Typography>
                    </AppBar>
                    <h1>Thank You For Your Submission</h1>
                    <p> You will get an email with further instruction</p>

                </>
            </ThemeProvider>
        )
    }

}