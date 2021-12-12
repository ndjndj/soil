import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Header from '../src/components/header';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin:'2% 2%'
    },
    title: {
        fontSize: 18,
        paddingTop: '5%',
        paddingLeft: '1%',
    }
}));

export default function IssueList() {

    const classes = useStyles();
    return (
        <React.Fragment>
            <Header />
            <Paper className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs>
                <Typography variant="h2" className={classes.title}>title</Typography>
            </Grid>
            <Grid item xs>
                <Typography component="p">created day: </Typography>
                <Typography component="p">updated day: </Typography>
            </Grid>
            <Grid item xs>
                <Typography variant="h5">type </Typography>
            </Grid>
        </Grid>
    </Paper>
    <Paper className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs>
                <Typography variant="h2" className={classes.title}>title</Typography>
            </Grid>
            <Grid item xs>
                <Typography component="p">created day: </Typography>
                <Typography component="p">updated day: </Typography>
            </Grid>
            <Grid item xs>
                <Typography variant="h5">type </Typography>
            </Grid>
        </Grid>
    </Paper>
    <Paper className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs>
                <Typography variant="h2" className={classes.title}>title</Typography>
            </Grid>
            <Grid item xs>
                <Typography component="p">created day: </Typography>
                <Typography component="p">updated day: </Typography>
            </Grid>
            <Grid item xs>
                <Typography variant="h5">type </Typography>
            </Grid>
        </Grid>
    </Paper>
    <Paper className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs>
                <Typography variant="h2" className={classes.title}>title</Typography>
            </Grid>
            <Grid item xs>
                <Typography component="p">created day: </Typography>
                <Typography component="p">updated day: </Typography>
            </Grid>
            <Grid item xs>
                <Typography variant="h5">type </Typography>
            </Grid>
        </Grid>
    </Paper>
        </React.Fragment>
    );
}
