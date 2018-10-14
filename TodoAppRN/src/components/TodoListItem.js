import React, { Component } from 'react';
import { Text, View, Switch, Platform } from 'react-native';
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

  state = {
    completed: this.props.todo.completed
  };

  getThumbColor() {
    return Platform.select({ ios: undefined, android: '#b2ccf7' });
  }
  setSwitchValue = value => {
    this.setState({ completed: value });
  };

  render() {
    const { title } = this.props.todo;
    const { completed } = this.state;
    return (
      <View
        className="todoContainerView"
        style={{
          flex: 1,
          paddingVertical: 14,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white'
        }}
      >
        <Text
          className="todoTitleText"
          style={{ marginHorizontal: 16, flex: 1 }}
        >
          {title}
        </Text>
        <Switch
          style={{ marginRight: 16 }}
          className="todoCompletedSwitch"
          onTintColor="#4688f1"
          thumbTintColor={this.getThumbColor()}
          value={completed}
          onValueChange={value => this.setSwitchValue(value)}
        />
      </View>
    );
  }
}

export default TodoListItem;
