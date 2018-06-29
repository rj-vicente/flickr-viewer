import React from 'react';
import { AppRegistry, TouchableOpacity, Image } from 'react-native';
import AlbumList from './app/components/AlbumList.js';
import PhotoList from './app/components/PhotoList.js';
import CommentList from './app/components/CommentList.js';
import SettingsMenu from './app/components/SettingsMenu.js';
import { Router, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import LocalizedStrings from 'react-localization';

strings = new LocalizedStrings({
  en: {
    albumsTitle: "Albums",
    photosTitle: "Photos",
    commentsTitle: "Comments",
    settingsTitle: "Settings",
    langLabel: "Language",
    langName: "English",
    changeAction: "Change"
  },
  sp: {
    albumsTitle: "Álbumes",
    photosTitle: "Fotos",
    commentsTitle: "Comentarios",
    settingsTitle: "Ajustes",
    langLabel: "Lenguaje",
    langName: "Español",
    changeAction: "Cambiar"
  }
})

const App = () => (
  <Router>
    <Scene key="root" 
      activeBackgroundColor = '#0062DD'
      navigationBarTitleImage={require('./app/icons/flickr-logo.png')}
      navigationBarTitleImageStyle={{height: 50, width: 50, marginLeft: 10}}
      renderRightButton={() => SettingsButton}>
      <Scene key="albumList" component={AlbumList} title={strings.albumsTitle} initial={true} onExit={console.log("hello")} />
      <Scene key="photoList" component={PhotoList} title={strings.photosTitle} />
      <Scene key="commentList" component={CommentList} title={strings.commentsTitle} />
      <Scene key="settingsMenu" component={SettingsMenu} title={strings.settingsTitle} onExit={console.log("hello")} />
    </Scene>
  </Router>
);

const SettingsButton = <TouchableOpacity onPress={() => Actions.settingsMenu({strings})}>
  <Image source={require('./app/icons/settings-cog.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
</TouchableOpacity>;

export default App;