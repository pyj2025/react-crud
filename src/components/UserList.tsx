import React from 'react';
import UserListItem from './UserListItem.tsx';
import { User } from '../type';

type UserListProps = {
  users: Array<User>;
  removeUser: (id: number) => void;
  selectUser: (user: User) => void;
  toggleEdit: () => void;
};

const UserList: React.FC<UserListProps> = ({
  users,
  removeUser,
  selectUser,
  toggleEdit,
}) => {
  const listSize = React.useMemo(() => {
    return users.length;
  }, [users]);

  return (
    <div className="bg-gray-700 m-4 p-2 rounded shadow-2xl">
      <h1 className="text-xl font-medium text-white mb-2">
        User List ({listSize})
      </h1>
      <div>
        <div className="grid grid-cols-[10%_20%_20%_30%_10%_10%] ">
          <div className="text-lg font-medium text-center truncate text-blue-300 bg-gray-800 p-2 border border-gray-600 cursor-default">
            ID
          </div>
          <div className="text-lg font-medium text-center truncate text-blue-300 bg-gray-800 p-2 border border-gray-600 cursor-default">
            First Name
          </div>
          <div className="text-lg font-medium text-center truncate text-blue-300 bg-gray-800 p-2 border border-gray-600">
            Last Name
          </div>
          <div className="text-lg font-medium text-center truncate text-blue-300 bg-gray-800 p-2 border border-gray-600">
            Email
          </div>
          <div className="text-lg font-medium text-center truncate text-blue-300 bg-gray-800 p-2 border border-gray-600">
            Edit
          </div>
          <div className="text-lg font-medium text-center truncate text-blue-300 bg-gray-800 p-2 border border-gray-600">
            Delete
          </div>
        </div>
        <div>
          {users.map((user) => (
            <UserListItem
              user={user}
              key={user.id}
              removeUser={removeUser}
              toggleEdit={toggleEdit}
              selectUser={selectUser}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserList);
