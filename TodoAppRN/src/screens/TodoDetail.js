import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { images } from '../assets';

export class TodoDetail extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            user_id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
          }).isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  };

  static navigationOptions = {
    title: 'Detail'
  };

  renderLabels(title, content) {
    return (
      <View style={{ margin: 15 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 8, fontSize: 12 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 14 }}>{content}</Text>
      </View>
    );
  }

  renderCompletionStatusImage(completed) {
    const image = completed ? images.checkmark : images.xIcon;

    return (
      <Image
        resizeMode="contain"
        source={image}
        style={{
          alignSelf: 'center',
          height: 100,
          width: 100,
          marginVertical: 20
        }}
      />
    );
  }

  render() {
    const {
      id,
      user_id: userId,
      title,
      completed
    } = this.props.navigation.state.params.todo;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {this.renderCompletionStatusImage(completed)}
        {this.renderLabels('Id', id)}
        {this.renderLabels('User', userId)}
        {this.renderLabels('Title', title)}
      </ScrollView>
    );
  }
}

export default TodoDetail;
