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
<<<<<<< HEAD
		<Container>
			<Header />
			<Benefits />
		</Container>
=======
		<div>
			<Container>
				<Benefits />
                <Clients />
                <Technologies />
                <Team />
			</Container>
		</div>
>>>>>>> 52a3f58e48c0ac5bc3074a6d7d59f96de08c9f14
  	);
}

Home.propTypes = {

};

export { Home };
