import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Head from "next/head";
import Nav from "./Nav";
import Meta from "./Meta";
import {Header }from "./Header";
import LayoutStyle from "../styles/jss/components/layout";
import styles from "../styles/Layout.module.css";
const useStyles = makeStyles((theme: Theme) => createStyles(LayoutStyle));

export default function Layout(props: any) {
	const classes = useStyles();
	return (
		<>
		<Meta/>
			<Nav />
			<div className={styles.container}>
		
				<main className={styles.main}>
					<Header />
					{props.children}
				</main>
			</div>
		</>
	);
}
