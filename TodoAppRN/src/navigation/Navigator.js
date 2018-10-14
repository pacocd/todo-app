import { createStackNavigator } from 'react-navigation';
import TodoList from '../screens/TodoList';

export default createStackNavigator({
  todoList: { screen: TodoList }
});
