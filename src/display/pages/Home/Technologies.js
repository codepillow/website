import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

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
  	position: "absolute",
  	zIndex: "-1",
    [theme.breakpoints.down('md')]: {
      opacity: "0.4"
    }
  },
}));

const Technologies = () => {
	const classes = useStyles();

	const thirdStyle = {
		content: `url(${third})`,
		left: 0
	}

	return (
		<ScrollableAnchor id={'technologies'}>
			<Box my={12}>
				<span style={thirdStyle} className={classes.shape} />
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
						<img src={react} height="70"/>
					</Grid>
		            <Grid item xs={4} md={2}>
						<img src={redux} height="60"/>
					</Grid>
		            <Grid item xs={4} md={2}>
						<img src={swift} height="60"/>
					</Grid>
		            <Grid item xs={4} md={2}>
						<img src={kotlin} height="60"/>
					</Grid>
		            <Grid item xs={4} md={2}>
						<img src={laravel} height="60"/>
					</Grid>
		            <Grid item xs={4} md={2}>
						<img src={angular} height="60"/>
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
