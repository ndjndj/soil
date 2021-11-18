import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Header from '../components/header';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({

});


export default function DailyReport() {

    const [markdown, setMarkdown] = useState('');

    function handleDrop(data, e) {
        let files = e.dataTransfer.files;
        if (files.length > 0) {
            let file = files[0];
            console.log(file.name);
            console.log(file);

        }
    }

    const classes = useStyles();
    return(
        <React.Fragment>
            <Header />

            <Tabs>

            </Tabs>
            <Container maxWidth='lg'>
                <SimpleMDE events={{'drop': handleDrop}} />
            </Container>
        </React.Fragment>
    );
}
