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
      <div className="text-lg text-center text-gray-100 font-normal p-1 border border-gray-600">
        {id}
      </div>
      <div className="text-lg text-gray-100 font-normal p-1 px-2 border border-gray-600">
        {first_name}
      </div>
      <div className="text-lg text-gray-100 font-normal p-1 px-2 border border-gray-600">
        {last_name}
      </div>
      <div className="text-lg text-gray-100 truncate font-normal p-1 px-2 border border-gray-600">
        {email}
      </div>

      <button
        className="text-center text-gray-100 p-1 border border-gray-600 "
        onClick={() => {
          selectUser(user);
          toggleEdit();
        }}
      >
        Edit
      </button>
      <button
        className="text-center text-gray-100 p-1 border border-gray-600"
        onClick={() => removeUser(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default React.memo(UserListItem);
