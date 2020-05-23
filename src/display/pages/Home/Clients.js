import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor'

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import glovo from '../../../data/glovo.svg';
import binance from '../../../data/binance.svg';
import uber from '../../../data/uber.svg';
import starbucks from '../../../data/starbucks.svg';
import fourth from '../../../data/backs/4.svg';

const Clients = () => {
	const fourthStyle = {
		position: "absolute",
		backgroundImage: `url(${fourth})`,
		height: "500px",
		width: "250px",
		zIndex: "-1",
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
		right: 0
	}

	return (
		<ScrollableAnchor id={'clients'}>
		<Box my={12}>
			<span style={fourthStyle} />
			<Grid container spacing={4} style={{marginTop: 10}} align="center">
				<Grid item md={12}>
					<Typography variant="h3" align="center" component="h2" gutterBottom>
						Clients we work with
					</Typography>
	                <Typography variant="subtitle1" align="center" style={{width: "75%"}} component="p" gutterBottom>
	                    We work with companies that need a reliable partner in software development field. We dive into their business process to provide them the best solutions.
	                </Typography>
				</Grid>
				<Grid container spacing={2}   alignItems="center">
		            <Grid item xs={12} md={3} sm={6}>
		            	<ScrollAnimation animateIn="fadeIn">
							<img src={glovo} height="80"/>
						</ScrollAnimation>
					</Grid>
		            <Grid item xs={12} md={3} sm={6}>
			            <ScrollAnimation animateIn="fadeIn" delay={200}>
							<img src={binance}  height="36"/>
						</ScrollAnimation>
					</Grid>
		            <Grid item xs={12} md={3} sm={6}>
			            <ScrollAnimation animateIn="fadeIn" delay={250}>
							<img src={uber}  height="30"/>
						</ScrollAnimation>
					</Grid>
	                <Grid item xs={12} md={3} sm={6}>
	                	<ScrollAnimation animateIn="fadeIn" delay={300}>
							<img src={starbucks}  height="50"/>
						</ScrollAnimation>
	    			</Grid>
				</Grid>
			</Grid>
		</Box>
		</ScrollableAnchor>
	);
}

export default Clients;
