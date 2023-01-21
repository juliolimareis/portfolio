import React from "react";

export default function Meta(props: React.HTMLProps<Element>): JSX.Element {
  return (
    <span className="p-1 pt-0 bg-[#c6f6d5] text-[#396b52] font-bold rounded-sm">
      {props.children}
    </span>
  );
}