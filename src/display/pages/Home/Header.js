import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import ScrollAnimation from 'react-animate-on-scroll';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import CodeIcon from '@material-ui/icons/Code';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import BrushIcon from '@material-ui/icons/Brush';
import headerImg from '../../../data/header.svg';
import first from '../../../data/backs/1.svg';
import second from '../../../data/backs/2.svg';

const Header = () => {
	const firstStyle = {
		position: "absolute",
		backgroundImage: `url(${first})`,
		height: "500px",
		width: "250px",
		zIndex: "-1",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		top: 100,
		right: 0
	}

	const secondStyle = {
		position: "absolute",
		backgroundImage: `url(${second})`,
		height: "700px",
		width: "300px",
		zIndex: "-1",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		top: "60%",
		left: 0
	}

	return (
		<ScrollableAnchor id="header">
			<Box height="100vh" display="flex" justify="center">
				<span style={firstStyle} />
				<span style={secondStyle} />
				<Grid container alignItems="center" justify="center" spacing={2}>
					<Grid item md={6} xs={12} sm={12}>
						<ScrollAnimation animateIn="fadeIn">
							<Typography variant="h2" component="h1">
								We turn you ideas into <span style={styles.highlighter}>beautiful</span> products
							</Typography>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" delay={200}>
							<Typography variant="subtitle1" component="p" gutterBottom>
								And we dream of making a project for you!
							</Typography>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" delay={250}>
							<Button variant="contained" color="primary" disableElevation style={{marginTop: 25}}>
								Start out
							</Button>
						</ScrollAnimation>
					</Grid>
					<Grid item md={6} xs={12} sm={8}>
						<ScrollAnimation animateIn="fadeIn">
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
