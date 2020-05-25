import React, { useState } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Parallax } from 'react-scroll-parallax';
import { TelegramClient } from 'messaging-api-telegram';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import fifth from '../../../data/backs/5.svg';
import sixth from '../../../data/backs/6.svg';

const useStyles = makeStyles((theme) => ({
  shape: {
      zIndex: "-1",
    [theme.breakpoints.down('md')]: {
      opacity: "0.4"
    }
  },
}));

const ContactUs = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const client = TelegramClient.connect('1271608160:AAFsBwEPR2wlfzKHJaunbB6p5YPPBo1wqWk');

    const fifthStyle = {
        position: "absolute",
        left: 0
    }

    const sixthStyle = {
        position: "absolute",
        right: 0
    }

    const sendFeedback = () => {
        client.sendMessage("555194650", `Email: ${email}\nMessage: ${message}`);
    }

    return (
        <ScrollableAnchor id={'contact'}>
            <Box my={12}>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
                    <Parallax y={[100, -50]} styleInner={fifthStyle}>
                        <img alt="fifth" src={fifth} className={classes.shape} />
                    </Parallax>
                    <Parallax y={[100, 0]} styleInner={sixthStyle} >
                        <img alt="sixth" src={sixth} className={classes.shape} />
                    </Parallax>
                    <form onSubmit={sendFeedback}>
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
                                <Button variant="outlined" color="primary" href="mailto:codepillow@pm.me" fullWidth>codepillow@pm.me</Button>
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="left">
                                <Button variant="outlined" color="primary" href="tel:380636882383" fullWidth>+380 63 688 23 83</Button>
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="left">
                                <TextField required id="outlined-basic" onChange={(e) => setEmail(e.target.value)} value={email} type="email" label="Email" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="left">
                                <TextField required id="outlined-basic"  onChange={(e) => setMessage(e.target.value)} value={message} label="How can we help you?" variant="outlined" multiline rows="4" style={{marginTop: 10}} fullWidth />
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="left">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="offers"
                                            color="primary"
                                        />
                                    }
                                    label="I agree to receive information about promotions and special offers."
                                />
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="left">
                                <FormControlLabel control={<Checkbox required name="policy" color="primary" />} label="I agree to the processing of my personal data in accordance with the Privacy Policy." />
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="center">
                                <Button variant="contained" color="primary" type="submit" disableElevation >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </ScrollAnimation>
            </Box>
        </ScrollableAnchor>
    );
}

export default ContactUs;
