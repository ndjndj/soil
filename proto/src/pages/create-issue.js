import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Header from '../components/header';

export default function CreateIssue() {

    return(
        <React.Fragment>
            <Header />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField/>
                </Grid>
                <Grid item xs={12}>
                    <TextField/>
                </Grid>
                <Grid item xs={12}>
                    <TextField/>
                </Grid>
                <Grid item xs={12}>
                    <Button color='primary' variant='contained'>
                        Create
                    </Button>
                </Grid>
            </Grid>

        </React.Fragment>
    );

}
