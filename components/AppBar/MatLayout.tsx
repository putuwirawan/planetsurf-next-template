import React, { FC, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Head from "next/head";
import MatNav from "./MatNav";
import Meta from "../Meta";
import { Header } from "../Header";
import LayoutStyle from "../../styles/jss/components/layout";
import styles from "../../styles/Layout.module.css";
import { logIn } from "../../redux/actions/Loging.action";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme: Theme) => createStyles(LayoutStyle));

interface Props {
	data?: any;
	onChangeSearch?: (val: string) => void;
	searchValue?: string;
	title?: string;
	children: React.ReactNode;
}

const MatLayout: FC<Props> = (props) => {
	const { data, onChangeSearch, searchValue, title, children } = props;
	const classes = useStyles();
	const dispatch = useDispatch(); // to Access Action

	return (
		<>
			<Meta title={title ? `PlanetSurf-${title}` : undefined} />
			<MatNav
				data={data}
				searchValue={searchValue}
				onChangeSearch={onChangeSearch}
			/>
			<div className={styles.container}>
				{children}
				{/* <Header />
				<main className={styles.main}>{props.children}</main> */}
			</div>
		</>
	);
};
export default MatLayout;
