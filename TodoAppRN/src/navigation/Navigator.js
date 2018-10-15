import { createStackNavigator } from 'react-navigation';
import TodoList from '../screens/TodoList';
import TodoDetail from '../screens/TodoDetail';
import EditTodo from '../screens/EditTodo';

export default createStackNavigator({
  todoList: { screen: TodoList },
  todoDetail: { screen: TodoDetail },
  editTodo: { screen: EditTodo }
});
