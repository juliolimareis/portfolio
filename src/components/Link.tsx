import React from "react";

export function Link(
  props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
): JSX.Element {
  return (
    <a
      {...props}
    >
      {props.children}
    </a>
  );
}