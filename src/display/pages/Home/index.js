import PropTypes from "prop-types";
import { configureAnchors } from 'react-scrollable-anchor'
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
		configureAnchors({scrollDuration: 200});
	})

  	return (
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
  	);
}

Home.propTypes = {

};

export { Home };
