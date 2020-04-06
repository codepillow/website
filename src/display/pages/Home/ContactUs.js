import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';

const ContactUs = () => {
	return (
		<Grid container spacing={2} style={{marginTop: 10}} align="center">
			<Grid item md={12}>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Let's talk!
				</Typography>
                <Typography variant="subtitle1" align="center" style={{width: "75%"}} component="p" gutterBottom>
                    Let's discuss what you need and how we can help you!
                </Typography>
			</Grid>
            <Grid item md={12}>
                <FormControl fullWidth>
                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{marginTop: 10}} />
                    <TextField id="outlined-basic" label="How can we help you?" variant="outlined" multiline rows="4" style={{marginTop: 10}} />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="I agree to receive information about promotions and special offers."
                    />
                    <FormControlLabel control={<Checkbox name="checkedC" color="primary" />} label="I agree to the processing of my personal data in accordance with the Privacy Policy." />
                </FormControl>
                <Button variant="contained" color="primary" disableElevation>
                    Submit
                </Button>
            </Grid>
		</Grid>
	);
}

export default ContactUs;
