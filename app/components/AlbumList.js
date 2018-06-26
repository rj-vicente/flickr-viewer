import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { photoset: null };

  componentWillMount() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1')
      .then(response => this.setState({ photoset: response.data.photosets.photoset }));
  }

  renderAlbums() {
    return this.state.photoset.map(album =>
      <AlbumDetail key={album.id} title={album.title._content}  albumId={album.id} />
    );
  }

  _keyExtractor = (item) => item.id;

  _renderItem = ({item}) => (
    <AlbumDetail title={item.title._content}  albumId={item.id} />
  );

  render() {
    console.log(this.state);

    if (!this.state.photoset) { 
			return (
					<Text>
            Loading...
					</Text>
				);
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatList data={this.state.photoset} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />
      </View>
    );
  }
}

export default AlbumList;
