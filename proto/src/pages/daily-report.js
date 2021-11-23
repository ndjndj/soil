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
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Add from '@material-ui/icons/Add';
import TabPanel from '../components/tab-panel';

const useStyles = makeStyles({

});

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}

const ButtonInTabs = ({className, onClick, children}) => {
    return <Button className={className} onClick={onClick} children={children} />;
}

export default function DailyReport() {
    const [tabs, setTabs] = useState([]);
    const [markdown, setMarkdown] = useState('');
    const [value, setValue] = useState(0);

    function handleChange(e, newValue) {
        setValue(newValue);
    }

    function handleClick() {
        setTabs([...tabs, 'tabs']);
        console.log(tabs);
    }

    function handleDrop(data, e) {
        let files = e.dataTransfer.files;
        if (files.length > 0) {
            let file = files[0];
            console.log(file.name);
            console.log(file);

        }
    }
    function updateTabList(tabs) {
        return tabs.map((tabName, i) => {
            return <TabPanel value={i} index={i}>
                <Container maxWidth='lg'>
                    <SimpleMDE events={{'drop': handleDrop}} />
                </Container>
            </TabPanel>
        });
    }
    const classes = useStyles();
    return(
        <React.Fragment>
            <Header />

            <Tabs value={value} onChange={handleChange} aria-label='simple tab example'>
                <Tab label='one' {...a11yProps(0) } />
                <Tab label='two' {...a11yProps(1) } />
                <Tab label='three' {...a11yProps(2) } />
                <ButtonInTabs onClick={handleClick}>
                    NewTab
                </ButtonInTabs>
            </Tabs>

            <React.Fragment>
                {updateTabList(tabs)}
            </React.Fragment>

        </React.Fragment>
    );
}
