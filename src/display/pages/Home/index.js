import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from "./Header";
import Benefits from "./Benefits";
import Clients from "./Clients";
import Technologies from "./Technologies";
import Team from "./Team";

const Home = () => {
  	return (
		<Container>
			<Header />
			<Benefits />
			<Clients />
			<Technologies />
			<Team />
		</Container>
  	);
}

Home.propTypes = {

};

export { Home };
