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


  // =====================Laptop=============================
  const items2 = [
    
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
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Option 2.2",
          onSelect: () => console.log("Option 2.2 selected"),
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
        {
          label: "Ryzen pc",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Ryzen pc",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Ryzen pc",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Ryzen pc",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Ryzen pc",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Ryzen pc",
          onSelect: () => console.log("Option 2.2 selected"),
        },
        {
          label: "Ryzen pc",
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
    {
      label: "Option 1",
      onSelect: () => console.log("Option 1 selected"),
    }
    
   
  ];
  return (
    <div className="flex">
      <Dropdown items={items} containerWidth="200px" className="mr-5">
        {({ isOpen, onClick }) => (
          <button type="button" onClick={onClick}>
            {isOpen ? "Close dropdown" : "Open dropdown"}
          </button>
        )}
      </Dropdown>
      <Dropdown items={items2} containerWidth="190px">
        {({ isOpen, onClick }) => (
          <button type="button" onClick={onClick}>
            {isOpen ? "Close dropdown" : "Open dropdown"}
          </button>
        )}
      </Dropdown>
    </div>
  );
};
export default Navber2;

// import React, { useState } from "react";
// import DropDownMenuSelect from "react-nested-menu-selector";

// const Navbar2 = () => {
//   const [selectedValue, setSelectedValue] = useState(null);

//   const handleOnClick = (value) => {
//     console.log(`Selected value: ${value}`);
//     // Add your logic here
//     setSelectedValue(value);
//   };

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
//       <DropDownMenuSelect values={option} handleOnClick={handleOnClick} />
//       <div>Test Application</div>
//       {selectedValue && <div>Selected Value: {selectedValue}</div>}
//     </div>
//   );
// };

// export default Navbar2;
