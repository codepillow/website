import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundSize: "100%",
		backgroundPosition: "center",
		height: "100%",
		width: "100%",
		color: "white",
		padding: 10,
		paddingTop: "35%"
	}
}));


const Project = ({data}) => {
	const classes = useStyles();

	return (
		<Paper elevation={0} className={classes.root} style={{backgroundImage: `url(${data.poster})`}}>
			<Typography variant="h3" component="h2" gutterBottom>
				{data.title}
			</Typography>
			<Typography variant="subtitle1" color="inherit" component="p" gutterBottom>
				{data.description}
            </Typography>
		</Paper>
	);
}

export default Project;
