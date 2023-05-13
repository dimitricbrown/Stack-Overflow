import React, { useEffect, useState } from 'react';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { getUsers } from '../api/usersData';

const AllUsers = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    if (user) {
      fetchUsers();
    }
  }, [user]);

  if (!user) {
    return <p>Please log in to view users.</p>;
  }

  return (
    <div>
      {users.map((userData) => (
        <User key={userData.id} user={userData} />
      ))}
    </div>
  );
};

export default AllUsers;
