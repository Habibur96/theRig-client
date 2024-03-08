import { useContext } from "react";
import profile from "../../../assets/icon/user.jpg";
import { AuthContext } from "../../../Provider/AuthProvider";

const ProfileHeader = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.uid)
  return (
    <>
      <div className="flex">
        <div className="avatar">
          <div className="w-24 mr-10  rounded-full">
            <img src={profile} />
          </div>
        </div>

        <div className="font-semibold ">
          <h1 className="mb-3"> Hello, </h1>
          <h1 className="text-2xl mr-51">{user?.displayName}</h1>
        </div>
        <span className="h-15 w-px bg-red-500 ml-48" aria-hidden="true" />
        <div className="ml-15 mr-6 pl-4 font-semibold">
          <span> Star Points</span>
          <h1 className="mt-3 text-center">++0</h1>
        </div>

        <span className="h-15 w-px bg-red-500 mr-7" aria-hidden="true" />
        <div className="font-semibold  text-center">
          <p>Store Credit</p>
          <h1 className="mt-3">++0</h1>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
