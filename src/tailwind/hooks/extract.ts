import React from "react";

export default function useExtract<T>(elements: any[]){
  const props = { ...elements[0]};
  const classes = getClasses(props?.tw ?? []);
  const children = elements[0].children as React.ReactNode;

  delete props?.children;
  delete props?.tw;
  
  return {
    classes,
    children,
    attributes: props as T,
  };
}

function getClasses(classes: string[] | string){
  if(Array.isArray(classes))
    return classes.join(" ");
  return classes;
}