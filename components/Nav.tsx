import { Link } from "@material-ui/core";
import React, { FC, useEffect } from "react";
import styles from "../styles/Nav.module.css";
import Icon from "@material-ui/core/Icon";
import { useSelector } from "react-redux";
import { LoginState } from "../redux/models";
import { RootState } from "../redux/reducers";
import { NextApiRequest, NextApiResponse } from "next";
import { parseCookies } from "../lib/CookiesHelpers";
interface Props {
	data?: any;
}

const Nav = (props: any) => {
	const { data } = props;
	const { user_login, errorLogin, isLogin }: LoginState = useSelector(
		(state: RootState) => state.loging
	);

	return (
		<nav className={styles.nav}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				<div style={{ justifyContent: "flex-start", display: "flex" }}>
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>

						<li>
							<Link href="/about">about</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<Link href="#" style={{ alignItems: "center", display: "flex" }}>
								<Icon>account_circle</Icon>
								{user_login !== undefined ? user_login.username : null}
							</Link>
						</li>
						{isLogin ? (
							<li>
								<Link
									href="#"
									style={{ alignItems: "center", display: "flex" }}
								>
									<Icon>shopping_cart</Icon>
								</Link>
							</li>
						) : null}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;

