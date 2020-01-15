import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import ListFilm from './components/ListFilm';

class FilmHome extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <ListFilm/>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: FilmHome,
    // Detail: FilmDetail
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

