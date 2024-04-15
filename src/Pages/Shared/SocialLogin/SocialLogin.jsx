import { useContext } from "react";
// import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import gglLogo from "../../../assets/icon/google.png";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser.email, loggedInUser.name);
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="divider mt-3">Or</div>
      <button
        onClick={handleGoogleSignIn}
        style={{ height: "53px" }}
        type="button"
        className="btn btn-wide btn-dark flex text-white bg-black mt-3 mx-auto block"
      >
        <img className="h-8" src={gglLogo} alt="" /> SignIn Google
      </button>
      <br />
    </div>
  );
};

export default SocialLogin;
