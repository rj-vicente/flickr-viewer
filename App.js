import React from 'react';
import { AppRegistry } from 'react-native';
import AlbumList from './app/components/AlbumList.js';
import PhotoList from './app/components/PhotoList.js';
import CommentList from './app/components/CommentList.js';
import { Router, Scene } from 'react-native-router-flux';

/*export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}*/

// Create a component
const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="albumList" component={AlbumList} title="Albums" initial={true} />
      <Scene key="photoList" component={PhotoList} title="Photos" />
      <Scene key="commentList" component={CommentList} title="Comments"/>
    </Scene>
  </Router>
);

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

export default App;

// Render it to the device
AppRegistry.registerComponent('albums', () => App);