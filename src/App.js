import React from "react";

import SignIn from "./Page/SignIn/SignIn";
import SignUp from "./Page/SignUp/SignUp";
const App = () => {
  function RightClick(event) {
    event.preventDefault(); // Prevent the default right-click menu behavior
  }
  return (
    <div className="App" onContextMenu={RightClick}>
      <SignIn />
      <SignUp />
    </div>
  );
};
export default App;
