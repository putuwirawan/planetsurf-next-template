import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../public/images/tulisanLogo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		background: "linear-gradient(35deg, #171819 30%, #767A7F 90%)",
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		width: "100%",
		padding: "0 20px",
	},
});

export const Header = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Image src={logo} alt="Planet surf" width={500} height={100} />
		</div>
	);
};
