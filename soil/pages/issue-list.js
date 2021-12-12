import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Header from '../src/components/header';
import Typography from '@material-ui/core/Typography';
import ListItem from '../src/components/lsit-item';
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

var testData = [
    {'tytle': 'tytle1', 'created': 'created-1', 'updated': 'updated-1', 'type': 'type1'},
    {'tytle': 'tytle2', 'created': 'created-2', 'updated': 'updated-2', 'type': 'type2'},
    {'tytle': 'tytle3', 'created': 'created-3', 'updated': 'updated-3', 'type': 'type3'},
    {'tytle': 'tytle4', 'created': 'created-4', 'updated': 'updated-4', 'type': 'type4'},
    {'tytle': 'tytle5', 'created': 'created-5', 'updated': 'updated-5', 'type': 'type5'},
];

export default function IssueList() {
    const [issueList, setIssueList] = useState([]);
    useEffect(
        () => {
            setIssueList([...issueList, ...testData]);
        },
        []
    );



    const classes = useStyles();
    return (
        <React.Fragment>
            <Header />

        </React.Fragment>
    );
}
