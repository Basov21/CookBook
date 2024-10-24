
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';

export default function Layout({ user, logoutHandler}) {
  return (
    <div>
      <NavBar user={user}/>
      <Outlet />
    </div>
  );
}
