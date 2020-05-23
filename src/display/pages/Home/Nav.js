import React from "react";
import { goToTop } from 'react-scrollable-anchor'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import CodeIcon from '@material-ui/icons/Code';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import BrushIcon from '@material-ui/icons/Brush';
import logo from '../../../data/logo.svg';

import { withStyles } from '@material-ui/core/styles';

const MenuButton = withStyles(theme => ({
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
}))(Button);

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
    <Slide appear={false} direction="down" in={!trigger}>
        {children}
    </Slide>
    );
}


const Nav = (props) => {

    return (
        <HideOnScroll {...props}>
            <AppBar color="transparent" elevation={0}>
                <Container>
                    <Toolbar>
                        <Grid container alignItems="center">
                            <Grid item >
                                <a href="#header">
                                    <img src={logo} width="100%" />
                                </a>
                            </Grid>
                            <Grid item md align="right">
                                <MenuButton href="#process">
                                    Process
                                </MenuButton>
                                <MenuButton href="#clients">
                                    Clients
                                </MenuButton>
                                <MenuButton href="#technologies">
                                    Technologies
                                </MenuButton>
                                <MenuButton href="#fields">
                                    Projects
                                </MenuButton>
                                <MenuButton href="#contact" variant="contained" disableElevation>
                                    Contact us
                                </MenuButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
}

export default Nav;
