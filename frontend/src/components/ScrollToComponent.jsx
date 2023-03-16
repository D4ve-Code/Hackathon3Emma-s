// import React, { useRef } from "react";

// const ScrollToComponent = () => {
//   // Create a ref for the target component you want to scroll to
//   const targetComponentRef = useRef(null);

//   // Create a function to handle the button click
//   const handleClick = () => {
//     if (targetComponentRef.current) {
//       // Scroll to the target component
//       targetComponentRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Scroll to target component</button>

//       {/* Content before the target component /}
//         <div style={{ height: '100vh', backgroundColor: 'lightgrey' }}>
//           Some content here
//         </div>

//         {/ Target component /}
//         <div ref={targetComponentRef} style={{ height: '100vh', backgroundColor: 'lightblue' }}>
//           Target component
//         </div>

//         {/ Content after the target component */}
//       <div style={{ height: "100vh", backgroundColor: "lightgreen" }}>
//         More content here
//       </div>
//     </div>
//   );
// };

// export default ScrollToComponent;
