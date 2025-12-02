import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import UserList from './UserList';

function Users() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://51.75.16.232:8087/api/draghi`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [id]);
  return (<UserList userList={users} />);
}

export default Users;