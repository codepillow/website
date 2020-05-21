import React from "react";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import glovo from '../../../data/glovo.svg';
import binance from '../../../data/binance.svg';
import uber from '../../../data/uber.svg';
import starbucks from '../../../data/starbucks.svg';

const Clients = () => {
	return (
		<Box my={12} id="clients">
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
		            <Grid item xs={12} md={3} sm={4}>
						<img src={glovo} height="80"/>
					</Grid>
		            <Grid item xs={12} md={3} sm={4}>
						<img src={binance}  height="36"/>
					</Grid>
		            <Grid item xs={12} md={3} sm={4}>
						<img src={uber}  height="30"/>
					</Grid>
		            <Hidden smDown>
		                <Grid item  md={3}>
							<img src={starbucks}  height="50"/>
		    			</Grid>
		            </Hidden>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Clients;
