// component
import Iconify from '../../../components/iconify/Iconify';
// ----------------------------------------------------------------------

const icon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: icon('eva:pie-chart-2-fill'),
  },

  {
    title: 'Mark Entry',
    path: '/dashboard/markEntry',
    icon: icon('eva:checkmark-square-fill'),
  },
  {
    title: 'Entries',
    path: '/dashboard/entries',
    icon: icon('eva:list-fill'),
  },

  {
    title: 'Students',
    path: '/dashboard/students',
    icon: icon('eva:people-fill'),
  },
  {
    title: 'Announcement',
    path: '/dashboard/annoucement',
    icon: icon('eva:monitor-fill'),
  },
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: icon('eva:person-fill'),
  },
  {
    title: 'Generate QR',
    path: '/dashboard/generateQR',
    icon: icon('eva:keypad-fill'),
  },
];

export default navConfig;
