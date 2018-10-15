import axios from 'axios';

class APIManager {
  baseUrl = 'https://todo-fjcd.herokuapp.com/api/v1';

  getTodoList = async () => {
    try {
      const url = this.baseUrl + '/todos';

      return await axios.get(url);
    } catch (error) {
      return error;
    }
  };

  updateTodo = async (todoId, data) => {
    try {
      const url = `${this.baseUrl}/todos/${todoId}`;

      return await axios.put(url, data);
    } catch (error) {
      return error;
    }
  };

  deleteTodo = async id => {
    try {
      const url = `${this.baseUrl}/todos/${id}`;

      return await axios.delete(url);
    } catch (error) {
      return error;
    }
  };
}

export default new APIManager();
