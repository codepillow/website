import React, {useState} from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Project from '../../components/Project';
import Box from '@material-ui/core/Box';

import karbonara from "../../../data/karbonara-artboard.jpg"
import microbitcoin from "../../../data/microbitcoin-artboard.jpg"
import aok from "../../../data/aok-artboard.png"
import harry from "../../../data/harry-artboard.jpg"

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
				poster: karbonara,
				title: "Karbonara – Online Marketplace",
				description: "Online marketplace, where you can sell goods and services using cryptocurrency called Karbo."
			}
		},
		{
			button: "Mobile",
			header: "Mobile applications",
			description: "We've huge expertise in mobile application development. Research our stages of the development process and check the best case studies we've done.",
			project: {
				poster: aok,
				title: "AOK - Blockchain-based Platform",
				description: "Secure Proof-of-Stake Blockchain technology that reorganizes the world distribution industry."
			}
		},
		{
			button: "Blockchain",
			header: "Blockchain technologies",
			description: "Our passion for a few last years was the Blockchain industry. We've created coins, tokens, and all kinds of infrastructure for kicking out new crypto solutions.",
			project: {
				poster: microbitcoin,
				title: "MicroBitcoin – Payment Protocol",
				description: "Payments protocol built on blockchain technology, with decentralization and peer-to-peer payments."
			}
		},
		{
			button: "AI",
			header: "Artificial Intelligence development",
			description: "Technologies of the future begins growth nowadays. We provide our AI expertise to varieties of startups and prospective research projects.",
			project: {
				poster: harry,
				title: "Harry Bot - Speech-to-Text Bot",
				description: "Bot translates the voice messages into text in popular messengers. Participator of Y Combinator Startup School Batch."
			}
		},
	];
	const [activeField, setActiveField] = useState(0);

	return (
		<ScrollableAnchor id={'fields'}>
			<Box my={12}>
				<ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
					<Grid container spacing={2} style={{marginTop: 10}} align="center">
						<Grid item md={12}>
							<Typography variant="h3" align="center" component="h2" gutterBottom>
								Our fields of knowledge
							</Typography>
			                <Typography variant="subtitle1" align="center" style={{width: "75%"}} component="p" gutterBottom>
			                </Typography>
						</Grid>
					</Grid>
					<Grid container spacing={2} alignItems="center">
						<Grid item xs={12} md={12} align="center">
							{
								defaultFields.map((field, index) => {
									return <FieldButton key={index} size="small" variant={activeField === index ? "contained" : "text"} color="primary" disableElevation onClick={() => setActiveField(index)}>
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
							<Button disabled variant="contained" color="primary" disableElevation>
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
