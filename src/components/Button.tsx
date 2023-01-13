import React from "react";

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <button className="
      p-1
      dark:bg-neon
      rounded
      inline-flex
      items-center
      dark:animate-spin-slow
    ">
      <button
        {...props}
        className={`
          bg-primary
          text-bt-text
          hover:bg-hover-bt-bg
          
          dark:bg-dark-bt-bg
          dark:text-dark-bt-text
          dark:hover:bg-dark-hover-bt-bg
    
          font-bold
          rounded
          inline-flex
          items-center
          transition
          duration-300
          py-3
          px-5
          ${props.className}
          -bg-gradient-to-r from-indigo-500 via-blue-500 to-pink-500
          -night
        `}
      >
        {props.children}
      </button>
    </button>
  );
}
