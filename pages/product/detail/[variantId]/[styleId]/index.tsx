import React from "react";
import {
	GetServerSideProps,
} from "next";
import { Container, createStyles, CssBaseline, Grid, Link, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import MatLayout from "../../../../../components/AppBar/MatLayout";
import { Header } from "../../../../../components/Header";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			padding: theme.spacing(2),
		},
		paper: {
			height: 440,
			width: 800,
		},
		paperLeft: {
			height: 440,
			width: 250,
		},
		paperRight: {
			height: 440,
			width: 250,
		},
		control: {
			padding: theme.spacing(2),
		},
	})
);

const ProductDetail = ({ catalogDetail }: { catalogDetail: any }) => {
	console.log(catalogDetail);
	const classes = useStyles();

	return (
		<MatLayout>
			<main>
		
				<Container maxWidth="sm">
					<Typography
						component="div"
						style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
					>
						<h1>Kopi SUSU</h1>
					</Typography>
				</Container>
				{/* <Grid container className={classes.root} spacing={3}>
					<Grid item xs={3}>
						<Paper className={classes.paperLeft}>
							<h1>KOPI MESEDUH JANI</h1>
						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.paper}>
							<h1>KOPI MESEDUH JANI</h1>
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paperRight}>
							<h1>KOPI MESEDUH JANI</h1>
						</Paper>
					</Grid>
				</Grid> */}
			</main>
		</MatLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const { styleId, variantId } = context.params;

	console.log("style", styleId);
	console.log("varian", variantId);
	const URL = `http://192.168.0.6:3080/api/v1/sales/catalog/details?styleId=${styleId}&variantId=${variantId}`;

	const catalogDetail = await fetch(URL, {
		method: "GET",
		headers: {
			Accept: "*/*",
			"Content-Type": "application/x-www-form-urlencoded",
		},
	})
		.then((response) => response.json())
		.then((responJson) => {
			if (responJson.data != undefined) {
				return responJson.data;
			} else {
				return { message: responJson.message };
			}
		})

		.catch((e) => ({ message: "Can not Connect Into Server" }));

	return {
		props: {
			catalogDetail,
		},
	};
};

export default ProductDetail;
