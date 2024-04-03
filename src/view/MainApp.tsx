import React from 'react';
import UserList from '../components/UserList.tsx';
import { getUsers, createUser, updateUser, deleteUser } from '../hook/api.js';
import { User } from '../type';
import UserEditForm from '../components/UserEditForm.tsx';
import UserAddForm from '../components/UserAddForm.tsx';

const MainApp: React.FC = () => {
  const [users, setUsers] = React.useState<Array<User>>([]);
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
  const [editOpen, setEditOpen] = React.useState<boolean>(false);

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

  const addUser = (firstname: string, lastname: string, email: string) => {
    const newUser = {
      id: nextId.current++,
      first_name: firstname,
      last_name: lastname,
      email,
    };

    const fullName = firstname + ' ' + lastname;
    createUser(fullName);

    setUsers((users) => [...users, newUser]);
  };

  const toggleEdit = () => {
    if (selectedUser) {
      setSelectedUser((user) => null);
    }
    setEditOpen((prev) => !prev);
  };

  const selectUser = (user: User) => {
    setSelectedUser((selected) => user);
  };

  const removeUser = (id: number) => {
    deleteUser(id);
    setUsers((users) => users.filter((user) => user.id !== id));
  };

  const editUser = (
    id: number,
    firstname: string,
    lastname: string,
    email: string
  ) => {
    toggleEdit();

    const fullName = firstname + ' ' + lastname;
    updateUser(fullName);

    setUsers((users) =>
      users.map((user) =>
        user.id === id
          ? { ...user, first_name: firstname, last_name: lastname, email }
          : user
      )
    );
  };

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-semibold text-blue-800">
        Joon's React Crud
      </h1>
      <UserList
        users={users}
        removeUser={removeUser}
        selectUser={selectUser}
        toggleEdit={toggleEdit}
      />
      {editOpen && (
        <UserEditForm selectedUser={selectedUser} editUser={editUser} />
      )}
      <UserAddForm addUser={addUser} />
    </div>
  );
};

export default MainApp;
