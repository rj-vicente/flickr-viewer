import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import CommentDetail from './CommentDetail';

class CommentList extends Component {
  state = { comments: null };

  componentWillMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photo_id=${this.props.photoId}&format=json&nojsoncallback=1`)
      .then(response => this.setState({ comments: response.data.comments.comment }));
  }

  renderComments() {
    return this.state.comments.map(comment => 
      <CommentDetail key={comment.id} authorName={comment.authorname} dateCreate={(new Date(parseInt(comment.datecreate, 10))).toLocaleDateString()} content={comment._content}/>
    );
  }

  render() {
    console.log(this.state);

    if (!this.state.comments) { 
	    return (
            <View style={{ flex: 1 }}>
			    <Text>
                    Loading...
			    </Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {this.renderComments()}
            </ScrollView>
        </View>
    );
  }
}

export default CommentList;