import React, {useState} from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor'

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Project from '../../components/Project';
import Box from '@material-ui/core/Box';

import { withStyles } from '@material-ui/core/styles';


const FieldButton = withStyles(theme => ({
	root: {
		textTransform: 'uppercase',
		padding: 0,
		paddingLeft: 5,
		paddingRight: 5,
		margin: 5,
		marginLeft: 10,
		minHeight: 0,
		minWidth: 0,
		marginRight: 10,
		letterSpacing: "0.75px"
	},
	contained: {
		color: theme.palette.primary.main,
		background: theme.palette.primary.transparent.light,
		'&:hover': {
			background: theme.palette.primary.transparent.dark,
		},
	},
}))(Button);

const Fields = () => {
	const defaultFields = [
		{
			button: "Web",
			header: "Frontend & Backend development",
			description: "Web development was an initial branch of our team. We've created lots of big and cool projects. Take a look at them in detail.",
			project: {
				poster: "https://www.free-mockup.com/wp-content/uploads/edd/2020/02/isometric-surface-laptop-3-free-mockup-1000x750.jpg",
				title: "Project",
				description: "Above all, we are engineers, and our mission is to find the most elegant and economical solutions to"
			}
		},
		{
			button: "Mobile",
			header: "Mobile applications",
			description: "We've huge expertise in mobile application development. Research our stages of the development process and check the best case studies we've done.",
			project: {
				poster: "https://www.free-mockup.com/wp-content/uploads/edd/2020/03/Free-Responsive-Website-Mockup-01.jpg",
				title: "Project",
				description: "Above all, we are engineers, and our mission is to find the most elegant and economical solutions to"
			}
		},
		{
			button: "Blockchain",
			header: "Blockchain technologies",
			description: "Our passion for a few last years was the Blockchain industry. We've created coins, tokens, and all kinds of infrastructure for kicking out new crypto solutions.",
			project: {
				poster: "https://www.free-mockup.com/wp-content/uploads/edd/2020/02/apple-imac-pro-front-view-mockup-1000x750.jpg",
				title: "Project",
				description: "Above all, we are engineers, and our mission is to find the most elegant and economical solutions to"
			}
		},
		{
			button: "AI",
			header: "Artificial Intelligence development",
			description: "Technologies of the future begins growth nowadays. We provide our AI expertise to varieties of startups and prospective research projects.",
			project: {
				poster: "https://www.free-mockup.com/wp-content/uploads/edd/2020/02/macbook-pro-workspace-mockup-1000x750.jpg",
				title: "Project",
				description: "Above all, we are engineers, and our mission is to find the most elegant and economical solutions to"
			}
		},
	];
	const [activeField, setActiveField] = useState(0);

	return (
		<ScrollableAnchor id={'fields'}>
			<Box my={12}>
			<ScrollAnimation animateIn="fadeIn" animateOnce="true" delay="200">
				<Grid container spacing={2} style={{marginTop: 10}} align="center">
					<Grid item md={12}>
						<Typography variant="h3" align="center" component="h2" gutterBottom>
							Our fields of knowledge
						</Typography>
		                <Typography variant="subtitle1" align="center" style={{width: "75%"}} component="p" gutterBottom>
		                </Typography>
					</Grid>
				</Grid>
				<Grid container spacing={5} alignItems="center">
					<Grid item xs={12} md={12} align="center">
						{
							defaultFields.map((field, index) => {
								return <FieldButton small variant={activeField == index ? "contained" : "text"} color="primary" disableElevation onClick={() => setActiveField(index)}>
											{field.button}
										</FieldButton>
							})
						}
					</Grid>
		            <Grid item xs={12} md={6}>
						<Typography variant="h5" component="h3" gutterBottom>
							{defaultFields[activeField].header}
						</Typography>
						<Typography variant="subtitle1" component="p" gutterBottom>
							{defaultFields[activeField].description}
						</Typography>
						<Button variant="contained" color="primary" disableElevation>
							Find more
						</Button>
					</Grid>
		            <Grid item xs={12} md={6}>
						<Project data={defaultFields[activeField].project} />
					</Grid>
				</Grid>
			</ScrollAnimation>
			</Box>
		</ScrollableAnchor>
	);
}

export default Fields;
