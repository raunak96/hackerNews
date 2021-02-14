import React from "react";
import { Link } from "react-router-dom";

const PageNotfound = () => {
	return (
		<p>
			Page Not found. 404 Error. Go to <Link to="/">Home</Link>{" "}
		</p>
	);
};

export default PageNotfound;
