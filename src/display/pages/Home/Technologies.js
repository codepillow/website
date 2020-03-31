import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import react from '../../../data/react.svg';
import redux from '../../../data/redux.svg';
import swift from '../../../data/swift.svg';
import kotlin from '../../../data/kotlin.svg';
import laravel from '../../../data/laravel.svg';
import angular from '../../../data/angular.svg';

const Technologies = () => {
	return (
		<Grid container spacing={4} style={{marginTop: 10}} align="center">
			<Grid item md={12}>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Technologies that we use
				</Typography>
                <Typography variant="subtitle1" align="center" component="p" style={{width: "75%"}} gutterBottom>
                    We work with companies that need a reliable partner in software development field. We dive into their business process and help them create the best solutions.
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
	);
}

export default Technologies;
