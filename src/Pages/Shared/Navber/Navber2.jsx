// import { menuItems } from "/src/menuItems.jsx";

// import MenuItems from "../../../Pages/Shared/Navber/MenuItems";
// const Navbar2 = () => {
//   return (
//     <nav>
//       <ul className="menus">
//         {" "}
//         {menuItems.map((menu, index) => {
//           const depthLevel = 0;
//           return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
//         })}{" "}
//       </ul>{" "}
//     </nav>
//   );
// };

// export default Navbar2;mdb-react-ui-kit

 import { Dropdown } from "react-nested-dropdown";
import "react-nested-dropdown/dist/styles.css";
 const Navber2 = () => {

   const items = [

     {

       label: "Option 1",
     onSelect: () => console.log("Option 1 selected"),
   },
   {
     label: "Option 2",
     items: [
       {
         label: "Option 2.1",
         onSelect: () => console.log("Option 2.1 selected"),
       },
       {
         label: "Option 2.2",
         onSelect: () => console.log("Option 2.2 selected"),
       },
     ],
   },
   {
     label: "Gamming Pc",
     items: [
       {
         label: "Intel pc",
         onSelect: () => console.log("Option 2.1 selected"),
       },
       {
         label: "Ryzen pc",
         onSelect: () => console.log("Option 2.2 selected"),
       },
     ],
   },
   ];
   return (
     <Dropdown items={items} containerWidth="300px">
       {({ isOpen, onClick }) => (
         <button type="button" onClick={onClick}>
           {isOpen ? "Close dropdown" : "Open dropdown"}
         </button>
       )}
     </Dropdown>
   );
 }
 export default Navber2;

// import React from "react";
// import DropDownMenuSelect from "react-nested-menu-selector";

// const Navber2 = () => {
//   const option = {
//     placeholder: "Master",
//     options: [
//       {
//         value: "Sample-Menu",
//         label: "Sample-Menu",
//         hidden: false,
//         logo: "path_to_logo",
//         options: [
//           {
//             value: "Sample-Sub-Menu",
//             label: "Sample-Sub-Menu",
//             hidden: false,
//             logo: "path_to_logo",
//             options: [
//               {
//                 value: "Sub-Menu-Option-1",
//                 label: "Sub-Menu-Option-1",
//                 hidden: false,
//                 logo: "path_to_logo",
//               },
//               {
//                 value: "Sub-Menu-Option-2",
//                 label: "Sub-Menu-Option-2",
//                 hidden: true,
//                 logo: "path_to_logo",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   };

//   return (
//     <div>
//       <DropDownMenuSelect values={option}  />
//       <div>Test Application</div>
//     </div>
//   );
// };

//export default Navber2;
