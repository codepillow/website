import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Technologies = () => {
	return (
		<Grid container spacing={2} style={{marginTop: 10}} align="center">
			<Grid item md={12}>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Technologies that we use
				</Typography>
                <Typography variant="subtitle1" align="center" component="p" gutterBottom>
                    We work with companies that need a reliable partner in software development field. We dive into their business process and help them create the best solutions.
                </Typography>
			</Grid>
            <Grid item xs={4} md={2}>
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Tech
				</Typography>
			</Grid>
            <Grid item xs={4} md={2}>
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Tech
				</Typography>
			</Grid>
            <Grid item xs={4} md={2}>
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Tech
				</Typography>
			</Grid>
            <Grid item xs={4} md={2}>
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Tech
				</Typography>
			</Grid>
            <Grid item xs={4} md={2}>
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Tech
				</Typography>
			</Grid>
            <Grid item xs={4} md={2}>
				<Typography variant="h5" align="center" component="h3" gutterBottom>
				    Tech
				</Typography>
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
