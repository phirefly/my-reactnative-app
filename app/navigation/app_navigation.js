import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import Routes from "./routes";

const HomeStack = createStackNavigator(Routes.HomeRoutes, {
  initialRouteName: "Home",
  navigationOptions: {
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "white"
  }
});

const ProjectStack = createStackNavigator(Routes.ProjectsRoutes, {
  initialRouteName: "Projects"
});

const MoreStack = createStackNavigator(Routes.MoreRoutes, {
  initialRouteName: "More"
});

const MainScreenNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Projects: ProjectStack,
    More: MoreStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home${focused ? "" : "-outline"}`;
        } else if (routeName === "Projects") {
          iconName = `ios-planet${focused ? "" : "-outline"}`;
        } else if (routeName === "More") {
          iconName = `ios-more${focused ? "" : "-outline"}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "black"
      }
    }
  }
);

export default class AppNavigation extends Component {
  render() {
    return <MainScreenNavigator />;
  }
}