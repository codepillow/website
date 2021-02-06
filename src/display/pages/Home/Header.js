import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-scroll-parallax';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

import headerImg from '../../../data/header.svg';
import first from '../../../data/backs/1.svg';
import second from '../../../data/backs/2.svg';

const useStyles = makeStyles((theme) => ({
  shape: {
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
		position: "absolute",
		right: 0,
		top:0
	}

	const secondStyle = {
		position: "absolute",
		top: "40%",
		left: 0
	}

	return (
		<ScrollableAnchor id="header">
			<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
				<Box height="100vh" pt={6} display="flex" justify="center">
					<Parallax y={[50, -50]} styleInner={firstStyle}>
						<img alt="first" src={first} className={classes.shape} />
					</Parallax>
					<Parallax y={[100, 0]} styleInner={secondStyle} >
						<img alt="second" src={second} className={classes.shape} />
					</Parallax>
					<Grid container alignItems="center" justify="center" spacing={2}>

						<Grid item md={6} xs={12} sm={12}>
							<Typography variant="h2" component="h1">
								We turn your ideas into <span style={styles.highlighter}>beautiful</span> products
							</Typography>
							<Typography variant="subtitle1" component="p" gutterBottom>
                                And we are ready to collaborate with you!
							</Typography>
							<Button variant="contained" href="#contact" color="primary" disableElevation style={{marginTop: 25}}>
								Start out
							</Button>
						</Grid>
						<Grid item md={6} xs={12} sm={8}>
							<img alt="headerImg" src={headerImg} width="100%" />
						</Grid>
					</Grid>
				</Box>
			</ScrollAnimation>
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
