import NextAuth from "next-auth";
import Providers from "next-auth/providers";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

export default NextAuth({
	// https://next-auth.js.org/configuration/providers
	providers: [
		Providers.GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
			// https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
			scope: "read:user",
		}),
	],
});
