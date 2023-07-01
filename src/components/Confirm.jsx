import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { List, ListItem, ListItemText, Stack, Typography, Button } from '@mui/material';

const theme = unstable_createMuiStrictModeTheme();

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }




    render() {
        const {
            values: { firstName, lastName, email, occupation, city, bio }
        } = this.props;
        return (
            <ThemeProvider theme={theme} >

                <>

                    <AppBar position='static'
                        sx={{ p: 2 }}
                    >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Confirm User Data
                        </Typography>
                    </AppBar>
                    <Stack
                        width={550}
                        display='flex'
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        <List>
                            <ListItem>
                                <ListItemText primary='First Name' secondary={firstName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Last Name' secondary={lastName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Email' secondary={email} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Occupation' secondary={occupation} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='City' secondary={city} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Bio' secondary={bio} />
                            </ListItem>
                        </List>
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