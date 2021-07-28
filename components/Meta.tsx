import React, { FC } from "react";
import Head from "next/head";

interface Props {
	title?: string;
	keywords?: string;
	description?: string;
}
const Meta: FC<Props> = (props) => {
	const { title, keywords, description } = props;
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="shortcut icon" href="/planetsurf.ico" />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps={
    title:'Planet Surf',
    keywords: 'planetsurf, planet surf, clhothing, pan, bag, bagpack, Tshirt, T shirt',
    description:'online store'
}
export default Meta;
