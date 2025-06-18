import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import { useState, useRef, type ChangeEvent } from "react";
import { updateProfile } from "../features/profile/profileSlice";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa"; // plus icon

const ProfilePage = () => {
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    name: profile.name,
    username: profile.username,
    bio: profile.bio,
    github: profile.github,
    profilePic: profile.profilePic,
    bannerPic: profile.bannerPic,
    location: profile.location,
    connections: profile.connections,
    openToWork: profile.openToWork || false,
  });

  // Refs to trigger hidden file inputs
  const profilePicInputRef = useRef<HTMLInputElement>(null);
  const bannerPicInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, [field]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    dispatch(updateProfile(formData));
    toast.success("Profile updated like LinkedIn! 🎉");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded-md overflow-hidden">

      {/* Banner */ }
      <div className="relative">
        { formData.bannerPic ? (
          <img src={ formData.bannerPic } alt="Banner" className="w-full h-48 object-cover" />
        ) : (
          <div className="w-full h-48 bg-gray-300 flex items-center justify-center">No Banner</div>
        ) }

        <input
          type="file"
          accept="image/*"
          ref={ bannerPicInputRef }
          onChange={ (e) => handleImageChange(e, "bannerPic") }
          className="hidden"
        />
        <button
          type="button"
          onClick={ () => bannerPicInputRef.current?.click() }
          className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer"
        >
          <FaPlus className="text-gray-600" />
        </button>
      </div>

      {/* Profile Picture & Basic Info */ }
      <div className="relative p-4">
        <div className="absolute -top-16 left-4">
          { formData.profilePic ? (
            <img
              src={ formData.profilePic }
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-400 flex items-center justify-center border-4 border-white">
              No Pic
            </div>
          ) }

          <input
            type="file"
            accept="image/*"
            ref={ profilePicInputRef }
            onChange={ (e) => handleImageChange(e, "profilePic") }
            className="hidden"
          />
          <button
            type="button"
            onClick={ () => profilePicInputRef.current?.click() }
            className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer"
          >
            <FaPlus className="text-gray-600" />
          </button>
        </div>

        {/* Name, Headline, Location */ }
        <div className="ml-36 mt-2">
          <h2 className="text-2xl font-bold text-black">{ formData.name || "Your Name" }</h2>
          <p className="text-gray-700">{ formData.username || "Your Headline / Role" }</p>
          <p className="text-gray-500 text-sm">
            { formData.location || "Your Location" } • { formData.connections } connections
          </p>

          {/* Open to Work Tag */ }
          <div className="mt-2 flex items-center space-x-2">
            <label className="text-green-600 font-semibold flex items-center">
              <input
                type="checkbox"
                name="openToWork"
                checked={ formData.openToWork }
                onChange={ handleChange }
                className="mr-2"
              />
              Open to work
            </label>
          </div>
        </div>
      </div>

      {/* About Section */ }
      <div className="p-4 border-t">
        <h3 className="font-semibold text-lg">About</h3>
        <textarea
          name="bio"
          value={ formData.bio }
          onChange={ handleChange }
          placeholder="Tell about yourself..."
          className="w-full mt-2 p-2 border rounded resize-none"
          rows={ 4 }
        />
      </div>

      {/* Contact Info */ }
      <div className="p-4 border-t">
        <h3 className="font-semibold text-lg">Contact Info</h3>
        <input
          type="text"
          name="github"
          value={ formData.github }
          onChange={ handleChange }
          placeholder="GitHub / LinkedIn URL"
          className="w-full mt-2 p-2 border rounded"
        />
      </div>

      {/* Save Button */ }
      <div className="p-4 border-t flex justify-end">
        <button
          onClick={ handleSave }
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
