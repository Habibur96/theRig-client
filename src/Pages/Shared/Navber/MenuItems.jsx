// // import { useState, useEffect, useRef } from "react";

// // import Dropdown from "../../Shared/Navber/Dropdown";

// // const MenuItems = ({ items, depthLevel }) => {
// //   const [dropdown, setDropdown] = useState(false);
// // //   const [dropdown, setDropdown] = useState(window.innerWidth > 960);

// //   let ref = useRef();

// //   useEffect(() => {
// //     const handler = (event) => {
// //       if (dropdown && ref.current && !ref.current.contains(event.target)) {
// //         setDropdown(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handler);
// //     document.addEventListener("touchstart", handler);
// //     return () => {
// //       // Cleanup the event listener
// //       document.removeEventListener("mousedown", handler);
// //       document.removeEventListener("touchstart", handler);
// //     };
// //   }, [dropdown]);

// //   const onMouseEnter = () => {
// //     window.innerWidth > 960 && setDropdown(true);
// //   };

// //   const onMouseLeave = () => {
// //     window.innerWidth > 960 && setDropdown(false);
// //   };

// //   return (
// //     <li
// //       className="menu-items"
// //       ref={ref}
// //       onMouseEnter={onMouseEnter}
// //       onMouseLeave={onMouseLeave}
// //     >
// //       {items.submenu ? (
// //         <>
// //           <button
// //             type="button"
// //             role="menuitem"
// //             aria-haspopup="true"
// //             aria-expanded={dropdown ? "true" : "false"}
// //             onClick={() => setDropdown((prev) => !prev)}
// //           >
// //             {items.title}{" "}
// //             {depthLevel > 0 ? (
// //               <span> & raquo; </span>
// //             ) : (
// //               <span className="arrow" />
// //             )}{" "}
// //           </button>
// //           <Dropdown
// //             depthLevel={depthLevel}
// //             submenus={items.submenu}
// //             dropdown={dropdown}
// //           />{" "}
// //         </>
// //       ) : (
// //         <a href="/#"> {items.title} </a>
// //       )}{" "}
// //     </li>
// //   );
// // };

// // export default MenuItems;


// import Dropdown from "../../Shared/Navber/Dropdown";

// import React, { useState, useEffect, useRef } from "react";


// const MenuItems = ({ items, depthLevel }) => {
//   const [dropdown, setDropdown] = useState(false);
//   const ref = useRef();

//   useEffect(() => {
//     const handler = (event) => {
//       if (dropdown && ref.current && !ref.current.contains(event.target)) {
//         setDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     document.addEventListener("touchstart", handler);
//     return () => {
//       // Cleanup the event listener
//       document.removeEventListener("mousedown", handler);
//       document.removeEventListener("touchstart", handler);
//     };
//   }, [dropdown]);

//   const onMouseEnter = () => {
//     window.innerWidth > 960 && setDropdown(true);
//   };

//   const onMouseLeave = () => {
//     window.innerWidth > 960 && setDropdown(false);
//   };

//   return (
//     <li
//       className="menu-items"
//       ref={ref}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       {items.submenu ? (
//         <>
//           <button
//             type="button"
//             aria-haspopup="menu"
//             aria-expanded={dropdown ? "true" : "false"}
//             onClick={() => setDropdown((prev) => !prev)}
//           >
//             {items.title} {depthLevel > 0 ? <span> &raquo; </span> : <span className="arrow" />}
//           </button>
//           <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
//         </>
//       ) : (
//         <a href="/#">{items.title}</a>
//       )}
//     </li>
//   );
// };

// export default MenuItems;
