import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor'
import Tooltip from '@material-ui/core/Tooltip';
import { Parallax } from 'react-scroll-parallax';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import react from '../../../data/react.svg';
import redux from '../../../data/redux.svg';
import swift from '../../../data/swift.svg';
import kotlin from '../../../data/kotlin.svg';
import laravel from '../../../data/laravel.svg';
import angular from '../../../data/angular.svg';
import third from '../../../data/backs/3.svg';

const useStyles = makeStyles((theme) => ({
  shape: {
  	zIndex: "-1",
    [theme.breakpoints.down('md')]: {
      opacity: "0.4"
    }
  },
}));

const Technologies = () => {
	const classes = useStyles();

	const thirdStyle = {
		position: "absolute",
		left: 0
	}

	return (
		<ScrollableAnchor id={'technologies'}>
			<Box my={12}>
				<Parallax y={[150, 0]} styleInner={thirdStyle}>
					<img src={third} className={classes.shape} />
				</Parallax>
				<Grid container spacing={4} style={{marginTop: 10}} align="center">
					<Grid item md={12}>
						<Typography variant="h3" align="center" component="h2" gutterBottom>
							Technologies we use
						</Typography>
		                <Typography variant="subtitle1" align="center" component="p" style={{width: "75%"}} gutterBottom>
                            Above all, we are engineers, and our mission is to find the most elegant and economical solutions for business problems. In our work we use various tools, technologies, and programming languages, the main of them listed belowe.
		                </Typography>
					</Grid>
		            <Grid item xs={4} md={2}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                            <Tooltip title="React" placement="top">
    						    <img src={react} height="70"/>
                            </Tooltip>
                        </ScrollAnimation>
					</Grid>
		            <Grid item xs={4} md={2}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={200}>
                            <Tooltip title="Redux" placement="top">
        						<img src={redux} height="60"/>
                            </Tooltip>
                        </ScrollAnimation>
					</Grid>
		            <Grid item xs={4} md={2}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={250}>
                            <Tooltip title="Swift" placement="top">
        						<img src={swift} height="60"/>
                            </Tooltip>
                        </ScrollAnimation>
					</Grid>
		            <Grid item xs={4} md={2}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={300}>
                            <Tooltip title="Kotlin" placement="top">
        						<img src={kotlin} height="60"/>
                            </Tooltip>
                        </ScrollAnimation>
					</Grid>
		            <Grid item xs={4} md={2}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={350}>
                            <Tooltip title="Laravel" placement="top">
                                <img src={laravel} height="60"/>
                            </Tooltip>
                        </ScrollAnimation>
					</Grid>
		            <Grid item xs={4} md={2}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={400}>
                            <Tooltip title="Angular" placement="top">
        						<img src={angular} height="60"/>
                            </Tooltip>
                        </ScrollAnimation>
					</Grid>
		            <Grid item xs>
		                <Button variant="outlined" color="primary">
		                    See more
		                </Button>
		            </Grid>
				</Grid>
			</Box>
		</ScrollableAnchor>
	);
}

export default Technologies;
