import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

import logo from '../../../data/logo.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';

import { withStyles } from '@material-ui/core/styles';

const SocialButton = withStyles(theme => ({
	root: {
		paddingLeft: 5,
		paddingRight: 5,
		minHeight: 0,
		minWidth: 0,
		borderRadius: 3
	},
	contained: {
		color: theme.palette.primary.main,
		background: theme.palette.primary.transparent.light,
		'&:hover': {
			background: theme.palette.primary.transparent.dark,
		},
	},
}))(Button);

const Footer = () => {
  return (
    <Container>
    	<Box textAlign="center" my={5} fontWeight={200}>
    		<Grid container spacing={2}>
    			<Hidden mdDown>
	    			<Grid item>
	    				<Link href="#header">
	    					<img src={logo} width="100%" />
	    				</Link>
	    			</Grid>
    			</Hidden>
    			<Grid item>
	    			<SocialButton variant="contained" target="_blank" href="https://fb.com/codepillow" color="primary" disableElevation>
						<FacebookIcon />
					</SocialButton>
    			</Grid>
    			<Grid item>
	    			<SocialButton variant="contained" target="_blank" href="https://linkedin.com/company/codepillow" color="primary" disableElevation>
						<LinkedInIcon />
					</SocialButton>
    			</Grid>
    			<Grid item>
	    			<SocialButton variant="contained" target="_blank" href="https://t.me/codepillow" color="primary" disableElevation>
						<TelegramIcon />
					</SocialButton>
    			</Grid>
    			<Grid item>
	    			<SocialButton variant="contained" target="_blank" href="https://twitter.com/codepillow" color="primary" disableElevation>
						<TwitterIcon />
					</SocialButton>
    			</Grid>
    			<Grid item md xs sm align="right" alignItems="center">
	    			<Typography>
	    				<Link href="#" target="_blank">
	    					Privacy policy
	    				</Link>
	    			</Typography>
    			</Grid>
    		</Grid>
      	</Box>
    </Container>
  );
}

export { Footer };
