import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Modal,
  ScrollView,
  Button
} from "react-native";
import globalStyles from "../../styles/global";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "white"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hey</Text>
        <Button
          title="See Me"
          onPress={() => this.props.navigation.navigate("Me")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignSelf: "stretch",
    alignItems: "center"
  },
  header: {
    fontSize: globalStyles.FONT_SIZE_LARGE
  }
});