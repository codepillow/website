import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CodeIcon from '@material-ui/icons/Code';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import BrushIcon from '@material-ui/icons/Brush';
import headerImg from '../../../data/header.svg';

const Header = () => {
	return (
		<Grid container alignItems="center" justify="center" spacing={2}>
			<Grid item md={6} xs={12} sm={12}>
				<Typography variant="h2" component="h1">
					We turn you ideas into beautiful products
				</Typography>
				<Typography variant="subtitle1" component="p" gutterBottom>
					Identity for a young digital product developer
				</Typography>
				<Button variant="contained" color="primary" disableElevation>
					Start out
				</Button>
			</Grid>
			<Grid item md={6} xs={12} sm={8}>
				<img src={headerImg} width="100%" />
			</Grid>
		</Grid>
	);
}

export default Header;
