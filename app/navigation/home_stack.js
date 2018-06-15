const HomeStack = createStackNavigator(Routes.HomeRoutes, {
  initialRouteName: "Home",
  navigationOptions: {
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "white"
  }
});