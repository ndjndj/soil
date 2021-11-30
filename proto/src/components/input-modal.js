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

export default function InputModal(props) {
    const { open } = props;

    return(
        <Modal
            open={open}

            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Typography>aaaa</Typography>
        </Modal>
    )
}
