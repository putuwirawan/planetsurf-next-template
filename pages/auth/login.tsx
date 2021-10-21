import React, { useEffect, useState } from "react";
import Meta from "../../components/Meta";
import Nav from "../../components/Nav";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from "../../lib/Authtentication";
import { LoginState, UserType } from "../../redux/models";
import { RootState } from "../../redux/reducers";
import { logingReducer } from "../../redux/reducers/Loging.reducer";
import { errorLoging, logIn } from "../../redux/actions/Loging.action";
import { useCookies } from "react-cookie";
const Login = (props: any) => {
	const dispatch = useDispatch(); // to Access Action
	const [cookie, setCookie] = useCookies();

	const { user_login, errorLogin, isLogin }: LoginState = useSelector(
		(state: RootState) => state.loging
	);
	const [state, setState] = useState({ username: "", password: "" });

	const handleOnChange = (event: any) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};
	const handleOnSubmit = async (event: any) => {
		event.preventDefault();
		const res = await AuthLogin(state);

		if (res.message) {
			dispatch(errorLoging(res.message));
		} else {
			const loginUser: UserType = {
				username: state.username,
				access_token: res.data.access_token,
				refresh_token: res.data.refresh_token,
			};
			setCookie("username", state.username, {
				path: "/",
				maxAge: 3600, // Expires after 1hr
				sameSite: true,
			});
			setCookie("access_token", res.data.access_token, {
				path: "/",
				maxAge: 3600, // Expires after 1hr
				sameSite: true,
			});
			setCookie("refresh_token", res.data.refresh_token, {
				path: "/",
				maxAge: 3600, // Expires after 1hr
				sameSite: true,
			});
			// setCookie("user", JSON.stringify(loginUser), {
			// 	path: "/",
			// 	maxAge: 3600, // Expires after 1hr
			// 	sameSite: true,
			// });
			dispatch(logIn(loginUser));
		}
	};

	useEffect(() => {
		if (isLogin) router.push("/");
	}, [user_login]);
	return (
		<div style={{ backgroundColor: "green", height: "100vh" }}>
			<Meta />
			<Nav />
			<h1>{errorLogin !== undefined ? errorLogin : null}</h1>
			<div
				style={{
					backgroundColor: "blue",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div
					style={{
						width: "600px",
						height: "100vh",
						backgroundColor: "yellowgreen",
					}}
				>
					<div>
						<h1>Kopi susus</h1>
					</div>
					<div
						style={{
							height: "70vh",
							width: "600px",
							backgroundColor: "red",
							alignItems: "flex-end",
							justifyContent: "center",
							borderTopRightRadius: 200,
							borderTopLeftRadius: 200,
						}}
					>
						<form onSubmit={handleOnSubmit}>
							<label htmlFor="username">username</label>
							<input
								id="username"
								name="username"
								type="text"
								autoComplete="username"
								required
								onChange={handleOnChange}
							/>
							<br />
							<label htmlFor="Password">Password</label>
							<input
								id="password"
								name="password"
								type="text"
								autoComplete="password"
								required
								onChange={handleOnChange}
							/>
							<button type="submit">Login</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
