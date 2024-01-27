import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useRef, useState } from "react";
// import { useForm } from "react-hook-form";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { AuthContext } from "../../Provider/AuthProvider";
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
        Form.reset(" ");
        const loggedUser = {
          email: user.email,
        };
        fetch("http://localhost:3000/jwt", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log({ data });
            localStorage.setItem("theRig-access-token", data.token);
             navigate(from, { replace: true });
          });

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
      <div className="mt-5 pt-5">
        <h2 className="custom-form text-bold text-xl mt-5 mb-4 font-bold">
          Account Login
        </h2>
        <Form onSubmit={handleLogin} className="custom-form">
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

        <Link to="/signUp" className="d-grid gap-2 custom-form button">
          <button className="btn btn-outline btn-warning">
            <div className="text-sm">Create Your account</div>
          </button>
        </Link>
      </div>

      <div></div>
    </>
  );
};

export default Login;
