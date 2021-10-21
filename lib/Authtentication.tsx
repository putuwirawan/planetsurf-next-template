import { API_Host } from "../config";

export const AuthLogin = async ({
	username,
	password,
}: {
	username: string;
	password: string;
}) => {
	const URL = `${API_Host}auth/login?type=MEMBER`;
	let data: any = null;
	await fetch(URL, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			username: username,
			password: password,
		}),
	})
		.then((response) => response.json())
		.then((responJson) => {
			data = responJson;
		})

		.catch((e) => {
			data = { message: "Network Not Available" };
		});
	return data;
};
