import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import Notfound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import { Navigate } from "react-router-dom";
import UserForm from "./views/UserForm";
import Exercises from "./views/Exercises";
import Attendance from "./views/Attendance";
import Notes from "./views/Notes";
import Files from "./views/Files";
import Settings from "./views/Settings";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard"/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/exercises',
                element: <Exercises/>
            },
            {
                path: '/attendance',
                element: <Attendance/>
            },
            {
                path: '/notes',
                element: <Notes/>
            },
            {
                path: '/files',
                element: <Files/>
            },
            {
                path: '/settings',
                element: <Settings/>
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate"/>
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]

    },
    {
        path: '*',
        element: <Notfound/>
    }
])

export default router;