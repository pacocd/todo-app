import React, { Component } from 'react';
import {
  Text,
  View,
  Switch,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';

export class TodoListItem extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired,
    onPress: PropTypes.func.isRequired
  };

  state = {
    completed: this.props.todo.completed
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.todo.completed !== nextProps.todo.completed) {
      this.setState({ completed: nextProps.todo.completed });
    }
  }

  getThumbColor() {
    return Platform.select({ ios: undefined, android: '#b2ccf7' });
  }
  setSwitchValue = value => {
    this.setState({ completed: value });
  };

  render() {
    const { todo, onPress } = this.props;
    const { completed } = this.state;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
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
            {todo.title}
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
      </TouchableWithoutFeedback>
    );
  }
}

export default TodoListItem;
