import APIManager from '../../src/managers/APIManager';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 10 });

describe('APIManager tests with OK responses', () => {
  beforeAll(() => {
    mock.reset();
  });

  it('has correct base url', () => {
    expect(APIManager.baseUrl).toBe('https://todo-fjcd.herokuapp.com/api/v1');
  });

  it('calls getTodoList to get a status 200 response', async () => {
    const responseMockData = [
      { id: 1, user_id: 1, title: 'test', completed: false }
    ];
    mock
      .onGet('https://todo-fjcd.herokuapp.com/api/v1/todos')
      .reply(200, responseMockData);

    const response = await APIManager.getTodoList();

    expect(response.data).toEqual(responseMockData);
  });

  it('calls getTodoList and gets a network error', async () => {
    mock.onGet('https://todo-fjcd.herokuapp.com/api/v1/todos').networkError();

    const response = await APIManager.getTodoList();

    expect(response.name).toBe('Error');
  });
});
