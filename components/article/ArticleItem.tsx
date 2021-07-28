import Link from "next/link";
import React, { FC } from "react";
import styles from "../../styles/component/Article.module.css";
interface Props {
	data: any;
}

const ArticleItem: FC<Props> = (props) => {
	const { data } = props;
	return (
		<Link href="/article/[id]" as={`article/${data.id}`}>
			<a className={styles.card}>
				<h3>{data.title} &rarr;</h3>
				<p>{data.body}</p>
			</a>
		</Link>
	);
};

export default ArticleItem;
