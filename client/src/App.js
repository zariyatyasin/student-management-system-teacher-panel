import Sidebar from "./component/navbar/Sidebar";

import Login from "./Page/Login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import { Home } from "./Page/Home/Home";
import { useSelector } from "react-redux";
import ClassRoomDetails from "./Page/ClassRoomDetails/ClassRoomDetails";
import ResultDetailsPage from "./Page/ResultDetails/ResultDetailsPage";

function App() {
  const teacher = useSelector((state) => state.LoginUser.user);
  console.log(teacher);
  const Layout = () => {
    return (
      <div>
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!teacher) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout></Layout>
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/classesinfo/:id",
          element: <ClassRoomDetails></ClassRoomDetails>,
        },
        {
          path: "/classesinfo/:id/result/:examId",
          element: <ResultDetailsPage></ResultDetailsPage>,
        },
      ],
    },

    {
      path: "/login",
      element: <Login></Login>,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
