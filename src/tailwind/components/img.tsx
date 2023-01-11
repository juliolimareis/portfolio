import React from "react";
import useExtract from "../hooks/extract";

export default function Img<T = HTMLImageElement>(
  ...props: ComponentsAux<T>
): JSX.Element {
  const { classes, children, attributes } = useExtract<T>(props);

  return (
    <img
      className={classes}
      {...attributes}
    >
      {children}
    </img>
  );
}