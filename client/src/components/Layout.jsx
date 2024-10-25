import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';

export default function Layout({ user, logoutHandler }) {
  return (
    <div style={{ maxHeight: 'auto', backgroundColor: 'rgb(250, 250, 250)' }}>
      <NavBar user={user} logoutHandler={logoutHandler} />
      <Outlet />
    </div>
  );
}
