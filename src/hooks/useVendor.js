import { useState, useEffect } from "react";

const useVendorAccess = (user) => {
  // console.log(user, "useVender User data");
  const [vendorAdmin, setVendorAdmin] = useState(false);
  const [vendorAdminLoader, setVendorAdminLoader] = useState(true);
  useEffect(() => {
    const email = user?.email;

    if (email) {
      fetch(`https://foodiebay.onrender.com/vendor/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log("data inside useVendor", data);
          setVendorAdmin(data.vendorAdmin);
          setVendorAdminLoader(false);
        });
    }
  }, [user]);

  return [vendorAdmin, vendorAdminLoader];
};

export default useVendorAccess;
