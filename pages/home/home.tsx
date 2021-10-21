import React from "react";
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
import { Header } from "../../components/Header";

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
		cardRoot: {
			maxWidth: 300,
		},
		media: {
			height: 250,
		},
	})
);

export default function Home() {
	const [spacing, setSpacing] = React.useState<GridSpacing>(5);
	const classes = useStyles();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
	};

	return (
		<>
		
			<Grid container className={classes.root} spacing={10}>
				<Grid item xs={12}>
					<h1>KOPI SUSU meseduh</h1>
					{/* <Grid container justifyContent="center" spacing={spacing}>
						<Grid item>
							<ProductView />
						</Grid>
						<Grid item>
							<ProductView />
						</Grid>
						<Grid item>
							<ProductView />
						</Grid>
						<Grid item>
							<Paper className={classes.paper}>
								<h5>Kopi susu</h5>
							</Paper>
						</Grid>
						<Grid item>
							<Paper className={classes.paper}>
								<h5>Kopi susu</h5>
							</Paper>
						</Grid>
					</Grid> */}
				</Grid>
				{/* <Grid item xs={12}>
					<Paper className={classes.control}>
						<Grid container>
							<Grid item>
								<FormLabel>spacing</FormLabel>
								<RadioGroup
									name="spacing"
									aria-label="spacing"
									value={spacing.toString()}
									onChange={handleChange}
									row
								>
									{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
										<FormControlLabel
											key={value}
											value={value.toString()}
											control={<Radio />}
											label={value.toString()}
										/>
									))}
								</RadioGroup>
							</Grid>
						</Grid>
					</Paper>
				</Grid> */}
			</Grid>
		</>
	);
}
