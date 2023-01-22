import React, { HTMLAttributeAnchorTarget, } from "react";
import { NavLink, To, } from "react-router-dom";

interface LinkItemProps {
  to: To;
  children: React.ReactNode;
  target?: HTMLAttributeAnchorTarget
  className?: string;
}

export default function LinkItem({ to, children, target, className }: LinkItemProps):JSX.Element {
  const classes = `
    text-[16px]
    text-black
    dark:text-white
    hover:underline
    hover:text-primary
    dark:hover:text-primary
    transition duration-300
    rounded
  `.concat(" ", className ?? "");

  return (
    <NavLink
      to={to}
      target={target}
      // style={({ isActive, isPending }) => {
      //   return { color: isActive ? "glass-teal" : "inherit" };
      // }}
      className={({ isActive }) => {
        return isActive ? `${classes} text-primary` : classes;
      }}
    >
      {children}
    </NavLink>
  );
}