import React from "react";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

const Clients = () => {
	return (
		<Grid container spacing={2} style={{marginTop: 10}} align="center">
			<Grid item md={12}>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Clients we work with
				</Typography>
                <Typography variant="subtitle1" align="center" style={{width: "75%"}} component="p" gutterBottom>
                    We work with companies that need a reliable partner in software development field. We dive into their business process to provide them the best solutions.
                </Typography>
			</Grid>
            <Grid item xs={4} md={3}>
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Client
				</Typography>
			</Grid>
            <Grid item xs={4} md={3}>
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Client
				</Typography>
			</Grid>
            <Grid item xs={4} md={3}>
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Client
				</Typography>
			</Grid>
            <Hidden smDown>
                <Grid item  md={3}>
    				<Typography variant="h5" align="center" component="h3" gutterBottom>
    					Client
    				</Typography>
    			</Grid>
            </Hidden>
		</Grid>
	);
}

export default Clients;
