import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
	Home,
	ErrorComponent,
} from "../pages";
import { Footer } from "../components";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const Application = () => {

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Switch>
					<Route
						path="/"
						render={data => <Home />}
						exact
					/>
					<Route component={ErrorComponent} />
				</Switch>
				<Footer />
			</ThemeProvider>
		</BrowserRouter>
	);
}

Application.propTypes = {
};

export default Application;
