import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { CurrencyFormat } from "../../lib/GlobalFunction";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
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

interface Props {
	name?: string;
	style: any[];
	index: number;
}
export default function ProductView(props: Props) {
	const classes = useStyles();

	console.log(props);
	return (
		<Paper className={classes.paper}>
			<Card className={classes.cardRoot}>
				<CardActionArea
					onClick={(event) => {
						console.log("katul");
					}}
				>
					<CardMedia
						className={classes.media}
						style={{ margin: 5, borderRadius: 10 }}
						image="https://th.bing.com/th/id/OIP.0flbCYUBAwjiJt-0ko1bmgHaE-?pid=ImgDet&rs=1"
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{props.name}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary" component="p">
							kopi susu meseduh duang cangkir misi gule bedik
						</Typography>
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Typography
								gutterBottom
								variant="button"
								component="h5"
								style={{
									textDecorationLine: "line-through",
									color: "#801D1D",
								}}
							>
								{CurrencyFormat(650000)}
							</Typography>
							<Typography gutterBottom variant="h5" component="h5">
								{CurrencyFormat(450000)}
							</Typography>
						</Grid>
					</CardContent>
				</CardActionArea>
				<CardActions style={{ justifyContent: "space-between" }}>
					<Button size="small" color="primary">
						<Link
							href="/product/detail/[variantId]/[styleId]"
							as={`/product/detail/${props.style[0].variantId} / ${props.style[0].styleId} `}
						>
							Detail
						</Link>
					</Button>
					<Button size="small" color="primary">
						<ShoppingCartIcon style={{ color: "#61DC38" }} />
					</Button>
					<Button size="small" color="primary">
						<FavoriteTwoToneIcon color="error" />
					</Button>
				</CardActions>
			</Card>
		</Paper>
	);
}
