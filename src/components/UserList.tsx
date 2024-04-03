import React from 'react';
import UserListItem from './UserListItem.tsx';

type UserListProps = {
  users: any;
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h1 className="text-xl font-medium">User List</h1>
      <div>
        <div className="grid grid-cols-4 border">
          <div className="text-lg font-medium">ID</div>
          <div className="text-lg font-medium">First Name</div>
          <div className="text-lg font-medium">Last Name</div>
          <div className="text-lg font-medium">Email</div>
        </div>
        <div>
          {users.map((user) => (
            <UserListItem user={user} key={user.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
