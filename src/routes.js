import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import StudentsPage from './pages/StudentsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import RegisterPage from './pages/RegisterPage';
import useAuth from './hooks/useAuth';
import GenerateQR from './pages/GenerateQR';
import MarkEntry from './pages/MarkEntry';
import Profile from './pages/Profile';
import AccountGeneral from './pages/AccountGeneral';

// ----------------------------------------------------------------------

export default function Router() {
  const { isAuthenticated } = useAuth();

  const routes = useRoutes([
    {
      path: '/dashboard',
      element: isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'markEntry', element: <MarkEntry /> },
        { path: 'entries', element: <UserPage /> },
        { path: 'students', element: <StudentsPage /> },
        { path: 'annoucement', element: <BlogPage /> },
        { path: 'generateQR', element: <GenerateQR /> },
        { path: 'profile', element: <Profile /> },
        { path: 'account', element: <AccountGeneral /> },
      ],
    },
    {
      path: 'login',
      element: !isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />,
    },
    {
      path: 'register',
      element: !isAuthenticated ? <RegisterPage /> : <Navigate to="/dashboard" />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
