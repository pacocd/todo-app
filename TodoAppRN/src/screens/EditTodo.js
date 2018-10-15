import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import TodoInput from '../components/TodoInput';
import SquareButton from '../components/SquareButton';

export class EditTodo extends Component {
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
    title: 'Edit'
  };

  render() {
    const { todo } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TodoInput
          fieldName="user_id"
          value={todo.user_id}
          type="numeric"
          title="User"
        />
        <TodoInput
          fieldName="title"
          value={todo.title}
          type="text"
          title="Title"
        />
        <TodoInput
          fieldName="completed"
          value={todo.completed}
          type="switch"
          title="Completed"
        />
        <SquareButton
          text="Save"
          textColor="white"
          color="#4688f1"
          onPress={() => {}}
        />
      </View>
    );
  }
}

export default EditTodo;
