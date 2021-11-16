import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Header from '../components/header';
import Typography from '@material-ui/core/Typography';

export default function CreateIssue() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Header />
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant='h3' component='h1' color='textPrimary'>
                            Create Issue
                        </ Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant='outlined' label='code'/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant='outlined' label='name' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant='outlined' label='issue' />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color='primary' variant='contained'>
                            Create
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );

}
