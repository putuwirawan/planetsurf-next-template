import React from "react";

import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { Header } from "../components/Header";
import MatLayout from "../components/AppBar/MatLayout";

export default function About(props: any) {
	const { data } = props;

	return (
		<>
			<MatLayout>
				<Header />
				<main>About</main>
			</MatLayout>
		</>
	);
}
