import React, { HTMLAttributeAnchorTarget, } from "react";
import { NavLink, To, } from "react-router-dom";

interface LinkItemProps {
  to: To;
  children: React.ReactNode;
  target?: HTMLAttributeAnchorTarget
}

export default function LinkItem({ to, children, target }: LinkItemProps):JSX.Element {
  const classes = `
    py-2
    px-4
    text-xl
    hover:underline
    hover:text-primary
    -dark:hover:text-second
    transition duration-300
    rounded
  `;

  return (
    <NavLink
      to={to}
      target={target}
      // style={({ isActive, isPending }) => {
      //   return { color: isActive ? "glass-teal" : "inherit" };
      // }}
      className={({ isActive }) => {
        return isActive ? `${classes} bg-primary hover:text-white` : classes;
      }}
    >
      {children}
    </NavLink>
  );
}