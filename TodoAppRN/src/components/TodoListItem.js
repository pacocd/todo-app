import React, { Component } from 'react';
import { Text, View, Switch } from 'react-native';
import PropTypes from 'prop-types';

export class TodoListItem extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  };

  render() {
    const { title } = this.props.todo;
    return (
      <View style={{ width: '100%', paddingVertical: 14 }}>
        <Text>{title}</Text>
      </View>
    );
  }
}

export default TodoListItem;
