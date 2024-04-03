import React from 'react';
import { User } from '../type';

type UserListItemProps = {
  user: User;
  removeUser: (id: number) => void;
  selectUser: (user: User) => void;
  toggleEdit: () => void;
};

const UserListItem: React.FC<UserListItemProps> = ({
  user,
  removeUser,
  selectUser,
  toggleEdit,
}) => {
  const { id, first_name, last_name, email } = user;
  return (
    <div key={id} className="grid grid-cols-6">
      <div className="text-lg font-normal">{id}</div>
      <div className="text-lg font-normal">{first_name}</div>
      <div className="text-lg font-normal">{last_name}</div>
      <div className="text-lg font-normal">{email}</div>

      <button
        className="text-right"
        onClick={() => {
          selectUser(user);
          toggleEdit();
        }}
      >
        Edit
      </button>
      <button className="text-right" onClick={() => removeUser(id)}>
        Remove
      </button>
    </div>
  );
};

export default UserListItem;
