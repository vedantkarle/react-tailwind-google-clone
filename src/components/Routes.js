import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Result } from "./Result";

export const Routes = () => {
	return (
		<div className='p-4'>
			<Switch>
				<Route path='/' exact>
					<Redirect to='/search' />
				</Route>
				<Route exact path={["/search", "/images", "/news", "/videos"]}>
					<Result />
				</Route>
			</Switch>
		</div>
	);
};
