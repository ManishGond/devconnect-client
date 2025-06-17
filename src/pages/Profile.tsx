import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl mb-4">My Profile</h2>
      { user ? (
        <div>
          <p><strong>ID:</strong> { user.id }</p>
          <p><strong>Username:</strong> { user.username }</p>
        </div>
      ) : (
        <p>No user data found.</p>
      ) }
    </div>
  );
};

export default Profile;
