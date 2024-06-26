import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Register } from "./container/Register";
import { UpdatePassword } from "./container/UpdatePassword";
import { ErrorPage } from "./container/ErrorPage";
import { Login } from "./container/Login";
import { Index } from "./container/index";
import { UpdateInfo } from "./container/UpdateInfo";
import { Menu } from "./container/Menu";
import { MeetingRoomList } from "./container/MeetingRoomList";
import { BookingHistory } from "./container/BookingHistory";

const routes = [
  {
    path: "/",
    element: <Index></Index>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "update_info",
        element: <UpdateInfo />,
      },
      {
        path: "/",
        element: <Menu />,
        children: [
          {
            path: "/",
            element: <MeetingRoomList />,
          },
          {
            path: "meeting_room_list",
            element: <MeetingRoomList />,
          },
          {
            path: "booking_history",
            element: <BookingHistory />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "update_password",
    element: <UpdatePassword />,
  },
];
export const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
