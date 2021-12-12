import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

export default function ListItem() {
  const classes = useStyles();

  return (
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
  );
}
