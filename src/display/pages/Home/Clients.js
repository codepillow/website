import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import glovo from '../../../data/glovo.svg';
import binance from '../../../data/binance.svg';
import uber from '../../../data/uber.svg';
import starbucks from '../../../data/starbucks.svg';
import fourth from '../../../data/backs/4.svg';

const useStyles = makeStyles((theme) => ({
  shape: {
  	zIndex: "-1",
    [theme.breakpoints.down('md')]: {
      opacity: "0.4"
    }
  },
}));

const Clients = () => {
	const classes = useStyles();

	const fourthStyle = {
		position: "absolute",
		right: 0
	}

	return (
		<ScrollableAnchor id={'clients'}>
		<Box my={12}>
			<Parallax y={[50, -50]} styleInner={fourthStyle}>
				<img alt="fourth" src={fourth} className={classes.shape} />
			</Parallax>
			<Grid container spacing={4} style={{marginTop: 10}} align="center">
				<Grid item md={12}>
					<Typography variant="h3" align="center" component="h2" gutterBottom>
						Clients we work with
					</Typography>
	                <Typography variant="subtitle1" align="center" style={{width: "75%"}} component="p" gutterBottom>
                        We work with companies that need a reliable partner in the software development field. We dive into their business process to provide them the best solutions.
                    </Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2} align="center">
	            <Grid item xs={12} md={3} sm={6}>
	            	<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<img alt="glovo" src={glovo} height="80"/>
					</ScrollAnimation>
				</Grid>
	            <Grid item xs={12} md={3} sm={6}>
		            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
						<img alt="binance" src={binance}  height="36"/>
					</ScrollAnimation>
				</Grid>
	            <Grid item xs={12} md={3} sm={6}>
		            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={250}>
						<img alt="uber" src={uber}  height="30"/>
					</ScrollAnimation>
				</Grid>
                <Grid item xs={12} md={3} sm={6}>
                	<ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
						<img alt="starbucks" src={starbucks}  height="50"/>
					</ScrollAnimation>
    			</Grid>
			</Grid>
		</Box>
		</ScrollableAnchor>
	);
}

export default Clients;
