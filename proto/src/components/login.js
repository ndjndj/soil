import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Login() {
    return (
        <Box component="form" noValidate>
            <TextField
                required
                fullWidth

            />

        </Box>

    );
}
