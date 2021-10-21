import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Head from "next/head";
import Nav from "./Nav";
import Meta from "./Meta";
import { Header } from "./Header";
import LayoutStyle from "../styles/jss/components/layout";
import styles from "../styles/Layout.module.css";
const useStyles = makeStyles((theme: Theme) => createStyles(LayoutStyle));

interface Props {
	data?: any;
}

const Layout: FC<Props> = (props) => {
	const classes = useStyles();
	const { data } = props;

	return (
		<>
			<Meta />
			<Nav />
			<div className={styles.container}>
				<main className={styles.main}>
					<Header />
					{props.children}
				</main>
			</div>
		</>
	);
};
export default Layout;
