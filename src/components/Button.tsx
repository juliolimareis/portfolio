import React from "react";

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      {...props}
      className={`
        bg-primary
        text-bt-text
        hover:bg-hover-bt-bg
        
        -dark:bg-dark-bt-bg
        dark:text-dark-bt-text
        dark:hover:bg-dark-hover-bt-bg
  
        font-bold
        py-2
        px-4
        rounded
        inline-flex
        items-center
        transition
        duration-300
        ${props.className}
        dark:bg-neon
        dark:animate-spin-slow
      `}
    >
      {props.children}
    </button>
  );
}
