import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import { useState } from "react";
import { updateProfile } from "../features/profile/profileSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const profile = useSelector((state: RootState) => state.profile)
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    name: profile.name,
    username: profile.username,
    bio: profile.bio,
    github: profile.github,
    profilePic: profile.profilePic,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, profilePic: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    dispatch(updateProfile(formData));
    toast.success("Profile Updated Successfully! 🎉");
  };


  return (
    <div className="max-w-md mx-auto mt-6 p-4 sm:p-6 md:p-8 border rounded shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl sm:text-2xl mb-4 text-center">My Profile</h2>
      <div className="flex flex-col items-center mb-4">
        { formData.profilePic ? (
          <img
            src={ formData.profilePic }
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-2"
          />

        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-300 mb-2 flex items-center justify-center">No Pic</div>
        ) }
        <input type="file" accept="image/*" onChange={ handleImageChange } />
      </div>
      <input
        type="text"
        name="username"
        value={ formData.username }
        onChange={ handleChange }
        placeholder="Username"
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        name="bio"
        value={ formData.bio }
        onChange={ handleChange }
        placeholder="Bio"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        name="github"
        value={ formData.github }
        onChange={ handleChange }
        placeholder="GitHub Link"
        className="w-full mb-2 p-2 border rounded"
      />
      <button
        onClick={ handleSave }
        className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded w-full sm:w-auto"
      >
        Save Profile
      </button>
    </div>
  );
};

export default Profile;
