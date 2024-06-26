import { Button, Form } from "react-bootstrap";
import "../Login/Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import login from "../../assets/login.svg";
const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext); //mailVarify

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      // mailVarify()

      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL).then(() => {
          const saveUser = {
            name: data?.name,
            email: data?.email,
            phone: data?.phone,
            starpoints: "0",
            role: "user",
          };
          console.log(saveUser);
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "content-Type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        });
      })
      .catch((error) => console.log(error));
  };
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="pl-96 flex gap-20 pb-16  pt-5 pt-5 bg-[#f4f4f3]">
     
      <div className="ml-24 shadow-lg p-4  mt-4  rounded-4">
        <h2 className="text-bold text-xl mt-3 mb-4 p-1 font-bold">
          Register Account
        </h2>

        <Form onSubmit={handleSubmit(onSubmit)} className="p-1">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>
              Name <span className="text-red-600 font-extrabold">*</span>
            </Form.Label>
            <Form.Control
            style={{ width: '440px' }}
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Name"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
        
        
            <Form.Label>
              E-Mail <span className="text-red-600 font-extrabold">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              style={{ width: '440px' }}
              {...register("email", { required: true })}
              placeholder="E-mail"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </Form.Group>

          {/* =========================== */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              Password<span className="text-red-600 font-extrabold"> *</span>
            </Form.Label>

          
            <div className="input-field mb-2"
            style={{ width: '440px' }}
            >
              <input
              
                type={type}
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
              />

              <span onClick={handleToggle}>
                <Icon icon={icon} size={20} />
              </span>
            </div>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicMobile">
            <Form.Label>
              Mobile <span className="text-red-600 font-extrabold">*</span>
            </Form.Label>
            <Form.Control
            style={{ width: '440px' }}
              type="tel"
              name="phone"
              {...register("phone", { required: true })}
              placeholder="Mobile"
            />
            {errors.phone && (
              <span className="text-red-600">Mobile num is required</span>
            )}
          </Form.Group>
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">Password must be 6 characters</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-600">
              Password must be less than 20 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must have one Uppercase one lower case, one number and
              one special character.
            </p>
          )}
          {/* ============================================= */}
          <div className="d-grid gap-2 mt-4" style={{ width: '440px' }}>
            <Button variant="info" type="submit" value="Sign Up" size="">
              Continue
            </Button>
          </div>

          <div className="divider">Already have an account?</div>
        </Form>
        <SocialLogin></SocialLogin>
        <div className="pb-2" style={{ width: '440px' }}>
          <p>
            If you already have an account with us, please login at the
            <Link to="/login" className="text-red-600 font-medium pl-2">
              login page
            </Link>
          </p>
        </div>

        <div
          class="elfsight-app-deb8cb53-9683-466e-ac49-c0554b5fb1e2"
          data-elfsight-app-lazy
        ></div>
      </div>
      <img className="" src={login} alt="" />
    </div>
  );
};

export default SignUp;
