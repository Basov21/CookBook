import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';

export default function Layout({ user, logoutHandler}) {
  return (
    <div style={{ height: '5500px', backgroundColor: 'lightgrey' }}>
      <NavBar  user={user} logoutHandler={logoutHandler}/>
      <Outlet />
    </div>
  );
}
