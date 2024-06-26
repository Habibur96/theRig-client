import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useRef, useState } from "react";
// import { useForm } from "react-hook-form";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import login from "../../assets/login.svg";
// import { Helmet } from "react-helmet-async";

const Login = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const location = useLocation();
  const { signIn, resetPassword } = useContext(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log({ location });
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const Form = event.target;
    const email = Form.email.value;

    const password = Form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // Swal.fire({
        //   title: "User Login Successful.",
        //   showClass: {
        //     popup: "animate__animated animate__fadeInDown",
        //   },
        //   hideClass: {
        //     popup: "animate__animated animate__fadeOutUp",
        //   },
        // });
        Form.reset(" ");
        navigate(from, { replace: true });

        // navigate('/userProfile')
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResetPassword = (event) => {
    const email = emailRef.current.value;

    console.log(email);
    if (!email) {
      alert("Please provide your email address to reset password");
    } else {
      toast("Email-sent");
      resetPassword(email)
        .then((result) => {
          const reset = result.user;
          console.log(reset);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // const { handleSubmit } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   signIn(data.email, data.password).then((result) => {
  //     const loggedUser = result.user;
  //     console
  //       .log(loggedUser)

  //       .catch((error) => console.log(error));
  //   });
  // };
  return (
    <>
      {/* <Helmet>
        <title>TheRig | Login</title>
      </Helmet> */}
      <div className="flex gap-12  pt-5 pt-5 bg-[#f4f4f3]">
        <img className="ml-80 pl-20" src={login} alt="" />
        <div className="shadow-lg p-4 mb-8 mt-4  rounded-4">
          <h2 className=" text-bold text-xl mt-5 mb-4 font-bold">
            Account Login
          </h2>
          <Form onSubmit={handleLogin} className="p-1">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control type="email" name="email" placeholder="E-mail" />
            </Form.Group>

            <Form.Label>Password</Form.Label>

            <div className="input-field mb-2 ">
              <input type={type} name="password" placeholder="Password" />
              <span onClick={handleToggle}>
                <Icon icon={icon} size={20} />
              </span>
            </div>

            {/* <Form.Label>
          <button onClick={handleResetPassword}>Forgotten Password?</button>
        </Form.Label> */}

            <Form.Label>
              <Link onClick={handleResetPassword}>Forgotten Password?</Link>{" "}
            </Form.Label>

            <div className="d-grid gap-2 mt-3">
              <Button variant="info" type="submit" value="signIn" size="">
                Login
              </Button>
            </div>
            <div className="divider">Don't have an account</div>
          </Form>

          <Link to="/signUp" className="d-grid gap-2 button">
            <button className="btn btn-outline btn-warning">
              <div className="text-sm">Create Your account</div>
            </button>
          </Link>
          <div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
