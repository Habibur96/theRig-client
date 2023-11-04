import { Button, Form } from "react-bootstrap";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="mt-5 pt-5">
      <h2 className="custom-form text-bold text-xl mt-5 mb-4 font-bold">
        Register Account
      </h2>
      <Form className=" custom-form">
        <Form.Label className="mr-2">
          First Name <span className="text-red-600 font-extrabold">*</span>
          <Form.Control type="text" name="name" placeholder="First Name" />
        </Form.Label>
        <Form.Label>
          Last Name <span className="text-red-600 font-extrabold">*</span>
          <Form.Control type="text" name="name" placeholder="Last Name" />
        </Form.Label>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            E-Mail <span className="text-red-600 font-extrabold">*</span>
          </Form.Label>
          <Form.Control type="email" name="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Label>
            Password<span className="text-red-600 font-extrabold"> *</span>
          </Form.Label>

          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="info" size="lg">
            Continue
          </Button>
        </div>
        <div className="divider">Already have an account?</div>
      </Form>
      <div className="custom-form">
        <p>
          If you already have an account with us, please login at the
          <Link to="/login" className="text-red-600 font-medium pl-2">
            login page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
