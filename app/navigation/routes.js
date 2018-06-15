import Home from "../screens/home/home"
import Me from "../screens/home/home"
import Projects from "../screens/home/home"
import More from "../screens/home/home"

export default (Routes = {
	HomeRoutes: {
		Home: Home,
		Me: Me
	},
	ProjectsRoutes: {
		Projects: Projects
	},
	MoreRoutes: {
		More: More
	}
});