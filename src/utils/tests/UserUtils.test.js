import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getAllUsers, getToDos } from '../UsersUtils';

export const mockUsersResponse = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
];
export const mockToDosResponse = {
  userId: 1,
  id: 1,
  title: 'Buy eggs',
  completed: false,
};

describe('user utils', () => {
  let axiosMock;

  beforeAll(() => {
    axiosMock = new MockAdapter(axios);
  });

  afterEach(() => {
    axiosMock.reset();
  });

  it('returns a list of users with username and fullname after fetching from API', async () => {
    axiosMock
      .onGet('https://jsonplaceholder.typicode.com/users')
      .reply(200, mockUsersResponse);
    const allUsers = await getAllUsers();
    expect(allUsers.length).toEqual(2);
  });

  it('returns an empty array if the API call is unsuccessful', async () => {
    axiosMock
      .onGet('https://jsonplaceholder.typicode.com/users')
      .networkError();
    const allUsers = await getAllUsers();
    expect(allUsers.length).toEqual(0);
  });

  it('returns todos of a given user', async () => {
    axiosMock
      .onGet('https://jsonplaceholder.typicode.com/todos/1')
      .reply(200, mockToDosResponse);
    const todos = await getToDos(1);
    expect(todos).toEqual({
      userId: 1,
      id: 1,
      title: 'Buy eggs',
      completed: false,
    });
  });
});
