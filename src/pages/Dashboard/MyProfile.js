import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-neutral text-neutral-content ">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl text-warning font-bold">
            My Profile
          </h2>
          <h2>
            <span className="font-bold">Name</span>: {user?.displayName}
          </h2>
          <h2>
            <span className="font-bold">Email</span>: {user?.email}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
