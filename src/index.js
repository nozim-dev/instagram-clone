import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignIn from "./Page/SignIn/SignIn";
import SignUp from "./Page/SignUp/SignUp";
import "./index.scss";
import NotFound from "./Page/NotFound/NotFound";
import PrivateRoute from "./Page/ProtectedRoute/ProtectedRoute";
import Explorer from "./Page/Explorer/Explorer";
import Reels from "./Page/Reels/Reels";
import HomeLayout from "./layouts/HomeLayout";
import Main from "./Components/Main/Main";
// import VideoComponent from "./Page/VideoComponent";
// 1. Object usilida ishlatish
// const route = createBrowserRouter([
//   {
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   {
//     path: "*",
//     element: <div>Bizda Bunday sahifa mavjud emas!</div>,
//   },
// ]);

// 2. JSX usulida ishlatish
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path="/" element={<PrivateRoute />}>
        <Route path="" element={<HomeLayout />}>
          <Route path="" element={<Main />} />
          <Route path="reels" element={<Reels />} />
          <Route path="explorer" element={<Explorer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/" element={<VideoComponent />} /> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

// Reactda Compentalar 2 turga bo'linadi:
// 1. Functional Component: Declaration function, Arrow Function

// export default function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;

// Arrow Function

// const App = () => {
//   return <div>Hello Arrow Functional Component</div>;
// };

// export default App;

// 2. Class Component

// class App extends React.Component {
//     render(){
//         return <div>Salom</div>
//     }
// }
// export default App

// React Snippets

// rafce - react arrow functional arrow component
// rfc - react functional component
// rcc - react class component
