import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginState } from "../redux/models";
import { RootState } from "../redux/reducers";
import { logIn } from "../redux/actions/Loging.action";
import { parseCookies } from "../lib/CookiesHelpers";
import type { NextApiRequest, NextApiResponse } from "next";
import { useCookies } from "react-cookie";
import MatLayout from "../components/AppBar/MatLayout";
import Home from "./home/home";
import { Header } from "../components/Header";

const datas = ["1", "2", "3"];

export default function App(props: any) {
	const dispatch = useDispatch(); // to Access Action
	const [cookie, setCookie, removeCookie] = useCookies(["user"]);
	const { articles, dataUser, catalog } = props;

	const { user_login, errorLogin, isLogin }: LoginState = useSelector(
		(state: RootState) => state.loging
	);
	const [textSearch, setTextSearch] = useState("");
	const checkUser = async () => {
		console.log(dataUser.username);
		if (dataUser.access_token !== undefined && dataUser.access_token !== "") {
			dispatch(logIn(dataUser));
		} else {
			// if (!isLogin) router.push("/auth/login");
		}
	};

	return (
		<MatLayout title="Home">
			<Header />
			<main>
				<Home />
			</main>
		</MatLayout>
	);
}
App.getInitialProps = async ({
	req,
	res,
}: {
	req: NextApiRequest;
	res: NextApiResponse;
}) => {
	const dataUser = parseCookies(req);
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
		.catch((e) => ({ message: "Can not Connect Into Server" }));

	// if (res) {
	// 	if (Object.keys(dataUser).length === 0 && dataUser.constructor === Object) {
	// 		res.writeHead(301, { Location: "/auth/login" });
	// 		res.end();
	// 	}
	// }

	return {
		dataUser: dataUser && dataUser,
		catalog: catalog,
	};
};
