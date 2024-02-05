import { useParams } from "react-router-dom";
import useUsers from "../../Hooks/useUsers";

const Order = () => {
  const { email } = useParams();
  const [user] = useUsers();

  console.log(user);
  const userEmail = user.filter((item) => item.email === email);
  console.log(userEmail);
  return (
    <div>
      <h1>{userEmail[0]?.name}</h1>
      <h1>{userEmail[0]?.email}</h1>
      <h1>{userEmail[0]?.phone}</h1>
    </div>
  );
};

export default Order;
