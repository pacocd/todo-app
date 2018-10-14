import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  TouchableHighlight,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SwipeListView } from 'react-native-swipe-list-view';
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
          <SwipeListView
            useFlatList
            className="todoFlatList"
            data={todoListData}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderListItem}
            disableRightSwipe
            rightOpenValue={-75}
            renderHiddenItem={data => {
              return (
                <TouchableHighlight
                  style={{
                    backgroundColor: 'red',
                    width: 75,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    alignSelf: 'flex-end'
                  }}
                >
                  <View>
                    <Text style={{ color: 'white' }}>Delete</Text>
                  </View>
                </TouchableHighlight>
              );
            }}
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
