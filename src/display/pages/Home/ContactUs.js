import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';

const ContactUs = () => {
    return (
        <Box my={12} id="contact">
            <Grid container spacing={2} style={{marginTop: 10}} justify="center">
                <Grid item md={7} xs={12} sm={12} align="center">
                    <Typography variant="h3" align="center" component="h2" gutterBottom>
                        Let's talk!
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{width: "75%"}} component="p" gutterBottom>
                        Let's discuss what you need and how we can help you!
                    </Typography>
                </Grid>
                 <Grid item md={7} xs={12} sm={12} align="left">
                    <Button variant="outlined" color="primary" fullWidth>Some button</Button>
                </Grid>
                <Grid item md={7} xs={12} sm={12} align="left">
                    <Button variant="outlined" color="primary" fullWidth>+380 63 688 23 83</Button>
                </Grid>
                <Grid item md={7} xs={12} sm={12} align="left">
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                </Grid>
                <Grid item md={7} xs={12} sm={12} align="left">
                    <TextField id="outlined-basic" label="How can we help you?" variant="outlined" multiline rows="4" style={{marginTop: 10}} fullWidth />
                </Grid>
                <Grid item md={7} xs={12} sm={12} align="left">
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="I agree to receive information about promotions and special offers."
                    />
                </Grid>
                <Grid item md={7} xs={12} sm={12} align="left">
                    <FormControlLabel control={<Checkbox name="checkedC" color="primary" />} label="I agree to the processing of my personal data in accordance with the Privacy Policy." />
                </Grid>
                <Grid item md={7} xs={12} sm={12} align="center">
                    <Button variant="contained" color="primary" disableElevation>
                        Submit
                    </Button>
                </Grid>
            </Grid>
            </Box>
    );
}

export default ContactUs;
