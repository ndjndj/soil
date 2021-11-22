

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                        <React.Fragment>{children}</React.Fragment>
                </Box>
            )}
        </div>
    );
}
