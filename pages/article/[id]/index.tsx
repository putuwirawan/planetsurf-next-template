import React, { FC } from "react";
import { useRouter } from "next/router";
import { server } from "../../../config";
import {
	GetStaticProps,
	GetStaticPaths,
	GetServerSideProps,
	GetServerSidePropsContext,
	GetStaticPathsContext,
	GetStaticPropsContext,
} from "next";
import { Link } from "@material-ui/core";

const Article: FC = (props: any) => {
	const { article } = props;
	// const router = useRouter();
	// const { id } = router.query;
	return (
		<>
			<h5>article Id : {article.id}</h5>
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<Link href="/">Back to Home</Link>
		</>
	);
};

// export const getServerSideProps = async (context: any) => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
// 	);

// 	const article = await res.json();
// 	return {
// 		props: {
// 			article,
// 		},
// 	};
// };
export const getStaticProps: GetStaticProps = async (context: any) => {
	// const res = await fetch(
	// 	`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
	// );
	// using API
	const res = await fetch(`${server}/api/articles/${context.params.id}`);

	const article = await res.json();
	return {
		props: {
			article,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	// using API
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();
	const ids = articles.map((article: any) => article.id);

	const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));
	return {
		paths,
		fallback: false,
	};
};
export default Article;
