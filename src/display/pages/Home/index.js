import PropTypes from "prop-types";
import { configureAnchors } from 'react-scrollable-anchor';
import { ParallaxProvider } from 'react-scroll-parallax';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Nav from "./Nav";
import Header from "./Header";
import Benefits from "./Benefits";
import Clients from "./Clients";
import Technologies from "./Technologies";
import Fields from "./Fields";
import Team from "./Team";
import ContactUs from "./ContactUs";

const Home = () => {
	useEffect(() => {
		configureAnchors({offset: -60, scrollDuration: 200});
	})

  	return (
  		<ParallaxProvider>
			<Container>
				<Nav />
				<Header />
				<Benefits />
				<Clients />
				<Technologies />
				<Fields />
				<Team />
	            <ContactUs />
			</Container>
		</ParallaxProvider>
  	);
}

Home.propTypes = {

};

export { Home };
