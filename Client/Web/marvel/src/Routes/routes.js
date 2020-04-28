import { lazy } from "react";

const HomeContainer = lazy(() => import("../Containers/Home"));
const ProfileContainer = lazy(() => import("../Containers/Profile"));

const routes = [
	{ key: 0, exact: true, path: "/", component: HomeContainer },
	{
		key: 1,
		exact: false,
		path: "/profile/:id",
		component: ProfileContainer,
	},
];

export default routes;
