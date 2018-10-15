import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import PropTypes from 'prop-types';
import { images } from '../assets';
import SquareButton from '../components/SquareButton';

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
    const { todo } = this.props.navigation.state.params;
    const { id, user_id: userId, title, completed } = todo;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {this.renderCompletionStatusImage(completed)}
        {this.renderLabels('Id', id)}
        {this.renderLabels('User', userId)}
        {this.renderLabels('Title', title)}
        <SquareButton
          text="Edit"
          textColor="white"
          color="#4688f1"
          onPress={() => this.props.navigation.navigate('editTodo', { todo })}
        />
      </ScrollView>
    );
  }
}

export default TodoDetail;
