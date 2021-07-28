import React, { FC } from "react";
import styles from "../../styles/component/Article.module.css";
import ArticleItem from "./ArticleItem";

interface Props {
	onSelect?: Function;
	datas: any;
}
const ArticleList: FC<Props> = (props) => {
	const { datas } = props;
	return (
		<div className={styles.grid}>
			{datas.map((data: any, index: number) => {
				return <ArticleItem key={index} data={data} />;
			})}
		</div>
	);
};

export default ArticleList;
