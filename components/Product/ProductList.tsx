
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import ProductView  from "./ProductView";


export default function ProductList({ products }: { products: any[] }) {
	return (
		<Grid container justifyContent="center" spacing={7}>
			{products.map((item: any, indext: number) => (
				<Grid item key={indext}>
					<ProductView {...item} />
				</Grid>
			))}
		</Grid>
	);
}