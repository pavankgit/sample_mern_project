import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //use state hook
  let [errMsg, setErrMsg] = useState("");
  // navigation after succesful registration
  let navigate = useNavigate();

  const onFormSubmit = async (userObj) => {
    let res = await axios.post("/user/create-user", userObj);
    // console.log(res.data);
    if (res.data.message === "User created") {
      // navigation after succesful registration
      navigate("/login");
    } else {
      setErrMsg(res.data.message);
    }
  };
  return (
    <div>
      <div className="display-1 text-center text-info">User Registration</div>
      <>
        <Form className="container" onSubmit={handleSubmit(onFormSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              {...register("username")}
            />
            <p className="text-danger">{errMsg}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email")}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Register
          </Button>
        </Form>
      </>
    </div>
  );
}

export default Register;
