import { NextApiRequest } from "next";
import React, { useState } from "react";
import MatLayout from "../components/AppBar/MatLayout";
import Meta from "../components/Meta";
import { parseCookies } from "../lib/CookiesHelpers";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import router from "next/router";
import Link from "@material-ui/core/Link";

export default function Topics(props: any) {
	const { data } = props;
	const wrapper = React.createRef();
	const [textSearch, setTextSearch] = useState("");
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log(event.currentTarget);
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div style={{ width: 700 }}>
			<h1>Topics</h1>
		</div>
	);
}
