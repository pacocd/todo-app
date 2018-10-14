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

  renderListItem = ({ item }) => <TodoListItem todo={item} />;

  render() {
    const { todoListData } = this.props;
    if (todoListData) {
      return (
        <View
          style={{ backgroundColor: 'white', flex: 1 }}
          className="todoListView"
        >
          <FlatList
            className="todoFlatList"
            data={todoListData}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderListItem}
          />
        </View>
      );
    }

    return (
      <View
        className="activityIndicatorView"
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

export const mapStateToProps = ({ todos }) => {
  const { todoListData } = todos;
  return { todoListData };
};

export const mapDispatchToProps = dispatch => {
  return { setTodoListData: data => dispatch(setTodoListData(data)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
