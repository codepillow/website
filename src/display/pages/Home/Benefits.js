import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CodeIcon from '@material-ui/icons/Code';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import BrushIcon from '@material-ui/icons/Brush';
import arrow from '../../../data/arrow.svg';

const Benefits = () => {
	return (
		<Grid container spacing={2} style={{marginTop: 10}} align="center">
			<Grid item md={12}>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Why do you need to select us?
				</Typography>
			</Grid>
			<Grid item md={2}>
				<CodeIcon color="primary" fontSize="large" />
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Engineering
				</Typography>
				<Typography variant="subtitle1" align="center" component="p">
					We have a lot of technology in our hands
				</Typography>
			</Grid>
			<Grid item md={3} justify="center">
				<img src={arrow} />
			</Grid>
			<Grid item md={2}>
				<TouchAppIcon color="primary" fontSize="large" />
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Usability
				</Typography>
				<Typography variant="subtitle1" align="center" component="p">
					It's important to us that the interface doesn't worry the user
				</Typography>
			</Grid>
			<Grid item md={3}>
				<img src={arrow} style={{transform: 'scaleY(-1)'}} />
			</Grid>
			<Grid item md={2}>
				<BrushIcon color="primary" fontSize="large" />
				<Typography variant="h5" align="center" component="h3" gutterBottom>
				  	Solid Design
				</Typography>
				<Typography variant="subtitle1" align="center" component="p">
				 	Our design doesn't get out of date in a week
				</Typography>
			</Grid>
		</Grid>
	);
}

export default Benefits;
