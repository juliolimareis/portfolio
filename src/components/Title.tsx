import React from "react";

type TitleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export default function Title(props: TitleProps): JSX.Element {
  return (
    <h3 className="selection-title">
      {props.children}
      <div
        className="border-primary border-solid border-2"
        style={{ width: "70px", borderRadius: "10%" }}
      />
    </h3>
  );
}