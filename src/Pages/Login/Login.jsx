import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-5 pt-5">
      <h2 className="custom-form text-bold text-xl mt-5 mb-4 font-bold">
        Account Login
      </h2>
      <Form className="custom-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control type="email" name="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Label>
          <Link>Forgotten Password?</Link>{" "}
        </Form.Label>

        <div className="d-grid gap-2">
          <Button variant="info" size="lg">
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
  );
};

export default Login;
