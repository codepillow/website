import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor'
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import { Parallax } from 'react-scroll-parallax';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import alphacon from '../../../data/alphacon.png';
import aok from '../../../data/aok.png';
import microbitcoin from '../../../data/microbitcoin.png';
import sugarchain from '../../../data/sugarchain.svg';
import fourth from '../../../data/backs/4.svg';

const useStyles = makeStyles((theme) => ({
  shape: {
  	zIndex: "-1",
    [theme.breakpoints.down('md')]: {
      opacity: "0.4"
    }
  },
}));

const Clients = () => {
	const classes = useStyles();

	const fourthStyle = {
		position: "absolute",
		right: 0
	}

	return (
		<ScrollableAnchor id={'clients'}>
		<Box my={12}>
			<Parallax y={[50, -50]} styleInner={fourthStyle}>
				<img alt="fourth" src={fourth} className={classes.shape} />
			</Parallax>
			<Grid container spacing={2} style={{marginTop: 10}} align="center" alignItems="center">
				<Grid item md={12}>
					<Typography variant="h3" align="center" component="h2" gutterBottom>
						Clients we work with
					</Typography>
	                <Typography variant="subtitle1" align="center" style={{width: "75%"}} component="p" gutterBottom>
                        We work with companies that need a reliable partner in the software development field. We dive into their business process to provide them the best solutions.
                    </Typography>
				</Grid>
	            <Grid item xs={12} md={3} sm={6}>
	            	<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <Link href="https://alphacon.io" target="_blank">
                            <Tooltip title="AOK" placement="top">
        						<img alt="alphacon" src={alphacon} height="70"/>
                            </Tooltip>
                        </Link>
					</ScrollAnimation>
				</Grid>
	            <Grid item xs={12} md={3} sm={6}>
		            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
                        <Link href="https://aok.network" target="_blank">
                            <Tooltip title="AOK" placement="top">
        						<img alt="aok" src={aok}  height="70"/>
                            </Tooltip>
                        </Link>
					</ScrollAnimation>
				</Grid>
	            <Grid item xs={12} md={3} sm={6}>
		            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={250}>
                        <Link href="https://microbitcoin.org/" target="_blank">
                            <Tooltip title="MicroBitcoin" placement="top">
        						<img alt="microbitcoin" src={microbitcoin}  height="70"/>
                            </Tooltip>
                        </Link>
					</ScrollAnimation>
				</Grid>
                <Grid item xs={12} md={3} sm={6}>
                	<ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
                        <Link href="https://sugarchain.org/" target="_blank">
                            <Tooltip title="Sugarchain" placement="top">
        						<img alt="sugarchain" src={sugarchain}  height="70"/>
                            </Tooltip>
                        </Link>
					</ScrollAnimation>
    			</Grid>
			</Grid>
		</Box>
		</ScrollableAnchor>
	);
}

export default Clients;
