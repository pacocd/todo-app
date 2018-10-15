import { createStackNavigator } from 'react-navigation';
import TodoList from '../screens/TodoList';
import TodoDetail from '../screens/TodoDetail';

export default createStackNavigator({
  todoList: { screen: TodoList },
  todoDetail: { screen: TodoDetail }
});
