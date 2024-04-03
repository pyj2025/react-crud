import React, { useState, useCallback } from 'react';
import { User } from '../type';

type UserEditFormProps = {
  selectedUser: User | null;
  editUser: (
    id: number,
    firstname: string,
    lastname: string,
    email: string
  ) => void;
};

const UserEditForm: React.FC<UserEditFormProps> = ({
  selectedUser,
  editUser,
}) => {
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  React.useEffect(() => {
    if (selectedUser) {
      setFirstname(selectedUser.first_name);
      setLastname(selectedUser.last_name);
      setEmail(selectedUser.email);
    }
  }, [selectedUser]);

  const onFirstnameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstname(e.target.value);
    },
    []
  );

  const onLastnameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastname(e.target.value);
    },
    []
  );

  const onEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      if (firstname !== '' && lastname !== '' && email !== '') {
        editUser(selectedUser?.id!, firstname, lastname, email);
      } else {
        alert('Missing Info');
      }

      setFirstname('');
      setLastname('');
      setEmail('');

      e.preventDefault();
    },
    [editUser, email, firstname, lastname, selectedUser?.id]
  );

  return (
    <form className="bg-gray-700 m-4 p-2 rounded" onSubmit={onSubmit}>
      <h2 className="text-xl font-medium text-white mb-2">Edit User:</h2>
      <div className="grid grid-cols-4 gap-1">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-100">
            First name
          </label>
          <input
            type="text"
            id="first_name"
            value={firstname}
            placeholder="First Name"
            onChange={onFirstnameChange}
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-100">
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            value={lastname}
            placeholder="Last Name"
            onChange={onLastnameChange}
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={onEmailChange}
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">&nbsp;</label>
          <button
            type="submit"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2"
          >
            Edit
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserEditForm;
