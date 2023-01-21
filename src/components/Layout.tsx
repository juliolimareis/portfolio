import React from "react";
import { motion, } from "framer-motion";

interface LayoutProps extends React.HTMLProps<Element>{
	title: string;
	children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
};

const Layout = ({ children, title, className }: LayoutProps): JSX.Element => {
  document.title = `${title} - Júlio César Lima Reis`;

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
      className={`
				mt-5
				p-3
				max-w-md
				bg-white
				rounded-xl
				shadow-md
				overflow-hidden
				md:max-w-4xl
				mx-auto
				dark:bg-black
				dark:text-white
			`.concat(" ", className ?? "")}
    >
      {children}
    </motion.article>

  );
};

export default Layout;
