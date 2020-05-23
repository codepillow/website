import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';

import CodeIcon from '@material-ui/icons/Code';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import BrushIcon from '@material-ui/icons/Brush';
import arrow from '../../../data/arrow.svg';

const Benefits = () => {
	return (
		<ScrollableAnchor id={'process'}>
			<Box mb={12}>
				<Grid container spacing={2} align="center" style={{marginTop: 10}}>
					<Grid item md={12} sm={12} xs={12}>
						<Typography variant="h3" align="center" component="h2" gutterBottom>
							Why do <span style={styles.highlighter}>you</span> need to select us?
						</Typography>
					</Grid>
				</Grid>
				<Grid container align="center" alignItems="center">
					<Grid item md={2} sm={4} xs={12}>
						<ScrollAnimation animateIn="fadeIn">
							<BrushIcon color="primary" fontSize="large" />
							<Typography variant="h5" align="center" component="h3" gutterBottom>
							  	Solid Design
							</Typography>
							<Typography variant="subtitle2" align="center" component="p">
							 	Our design doesn't get out of date in a week
							</Typography>
						</ScrollAnimation>
					</Grid>
					<Hidden smDown>
						<Grid item md={3} justify="center">
							<img src={arrow} />
						</Grid>
					</Hidden>
					<Grid item md={2} sm={4} xs={12}>
						<ScrollAnimation animateIn="fadeIn" delay={200}>
							<TouchAppIcon color="primary" fontSize="large" />
							<Typography variant="h5" align="center" component="h3" gutterBottom>
								Usability
							</Typography>
							<Typography variant="subtitle2" align="center" component="p">
								It's important to us that the interface doesn't worry the user
							</Typography>
						</ScrollAnimation>
					</Grid>
					<Hidden smDown>
						<Grid item md={3}>
							<img src={arrow} style={{transform: 'scaleY(-1)'}} />
						</Grid>
					</Hidden>
					<Grid item md={2} sm={4} xs={12}>
					<ScrollAnimation animateIn="fadeIn" delay={250}>
							<CodeIcon color="primary" fontSize="large" />
							<Typography variant="h5" align="center" component="h3" gutterBottom>
								Engineering
							</Typography>
							<Typography variant="subtitle2" align="center" component="p">
								We have a lot of technology in our hands
							</Typography>
						</ScrollAnimation>
					</Grid>
				</Grid>
			</Box>
		</ScrollableAnchor>
	);
}

const styles = {
	highlighter: {
		backgroundColor: "#FFED4F",
		paddingLeft: 5,
		paddingRight: 5
	}
}

export default Benefits;
