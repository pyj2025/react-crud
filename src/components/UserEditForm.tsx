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
    <div>
      <form onSubmit={onSubmit}>
        <h2>Edit User:</h2>
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
          value={email}
          placeholder="Email"
          onChange={onEmailChange}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default UserEditForm;
