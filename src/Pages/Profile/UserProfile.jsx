import "./UserProfile.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FilterFramesOutlinedIcon from "@mui/icons-material/FilterFramesOutlined";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import StarsIcon from "@mui/icons-material/Stars";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((reult) => {})
      .catch((error) => {
        console.error();
      });
  };
  return (
    <div className="mt-60 max-w-screen-md mx-auto">
      <Container className="flex gap-5">
        <Row className="">
          <Col className="">
            <div className="stack ">
              <div className=" pt-14 shadow-md w-36 h-40 card bg-amber-300">
                <FilterFramesOutlinedIcon className="ml-14 icon"></FilterFramesOutlinedIcon>
                <div className="text-center font-bold ">Order</div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col className="">
            <div className="stack">
              <div className=" pt-14 shadow-md w-36 h-40 card bg-base-200">
                <PersonOutlineSharpIcon className="icon ml-14"></PersonOutlineSharpIcon>
                <div className="text-center font-bold">Edit profile</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col className="">
            <div className="stack">
              <div className=" pt-14 shadow-md w-36 h-40 card bg-base-200">
                <LockOutlinedIcon className="icon ml-14"></LockOutlinedIcon>
                <div className="text-center font-bold">Change Passwors</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col className="">
            <div className="stack">
              <div className=" pt-14 shadow-md w-36 h-40 card bg-base-200">
                <HomeWorkOutlinedIcon className="icon ml-14"></HomeWorkOutlinedIcon>
                <div className="text-center font-bold">Addresses</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="flex gap-5 mt-5">
        <Row className="">
          <Col className="">
            <div className="stack">
              <div className="text-bold pt-14 shadow-md w-36 h-40 card bg-green-300">
                <FavoriteBorderOutlinedIcon className="icon ml-14"></FavoriteBorderOutlinedIcon>
                <div className="text-center font-bold">Wish List</div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col className="">
            <div className="stack">
              <div className="text-bold pt-14 shadow-md w-36 h-40 card bg-teal-700">
                <ImportantDevicesIcon className="icon ml-14"></ImportantDevicesIcon>
                <div className="text-center font-bold">Saved PC</div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col className="">
            <div className="stack">
              <div className="text-bold pt-14  shadow-md w-36 h-40 card bg-violet-400">
                <StarsIcon className="icon ml-14"></StarsIcon>
                <div className="text-center font-bold">Star Points</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col className="">
            <div className="stack">
              <div className="text-bold pt-14  shadow-md w-36 h-40 card bg-sky-600">
                <AccountBalanceWalletIcon className="icon ml-14"></AccountBalanceWalletIcon>
                <div className="text-center font-bold">Your Transactions</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container class>
        <Row className="ml-60 mt-5">
          <Col className="">
            <Link onClick={handleLogOut}>
              <div className="stack ml-8">
                <div className="text-bold pt-14  shadow-md w-36 h-40 card bg-base-200">
                  <ExitToAppIcon className="icon ml-14"></ExitToAppIcon>
                  <div className="text-center font-bold">Logout</div>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
