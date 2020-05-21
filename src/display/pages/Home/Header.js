import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import CodeIcon from '@material-ui/icons/Code';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import BrushIcon from '@material-ui/icons/Brush';
import headerImg from '../../../data/header.svg';

const Header = () => {
	return (
		<Box my={12}>
			<Grid container alignItems="center" justify="center" spacing={2}>
				<Grid item md={6} xs={12} sm={12}>
					<Typography variant="h2" component="h1">
						We turn you ideas into <span style={styles.highlighter}>beautiful</span> products
					</Typography>
					<Typography variant="subtitle1" component="p" gutterBottom>
						And we dream of making a project for you!
					</Typography>
					<Button variant="contained" color="primary" disableElevation style={{marginTop: 25}}>
						Start out
					</Button>
				</Grid>
				<Grid item md={6} xs={12} sm={8}>
					<img src={headerImg} width="100%" />
				</Grid>
			</Grid>
		</Box>
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
