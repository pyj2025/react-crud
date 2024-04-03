import React from 'react';
import UserList from '../components/UserList.tsx';

const MainApp: React.FC = () => {
  const [users, setUsers] = React.useState([
    {
      id: 7,
      email: 'michael.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'Lawson',
      avatar: 'https://reqres.in/img/faces/7-image.jpg',
    },
    {
      id: 8,
      email: 'lindsay.ferguson@reqres.in',
      first_name: 'Lindsay',
      last_name: 'Ferguson',
      avatar: 'https://reqres.in/img/faces/8-image.jpg',
    },
  ]);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-semibold text-blue-800">
        Joon's React Crud
      </h1>
      <UserList users={users} />
    </div>
  );
};

export default MainApp;
