import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import APIManager from '../managers/APIManager';
import APIErrorManager from '../managers/APIErrorManager';
import TodoListItem from '../components/TodoListItem';
import { setTodoListData } from '../redux/actions';

export class TodoList extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    getTodoList: PropTypes.func,
    hasError: PropTypes.func,
    todoListData: PropTypes.array
  };

  static defaultProps = {
    getTodoList: APIManager.getTodoList,
    hasError: APIErrorManager.hasError,
    todoListData: undefined
  };

  static navigationOptions = { title: 'Todo List' };

  componentWillMount() {
    this.fetchData();
  }

  async fetchData() {
    const todoListData = await this.props.getTodoList();

    if (this.props.hasError(todoListData)) {
      // Pending error handling
    } else {
      this.props.setTodoListData(todoListData.data);
    }
  }

  keyExtractor = item => `${item.id}`;

  render() {
    const { todoListData } = this.props;
    if (todoListData) {
      return (
        <View
          style={{ backgroundColor: 'white', flex: 1 }}
          testID="todoListView"
        >
          <FlatList
            data={todoListData}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) => <TodoListItem todo={item} />}
          />
        </View>
      );
    }

    return (
      <View
        testID="activityIndicatorView"
        style={{
          backgroundColor: 'white',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
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
