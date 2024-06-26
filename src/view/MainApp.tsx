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
        const pageOneResult = await getUsers(1);
        const pageTwoResult = await getUsers(2);

        const pageOneUsers = pageOneResult.data.map((e) => {
          return {
            id: e.id,
            first_name: e.first_name,
            last_name: e.last_name,
            email: e.email,
          };
        });

        const pageTwoUsers = pageTwoResult.data.map((e) => {
          return {
            id: e.id,
            first_name: e.first_name,
            last_name: e.last_name,
            email: e.email,
          };
        });

        const formattedUsers = [...pageOneUsers, ...pageTwoUsers];

        nextId.current = formattedUsers.length + 1;

        setUsers(formattedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const addUser = React.useCallback(
    async (firstname: string, lastname: string, email: string) => {
      const newUser = {
        id: nextId.current++,
        first_name: firstname,
        last_name: lastname,
        email,
      };

      const fullName = firstname + ' ' + lastname;
      await createUser(fullName);

      setUsers((users) => [...users, newUser]);
    },
    []
  );

  const toggleEdit = React.useCallback(() => {
    if (selectedUser) {
      setSelectedUser((user) => null);
    }
    setEditOpen((prev) => !prev);
  }, [selectedUser]);

  const selectUser = React.useCallback((user: User) => {
    setSelectedUser((selected) => user);
  }, []);

  const removeUser = React.useCallback(async (id: number) => {
    await deleteUser(id);
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const editUser = React.useCallback(
    async (id: number, firstname: string, lastname: string, email: string) => {
      toggleEdit();

      const fullName = firstname + ' ' + lastname;
      await updateUser(fullName);

      setUsers((users) =>
        users.map((user) =>
          user.id === id
            ? { ...user, first_name: firstname, last_name: lastname, email }
            : user
        )
      );
    },
    [toggleEdit]
  );

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-800 p-3 overflow-hidden	">
      <h1 className="text-4xl font-semibold text-white">Joon's React Crud</h1>
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
