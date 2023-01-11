import React from "react";

interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
  isExternal?: boolean;
}

export function Link(props: LinkProps): JSX.Element {
  return (
    <a
      {...props}
      className={"text-primary".concat(props.className ?? "")}
      target={props.isExternal ? "_blank" : undefined}
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}