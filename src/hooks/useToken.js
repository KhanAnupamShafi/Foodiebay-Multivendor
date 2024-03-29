import { useEffect, useState } from 'react';

const useToken = (user) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // console.log('User information inside use Token',user)
    const email = user?.user?.email;
    // console.log(email);

    const currentUser = { email: email };
    if (email) {
      fetch(
        `https://foodiebay-multivendor-server-production.up.railway.app/users/${email}`,
        {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(currentUser),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log("data inside usetoken", data);
        });
    }
  }, [user]);
  return [token, setToken];
};

export default useToken;
