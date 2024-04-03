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
    <form onSubmit={onSubmit}>
      <h2>Add User:</h2>
      <input
        type="text"
        value={firstname}
        placeholder="First Name"
        onChange={onFirstnameChange}
      />
      <input
        type="text"
        value={lastname}
        placeholder="Last Name"
        onChange={onLastnameChange}
      />
      <input
        type="email"
        onChange={onEmailChange}
        value={email}
        placeholder="Add Email"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default UserAddForm;
