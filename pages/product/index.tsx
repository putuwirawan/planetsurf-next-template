import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { CurrencyFormat } from "../../lib/GlobalFunction";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import ProductView from "../../components/Product/ProductView";
import ProductList from "../../components/Product/ProductList";
import { GetStaticProps } from "next";
import { Header } from "../../components/Header";
import MatLayout from "../../components/AppBar/MatLayout";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			padding: theme.spacing(2),
		},
		paper: {
			height: 440,
			width: 300,
		},
		control: {
			padding: theme.spacing(2),
		},
	})
);

export default function Product(props: any) {
	const { dataUser, catalog } = props;
	const classes = useStyles();

	return (
		<>
			<MatLayout>
				<main>
					<Header />

					{catalog.message !== undefined ? (
						<Paper className={classes.control}>
							<h5>{catalog.message}</h5>
						</Paper>
					) : (
						<Grid container className={classes.root} spacing={10}>
							<Grid item xs={12}>
								<ProductList products={catalog} />
							</Grid>
							<Grid item xs={12} style={{ marginTop: 10 }}>
								<Paper className={classes.control}>
									<Grid container>
										<Grid item>
											<FormLabel>spacing</FormLabel>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
						</Grid>
					)}
				</main>
			</MatLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context: any) => {
	const URL =
		"http://192.168.0.6:3080/api/v1/sales/catalog?sortOrder=ASC&pageIndex=1&pageSize=20&flags=1";
	const catalog = await fetch(URL, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded",
		},
	})
		.then((response) => response.json())
		.then((responJson) => {
			if (responJson.data != undefined) {
				const keydatas = Object.keys(responJson.data);
				const resData = keydatas.map((item: any, i: number) => ({
					name: item,
					style: responJson.data[item],
					index: i,
				}));

				return resData;
			} else {
				return [];
			}
		})

		.catch((e) => ({ message: "Can not Connect Into Server" }));

	return {
		props: { catalog },
	};
};
