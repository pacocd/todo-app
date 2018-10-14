import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export class TodoList extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = { title: 'Todo List' };

  render() {
    return <View style={{ backgroundColor: 'white', flex: 1 }} />;
  }
}

export default TodoList;
