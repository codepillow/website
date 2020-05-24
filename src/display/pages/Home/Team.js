import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import volbil from '../../../data/volbil.svg';
import olexb from '../../../data/olexb.svg';
import olexh from '../../../data/olexh.svg';

const Team = () => {
	return (
		<ScrollableAnchor id={'team'}>
		<Box my={12}>
			<Grid container spacing={2} style={{marginTop: 10}} align="center">
				<Grid item md={12}>
					<Typography variant="h3" align="center" component="h2" gutterBottom>
	                    Our team
					</Typography>
	                <Typography variant="subtitle1" align="center" component="p" style={{width: "75%"}} gutterBottom>
	                    We work with companies that need a reliable partner in software engineering. We dive into all business process to provide the best solutions for our customers.
	                </Typography>
				</Grid>
	            <Grid item xs={12} md={4} sm={4}>
					<ScrollAnimation animateIn="fadeIn" animateOnce="true">
						<img src={volbil} height="200"/>
						<Typography variant="h5" align="center" component="h3" gutterBottom>
		                    Volodymyr Biloshytskyi
						</Typography>
						<Typography variant="subtitle2" align="center" component="p">
							Software Engineer
						</Typography>
					</ScrollAnimation>
				</Grid>
	            <Grid item xs={12} md={4} sm={4}>
					<ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={200}>
						<img src={olexb} height="200"/>
						<Typography variant="h5" align="center" component="h3" gutterBottom>
							Oleh Basystiuk
						</Typography>
						<Typography variant="subtitle2" align="center" component="p">
		                    Software Engineer
						</Typography>
					</ScrollAnimation>
				</Grid>
	            <Grid item xs={12} md={4} sm={4}>
					<ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={250}>
						<img src={olexh} height="200"/>
						<Typography variant="h5" align="center" component="h3" gutterBottom>
							Oleh Nykoliak
						</Typography>
						<Typography variant="subtitle2" align="center" component="p">
		                    Software Engineer
						</Typography>
					</ScrollAnimation>
				</Grid>
			</Grid>
		</Box>
		</ScrollableAnchor>
	);
}

export default Team;
