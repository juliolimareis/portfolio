import React from "react";
import useExtract from "../hooks/extract";

export default function Div<T = HTMLDivElement>(
  ...props: ComponentsAux<T>
): JSX.Element{
  const { classes, children, attributes } = useExtract<T>(props);

  return (
    <div
      className={classes}
      {...attributes}
    >
      {children}
    </div>
  );
}