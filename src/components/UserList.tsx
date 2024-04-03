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
  return (
    <div>
      <h1 className="text-xl font-medium">User List</h1>
      <div>
        <div className="grid grid-cols-6 border">
          <div className="text-lg font-medium">ID</div>
          <div className="text-lg font-medium">First Name</div>
          <div className="text-lg font-medium">Last Name</div>
          <div className="text-lg font-medium">Email</div>
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

export default UserList;
