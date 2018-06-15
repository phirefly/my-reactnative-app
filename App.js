import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './app/navigation/app_navigation';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
