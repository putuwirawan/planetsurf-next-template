import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { server } from "../config";
import ArticleList from "../components/article/ArticleList";
const datas = ["1", "2", "3"];
export default function Home(props: any) {
	const { articles } = props;

	return (
		<div>
			<ArticleList datas={articles} />
		</div>
	);
}

export const getStaticProps = async () => {
	// const res = await fetch(
	// 	`https://jsonplaceholder.typicode.com/posts?_limit=6`
	// );

	// using API
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();
	return {
		props: {
			articles,
		},
	};
};
