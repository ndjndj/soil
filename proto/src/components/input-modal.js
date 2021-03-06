import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Header from '../components/header';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import { Dialog } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        margin: '25% 12% 25% 12%'
    }
});


export default function InputModal(props) {
    const { open, onClose, tabName, index, onChange } = props;
    const classes = useStyles();
    const [fieldName, setFieldName] = useState('');

    function handleClick(tabName, index) {
        onChange(tabName, index);
        setFieldName('');
        onClose();
    }

    function handleClose() {
        if (window.confirm('not save?')) {
            onClose();
        }
    }

    return(
        <Modal
            maxWidth='md'
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Paper className={classes.root}>
                <TextField
                    className={classes.root}
                    placeholder={tabName}
                    onChange={(e) => {setFieldName(e.target.value)}}
                    value={fieldName}
                />

                <Button onClick={() => {handleClick(fieldName, index)}}>OK</Button>
            </Paper>

        </Modal>
    )
}
