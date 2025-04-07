import React from 'react';
import { logout } from '../utils/authSlice';
import { useDispatch } from 'react-redux';

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TODO APP</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </button>
          </li>
          <li>
            <details>
              <summary>My Socials</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://github.com/Ariano2"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://www.linkedin.com/in/aryan-g-555392212/"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
