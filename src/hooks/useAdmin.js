import { useEffect, useState } from 'react';

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(
        `https://foodiebay-multivendor-server-production.up.railway.app/admin/${email}`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log("data inside useAdmin", data);
          setAdmin(data?.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
