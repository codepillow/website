import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CodeIcon from '@material-ui/icons/Code';

const Team = () => {
	return (
		<Grid container spacing={2} style={{marginTop: 10}} align="center">
			<Grid item md={12}>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
                    Our team
				</Typography>
                <Typography variant="subtitle1" align="center" component="p" style={{width: "75%"}} gutterBottom>
                    We work with companies that need a reliable partner in software engineering. We dive into all business process to provide the best solutions for our customers.
                </Typography>
			</Grid>
            <Grid item xs={12} md={4}>
				<CodeIcon color="primary" fontSize="large" />
				<Typography variant="h5" align="center" component="h3" gutterBottom>
                    Volodymyr Biloshytskyi
				</Typography>
				<Typography variant="subtitle2" align="center" component="p">
                    Lya kakoi dadya, nu ti posmotri
				</Typography>
			</Grid>
            <Grid item xs={12} md={4}>
				<CodeIcon color="primary" fontSize="large" />
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Oleh Basystiuk
				</Typography>
				<Typography variant="subtitle2" align="center" component="p">
                    Lya kakoi dadya, nu ti posmotri
				</Typography>
			</Grid>
            <Grid item xs={12} md={4}>
				<CodeIcon color="primary" fontSize="large" />
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Oleh Nykoliak
				</Typography>
				<Typography variant="subtitle2" align="center" component="p">
                    Lya kakoi dadya, nu ti posmotri
				</Typography>
			</Grid>
		</Grid>
	);
}

export default Team;
