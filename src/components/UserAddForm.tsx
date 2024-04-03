import React, { useState, useCallback } from 'react';

type UserAddFormProps = {
  addUser: (firstname: string, lastname: string, email: string) => void;
};

const UserAddForm: React.FC<UserAddFormProps> = ({ addUser }) => {
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');

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
        addUser(firstname, lastname, email);
      } else {
        alert('Missing Info');
      }

      setFirstname('');
      setLastname('');
      setEmail('');

      e.preventDefault();
    },
    [addUser, email, firstname, lastname]
  );

  return (
    <form className="bg-gray-700 m-4 p-2 rounded" onSubmit={onSubmit}>
      <h2 className="text-xl font-medium text-white mb-2">Add User:</h2>
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
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg  block w-full p-2"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserAddForm;
