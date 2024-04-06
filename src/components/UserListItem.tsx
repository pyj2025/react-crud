import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
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
    <div key={id} className="grid grid-cols-[10%_20%_20%_30%_10%_10%] ">
      <div
        title={id.toString()}
        className="text-lg text-center text-gray-100 truncate font-normal p-1 px-2 border border-gray-600 cursor-pointer"
      >
        {id}
      </div>
      <div
        title={first_name}
        className="text-lg text-gray-100 truncate font-normal p-1 px-2 border border-gray-600 cursor-pointer"
      >
        {first_name}
      </div>
      <div
        title={last_name}
        className="text-lg text-gray-100 truncate font-normal p-1 px-2 border border-gray-600 cursor-pointer"
      >
        {last_name}
      </div>
      <div
        title={email}
        className="text-lg text-gray-100 truncate font-normal p-1 px-2 border border-gray-600 cursor-pointer"
      >
        {email}
      </div>
      <button
        title="Edit"
        className="text-center text-gray-100 p-1 border border-gray-600 cursor-pointer"
        onClick={() => {
          selectUser(user);
          toggleEdit();
        }}
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button
        title="Delete"
        className="text-center text-gray-100 p-1 border border-gray-600 cursor-pointer"
        onClick={() => removeUser(id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default React.memo(UserListItem);
