import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import ScrollAnimation from 'react-animate-on-scroll';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

import CodeIcon from '@material-ui/icons/Code';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import BrushIcon from '@material-ui/icons/Brush';
import headerImg from '../../../data/header.svg';
import first from '../../../data/backs/1.svg';
import second from '../../../data/backs/2.svg';

const useStyles = makeStyles((theme) => ({
  shape: {
  	position: "absolute",
  	zIndex: "-1",
    [theme.breakpoints.down('xs')]: {
      visibility: "hidden"
    },
    [theme.breakpoints.down('md')]: {
      opacity: "0.4"
    }
  },
}));

const Header = () => {
	const classes = useStyles();

	const firstStyle = {
		content: `url(${first})`,
		top: 0,
		right: 0
	}

	const secondStyle = {
		content: `url(${second})`,
		top: "60%",
		left: 0
	}

	return (
		<ScrollableAnchor id="header">
			<Box height="100vh" pt={6} display="flex" justify="center">
				<span style={firstStyle} className={classes.shape} />
				<span style={secondStyle} className={classes.shape} />
				<Grid container alignItems="center" justify="center" spacing={2}>
					<Grid item md={6} xs={12} sm={12}>
						<ScrollAnimation animateIn="fadeIn" animateOnce="true">
							<Typography variant="h2" component="h1">
								We turn you ideas into <span style={styles.highlighter}>beautiful</span> products
							</Typography>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={200}>
							<Typography variant="subtitle1" component="p" gutterBottom>
								And we dream of collaborating with you!
							</Typography>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={250}>
							<Button variant="contained" href="#contact" color="primary" disableElevation style={{marginTop: 25}}>
								Start out
							</Button>
						</ScrollAnimation>
					</Grid>
					<Grid item md={6} xs={12} sm={8}>
						<ScrollAnimation animateIn="fadeIn" animateOnce="true">
							<img src={headerImg} width="100%" />
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

export default Header;
