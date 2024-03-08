import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseAuth from "../../Hooks/UseAuth";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const {user: currentUser, deleteCreatedUser } = UseAuth();
// console.log(currentUser.uid)
// console.log(currentUser)
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });
  // console.log(users[0].email)
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, create him admin",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  const handleUserDelete = (user, uid) => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete him!",
    }).then((result) => {
      if (result.isConfirmed) {
       
        console.log(uid);
        fetch(`http://localhost:3000/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // deleteCreatedUser(uid)
              
              refetch();
              
              Swal.fire("Deleted!", `${user.name} is deleted`, "success");
            }
          });
      }
    });
  };
  // console.log(users.name);
  return (
    <div className=" max-w-screen-lg ml-32">
      {/* <Helmet>
        <title>Bistro Boss | All users</title>
      </Helmet> */}
      <h3 className="text-3xl font-semibold my-8">
        Total Users:{users.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra mt-4">
          {/* head */}
          <thead className="bg-[#AAE3E2]">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-600  text-white"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleUserDelete(user)}//, currentUser.uid
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
