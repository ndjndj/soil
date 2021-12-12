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

const useStyles = makeStyles({
    root: {
        margin: '8% 10%'
    },
    container: {
        margin: 'auto',
    },
    center: {
        textAlign: 'center',
    },
    row: {
        margin: '0 12% 0 12%'
    }
});


export default function CreateUser() {
    const classes = useStyles();
    const [ id, setId ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');

    const handleClick = () => {
        axios
        .post(
            'http://localhost:1337/auth/local/register',
            {
                username: id,
                email: email,
                password: password,
            }
        )
        .then(
            response => {
                console.log('Done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
            }
        )
        .catch(error => {
            // Handle error.
                console.log('An error occurred:', error);
            }
        );
    }
    return(
        <React.Fragment>
            <Header />
            <Typography variant='h2' component='h1'>Create</Typography>
            <Container maxWidth='lg'>
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
                                    className={classes.center}
                                >
                                    Create
                                </ Typography>
                            </Grid>
                            <Grid item  xs={12} className={classes.row}>
                                <TextField
                                    variant='outlined'
                                    label='id'
                                    fullWidth
                                    onChange={e => {setId(e.target.value)}}
                                    value={id}
                            />
                            </Grid>
                            <Grid item xs={12}  className={classes.row}>
                                <TextField
                                    variant='outlined'
                                    label='email'
                                    fullWidth
                                    onChange={e => {setEmail(e.target.value)}}
                                    value={email}
                            />
                            </Grid>
                            <Grid item xs={12}  className={classes.row}>
                                <TextField
                                    variant='outlined'
                                    label='password'
                                    fullWidth
                                    onChange={e => {setPassword(e.target.value)}}
                                    value={password}
                                />
                            </Grid>
                            <Grid item xs={12}  className={classes.center}>
                                <Button color='primary' variant='contained' onClick={handleClick}>
                                   Create
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </React.Fragment>
    );
}
