import { useEffect, useState } from "react";
import reactDom from "react-dom";

const Loader = ({ children, show }) => {
	const [node] = useState(document.createElement("div"));
	const loader = document.getElementById("loader");

	useEffect(() => {
		loader.appendChild(node).classList.add("message");
	}, [loader, node]);

	useEffect(() => {
		if (show) {
			loader.classList.remove("hide");
			document.body.classList.add("loader-open");
		} else {
			loader.classList.add("hide");
			document.body.classList.remove("loader-open");
		}
	}, [loader, show]);

	return reactDom.createPortal(children, node); // children will be inside node conatainer which is inside loader div
};

export default Loader;
