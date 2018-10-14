import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import APIManager from '../managers/APIManager';
import APIErrorManager from '../managers/APIErrorManager';
import { setTodoListData } from '../redux/actions';

export class TodoList extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    getTodoList: PropTypes.func,
    hasError: PropTypes.func
  };

  static defaultProps = {
    getTodoList: APIManager.getTodoList,
    hasError: APIErrorManager.hasError
  };

  static navigationOptions = { title: 'Todo List' };

  componentWillMount() {
    this.fetchData();
  }

  async fetchData() {
    const todoListData = await this.props.getTodoList();
    const hasError = this.props.hasError(todoListData);

    if (hasError) {
      // Pending error handling
    } else {
      this.props.setTodoListData(todoListData.data);
    }
  }

  render() {
    return <View style={{ backgroundColor: 'white', flex: 1 }} />;
  }
}

const mapStateToProps = ({ todos }) => {
  const { todoListData } = todos;
  return { todoListData };
};

const mapDispatchToProps = dispatch => {
  return { setTodoListData: data => dispatch(setTodoListData(data)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
