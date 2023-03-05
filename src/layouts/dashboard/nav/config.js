// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: icon('ic_blog'),
  },
  {
    title: 'Mark Entry',
    path: '/dashboard/markEntry',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Entries',
    path: '/dashboard/entries',
    icon: icon('ic_cart'),
  },
  {
    title: 'Students',
    path: '/dashboard/students',
    icon: icon('ic_user'),
  },
  {
    title: 'Announcement',
    path: '/dashboard/annoucement',
    icon: icon('ic_blog'),
  },
  {
    title: 'Generate QR',
    path: '/dashboard/generateQR',
    icon: icon('ic_cart'),
  },
];

export default navConfig;
