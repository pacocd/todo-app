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
}

export default new APIManager();
