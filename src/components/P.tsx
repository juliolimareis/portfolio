import React from "react";

type PProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

export function P(props: PProps): JSX.Element {
  return (
    <p className={"text-justify ".concat(props.className ?? "")}>
      {props.children}
    </p>
  );
}
