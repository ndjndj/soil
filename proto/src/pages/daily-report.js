import React, { useState, useEffect } from 'react';
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
import InputModal from '../components/input-modal';

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
    const [tabNames, setTabNames] = useState([]);
    const [open, setOpen] = useState(false);
    const [tabInfo, setTabInfo] = useState({});

    function handleChange(e, newValue) {
        setValue(newValue);
    }

    function handleClick() {
        setTabInfo({
            ...tabInfo,
            [String(Object.keys(tabInfo).length)]: `new${ + String(Object.keys(tabInfo).length)}`
        });
        setValue(Object.keys(tabInfo).length);
        console.log(tabInfo);
    }

    function handleClose(tabName, index) {
        setOpen(false);
        setTabInfo({...tabInfo, [String(index)]: tabName});
    }

    function changeTabName(tabName, index) {
        setTabInfo({...tabInfo, [String(index)]: tabName});
    }

    function handleOnDoubleClick() {
        console.log('On double click');
        console.log(tabInfo[value]);
        setOpen(true);
    }

    function handleDrop(data, e) {
        let files = e.dataTransfer.files;
        if (files.length > 0) {
            let file = files[0];
            console.log(file.name);
            console.log(file);

        }
    }

    function updateTabList(tabInfo) {
        return Object.keys(tabInfo).map((_value, i) => {
            return <TabPanel key={i} value={value} index={i}>
                <Container maxWidth='lg'>
                    <SimpleMDE events={{'drop': handleDrop}} />
                </Container>
            </TabPanel>
        });
    }

    function updateTabHead(tabInfo) {
        return Object.keys(tabInfo).map((value, i) => {
            return <Tab
                onDoubleClick={handleOnDoubleClick}
                label={tabInfo[value]}
                key={i}
                {...a11yProps(i)}
            />
        });
    }

    const classes = useStyles();
    return(
        <React.Fragment>
            <Header />
            <InputModal
                open={open}
                onClose={() => {handleClose(tabInfo[value], value)}}
                tabName={tabInfo[value]}
                index={value}
            />
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label='simple tab example'
                variant='scrollable'
            >
                {updateTabHead(tabInfo)}
                <ButtonInTabs onClick={handleClick}>
                    NewTab
                </ButtonInTabs>
            </Tabs>

            <React.Fragment>
                {updateTabList(tabInfo)}
            </React.Fragment>

        </React.Fragment>
    );
}
