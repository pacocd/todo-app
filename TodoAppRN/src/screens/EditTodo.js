import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTodoListData, resetEditingFieldsData } from '../redux/actions';
import TodoInput from '../components/TodoInput';
import SquareButton from '../components/SquareButton';
import APIManager from '../managers/APIManager';
import APIErrorManager from '../managers/APIErrorManager';

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
    }).isRequired,
    updateTodo: PropTypes.func,
    getTodoList: PropTypes.func,
    hasError: PropTypes.func,
    editingFieldsData: PropTypes.object.isRequired
  };

  static defaultProps = {
    updateTodo: APIManager.updateTodo,
    getTodoList: APIManager.getTodoList,
    hasError: APIErrorManager.hasError
  };

  static navigationOptions = {
    title: 'Edit'
  };

  componentWillUnmount() {
    this.props.resetEditingFieldsData();
  }

  showAlert = () => {
    Alert.alert('Ooops', 'Something went wrong, try again.', [
      { text: 'Ok', onPress: () => {} }
    ]);
  };

  updateTodo = async () => {
    const { editingFieldsData } = this.props;
    const { todo } = this.props.navigation.state.params;
    const response = await this.props.updateTodo(todo.id, editingFieldsData);

    if (this.props.hasError(response)) {
      this.showAlert();
    } else {
      this.props.navigation.popToTop();
      const newTodoList = await this.props.getTodoList();
      if (!this.props.hasError(newTodoList)) {
        this.props.setTodoListData(newTodoList.data);
      }
    }
  };

  render() {
    const { todo } = this.props.navigation.state.params;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
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
          onPress={this.updateTodo}
        />
      </ScrollView>
    );
  }
}

export const mapStateToProps = ({ todos }) => {
  const { editingFieldsData } = todos;
  return { editingFieldsData };
};

export const mapDispatchToProps = dispatch => {
  return {
    resetEditingFieldsData: () => dispatch(resetEditingFieldsData()),
    setTodoListData: data => dispatch(setTodoListData(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodo);
