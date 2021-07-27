import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

const datas = ["1", "2", "3"];
export default function Home(props: any) {
	const { articles } = props;

	return (
		<div>
			<Head>
				<title>Planetsurf</title>
				<link rel=" shortcut icon" href="/planetsurf.ico" />
				<meta name="keywords" content="planetsurf, clothing, surf" />
			</Head>
			{articles.map((article: any, index: number) => {
				return <h3 key={index}>{article.title}</h3>;
			})}
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=6`
	);
	const articles = await res.json();
	return {
		props: {
			articles,
		},
	};
};
