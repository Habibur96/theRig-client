import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import "./ProfileNavber.css";
import CustomLink from "../../CustomLink/CustomLink";

import FilterFramesOutlinedIcon from "@mui/icons-material/FilterFramesOutlined";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import StarsIcon from "@mui/icons-material/Stars";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";


const ProfileNavber = () => {
  return (
    <div className="font-semibold ">
       <Tabs as={CustomLink}>
        <TabList >
          <Tab >
            <FilterFramesOutlinedIcon></FilterFramesOutlinedIcon> Orders
          </Tab>
          <Tab>
            <PersonOutlineSharpIcon></PersonOutlineSharpIcon> Edit Profile
          </Tab>
          <Tab>
            <LockOutlinedIcon></LockOutlinedIcon> Password
          </Tab>
          <Tab>
            <HomeWorkOutlinedIcon></HomeWorkOutlinedIcon> Address
          </Tab>
          <Tab>
            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon> Saved List
          </Tab>
          <Tab>
            <ImportantDevicesIcon></ImportantDevicesIcon> Saved Pc
          </Tab>
          <Tab>
            <StarsIcon></StarsIcon> Star Points
          </Tab>
          <Tab>
            <AccountBalanceWalletIcon></AccountBalanceWalletIcon> Store Credit
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 7</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 8</h2>
        </TabPanel>
      </Tabs> 

    
    </div>
  );
};

export default ProfileNavber;
