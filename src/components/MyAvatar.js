// hooks
// utils
import useAuth from '../hooks/useAuth';
import createAvatar from '../utils/createAvatar';
//
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user } = useAuth();
  const pathu = '/assets/images/divu.jpg';

  return (
    <Avatar src={pathu} alt={user?.name} color={pathu ? 'default' : createAvatar(user?.name).color} {...other}>
      {createAvatar(user?.name).name}
    </Avatar>
  );
}
