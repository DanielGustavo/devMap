import React from 'react';

import Map from '../../components/map';
import UsersAttacher from '../../components/usersAttacher';
import UsersList from '../../components/usersList';
import ErrosList from '../../components/errosList';

const Main = () => (
  <>
    <Map />
    <ErrosList />
    <UsersAttacher />
    <UsersList />
  </>
);

export default Main;
