import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseAuth from "../../Hooks/UseAuth";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import Dropdown from "react-bootstrap/Dropdown";
const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user: currentUser, deleteCreatedUser } = UseAuth();
  // console.log(currentUser.uid)
  // console.log(currentUser)
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });
  const role = ["admin", "deliveryAgent"];
  // console.log(users[0].email)
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
          console.log("Role updated", res.data);
          if (res?.data?.modifiedCount > 0) {
            refetch();
          }
        });
        // fetch(`http://localhost:3000/users/admin/${user._id}`, {
        //   method: "PATCH",
        // })
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


                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    Assign Role
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </td>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                      <ModeEditOutlinedIcon />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <fieldset>
                        <div className="space-y-2 ">
                          <label
                            htmlFor="Option1"
                            className="flex cursor-pointer items-start gap-4"
                          >
                            <div>
                              <button
                                className="font-medium text-gray-900"
                                onClick={() => handleRole(user, role[0])}
                              >
                                Admin
                              </button>
                            </div>
                          </label>
                          <label
                            htmlFor="Option1"
                            className="flex cursor-pointer items-start gap-4"
                          >
                            <div>
                              <button
                                className="font-medium text-gray-900"
                                onClick={() => handleRole(user, role[1])}
                              >
                                Delivery Agent
                              </button>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                {/* <td>
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
                </td> */}

                <td>
                  <button
                    onClick={() => handleUserDelete(user)} //, currentUser.uid
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
