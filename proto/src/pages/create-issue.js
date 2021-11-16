import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Header from '../components/header';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        margin: '2% 10%',
    },
    container: {
        margin: 'auto',
    },
    center: {
        textAlign: 'center',
    }
});


export default function CreateIssue() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Header />
            <Paper className={classes.root}>
                <form>
                    <Grid
                        container
                        spacing={3}
                        alignItems='center'
                        justify='center'
                    >
                        <Grid item  xs={12}>
                            <Typography
                                variant='h3'
                                component='h1'
                                color='textPrimary'
                                justify='center'
                                className={classes.center}
                            >
                                Create Issue
                            </ Typography>
                        </Grid>
                        <Grid item  xs={12}>
                            <TextField variant='outlined' label='code' fullWidth />
                        </Grid>
                        <Grid item  xs={12}>
                            <TextField variant='outlined' label='name' fullWidth />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField variant='outlined' label='issue' fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color='primary' variant='contained'>
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

        </React.Fragment>
    );

}
