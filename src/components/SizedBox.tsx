import React from "react";

interface SizedBoxProps {
  width?: string | number;
  height?: string | number;
}

export default function SizedBox({ width, height }: SizedBoxProps): JSX.Element {
  return (
    <div style={{ width, height }}/>
  );
}