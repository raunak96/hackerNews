import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Header from "./components/Header";
import PageNotfound from "./pages/PageNotfound";
import StoryType from "./pages/StoryTypePage";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 120000,
			cacheTime: Infinity,
		},
	},
});
const App = () => {
	return (
		<Router>
			<QueryClientProvider client={queryClient}>
				<div className="container">
					<Header />
					<Switch>
						<Route
							path="/"
							render={() => <Redirect to="/top" />}
							exact
						/>
						<Route
							path="/:type"
							render={({ match }) => {
								const { type } = match.params;
								return !["top", "new", "best"].includes(
									type
								) ? (
									<PageNotfound />
								) : (
									<StoryType />
								);
							}}
						/>
						<Route component={PageNotfound} />
					</Switch>
				</div>
			</QueryClientProvider>
		</Router>
	);
};

export default App;
