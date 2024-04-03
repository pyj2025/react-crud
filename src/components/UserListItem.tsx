import React from 'react';

type UserListItemProps = {
  user: any;
};

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  const { id, first_name, last_name, email } = user;
  return (
    <div key={id} className="grid grid-cols-4">
      <div className="text-lg font-normal">{id}</div>
      <div className="text-lg font-normal">{first_name}</div>
      <div className="text-lg font-normal">{last_name}</div>
      <div className="text-lg font-normal">{email}</div>
    </div>
  );
};

export default UserListItem;
