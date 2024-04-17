import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseAuth from "../../Hooks/UseAuth";

import Dropdown from "react-bootstrap/Dropdown";
const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user: currentUser, deleteCreatedUser } = UseAuth();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });
  const role = ["admin", "deliveryAgent", "user"];
  const handleRole = (user, role) => {
    console.log(user, role);

    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, create him ${role}`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/users/role/${user._id}`, { role }).then((data) => {
          if (data.data?.modifiedCount > 0) {
            refetch();
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
              refetch();

              Swal.fire("Deleted!", `${user.name} is deleted`, "success");
            }
          });
      }
    });
  };

  return (
    <div className=" max-w-screen-lg ml-32 mb-20">
      {/* <Helmet>
        <title>Bistro Boss | All users</title>
      </Helmet> */}
      <h3 className="text-3xl font-semibold my-8">
        Total Users: {users.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra mt-4">
          {/* head */}
          <thead className="bg-[#AAE3E2]">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Assign Role</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      id="dropdown-basic"
                      style={{ textTransform: "capitalize" }}
                    >
                      Assign Role
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        className="font-medium text-gray-900"
                        onClick={() => handleRole(user, role[0])}
                      >
                        Admin
                      </Dropdown.Item>
                      <hr />
                      <Dropdown.Item
                        className="font-medium text-gray-900"
                        onClick={() => handleRole(user, role[1])}
                      >
                        Delivery Agent
                      </Dropdown.Item>
                      <hr />
                      <Dropdown.Item
                        className="font-medium text-gray-900"
                        onClick={() => handleRole(user, role[2])}
                      >
                        User
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>

                <td>{user.role}</td>

                <td>
                  <button
                    onClick={() => handleUserDelete(user)}
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
