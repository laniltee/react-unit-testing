import { render } from '@testing-library/react';
import * as usersUtilsMock from '../../utils/UsersUtils';
import Users from '../Users';

usersUtilsMock.getAllUsers = jest.fn().mockReturnValue([
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
]);

describe.skip('users', () => {
  it('should display the title List of Users', () => {
    const { container, debug, getByText } = render(<Users />);

    expect(getByText('List of Users')).toBeTruthy();
    expect(container.getElementsByTagName('li').length).toEqual(2);
  });

  it('should display Loading Users .. . while users are being loaded', async () => {});

  it('should display a list of users from the API call response', async () => {});

  it('should display Failed to Load Users if the API call is unsuccessful', async () => {});
});
