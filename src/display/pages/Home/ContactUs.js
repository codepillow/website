import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';
import fifth from '../../../data/backs/5.svg';
import sixth from '../../../data/backs/6.svg';

const ContactUs = () => {
    const fifthStyle = {
        position: "absolute",
        backgroundImage: `url(${fifth})`,
        height: "500px",
        width: "250px",
        zIndex: "-1",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        left: 0
    }

    const sixthStyle = {
        position: "absolute",
        backgroundImage: `url(${sixth})`,
        height: "500px",
        width: "250px",
        zIndex: "-1",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        right: 0
    }

    return (
        <ScrollableAnchor id={'contact'}>
            <Box my={12}>
                <span style={fifthStyle} />
                <span style={sixthStyle} />
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
        </ScrollableAnchor>
    );
}

export default ContactUs;
