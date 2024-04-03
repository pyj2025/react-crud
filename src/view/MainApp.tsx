import React from 'react';
import UserList from '../components/UserList.tsx';
import { getUsers } from '../hook/api.js';
import { User } from '../type';

const MainApp: React.FC = () => {
  const [users, setUsers] = React.useState<Array<User> | null>(null);
  const nextId = React.useRef<number>(0);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await getUsers();
        let formattedUser = result.data.map((e) => {
          return {
            id: nextId.current++,
            first_name: e.first_name,
            last_name: e.last_name,
            email: e.email,
          };
        });
        setUsers(formattedUser);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }

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
