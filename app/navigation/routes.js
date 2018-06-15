import Home from "../screens/home/home"
import Me from "../screens/home/me"
import Projects from "../screens/projects/home"
import More from "../screens/more/more"

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