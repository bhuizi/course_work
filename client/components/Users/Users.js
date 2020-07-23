import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const USERS = gql`
{
    users{
      name
      email
    }
   }
`;

function Users() {
    const [ users, setUsers] = useState([]);
    const { loading, error, data } = useQuery(USERS);

  useEffect(() => {
      if(data !== undefined){
        setUsers(data.users);
      }
  }, [data]);
  
  return (
    <section>
      {loading ? (
          <div>Loading..</div>
      ):
      <ul>
          ({users.map(({name, email}) => <li>{name} : {email}</li>)})
      </ul>
      }
    </section>
  );
}

export default Users;
