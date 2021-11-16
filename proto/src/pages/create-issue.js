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
        flexGrow: 1
    },
    container: {
        margin: 'auto',
    },
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
                        direction='column'
                    >
                        <Grid item>
                            <Typography variant='h3' component='h1' color='textPrimary'>
                                Create Issue
                            </ Typography>
                        </Grid>
                        <Grid item>
                            <TextField variant='outlined' label='code' fullWidth />
                        </Grid>
                        <Grid item>
                            <TextField variant='outlined' label='name' />
                        </Grid>
                        <Grid item>
                            <TextField variant='outlined' label='issue' />
                        </Grid>
                        <Grid item>
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
