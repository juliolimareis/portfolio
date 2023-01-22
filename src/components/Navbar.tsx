import React, { useEffect, useRef, useState, } from "react";
import useTheme, { ThemeType, } from "../hooks/useTheme";
import { Sun, } from "./icons";
import LinkItem from "./LinkItem";
import { useTranslation, } from "react-i18next";
import { NavLink, } from "react-router-dom";
import { Link, } from "./Link";

export default function Navbar(): JSX.Element {
  const { t } = useTranslation();
  const { switchTheme } = useTheme();
  const [themeSelect, setThemeSelect] = useState<ThemeType>("light");

  const navbarRef = useRef<HTMLInputElement>(null);

  function themeSwitch(){
    const themeName = switchTheme();

    setThemeSelect(themeName);
  }

  function activeHamburger() {
    if(navbarRef.current?.classList.contains("hidden")){
      navbarRef.current.classList.remove("hidden");
      navbarRef.current.classList.add("bg-white");
      navbarRef.current.classList.add("dark:bg-black");
    }else{
      navbarRef.current?.classList.remove("bg-white");
      navbarRef.current?.classList.remove("dark:bg-black");
      navbarRef.current?.classList.add("hidden");
    }
  }

  useEffect(() => {
    if(navbarRef){
      navbarRef.current?.addEventListener("click", () => {
        activeHamburger();
      });
    }
  }, [navbarRef]);

  return (
    <nav
      style={{ backdropFilter: "blur(10px)" }}
      className="fixed z-10 w-full px-2 sm:px-4 py-2.5 rounded bg-grey-transparent dark:bg-black-transparent"
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <NavLink
          className="
            text-[16px]
            font-bold
          text-black
          dark:text-white flex items-center"
          to={"/"}
        >
          Júlio César Lima Reis
        </NavLink>

        <button onClick={activeHamburger} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>

        <div ref={navbarRef} className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <LinkItem
                to="/about"
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-center" aria-current="page"
              >{t("About")}</LinkItem>
            </li>
            <li>
              <LinkItem
                to="/works"
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-center" aria-current="page"
              >{t("Works")}</LinkItem>
            </li>
            <li>
              <LinkItem
                to="/front-end"
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-center" aria-current="page"
              >{t("Front-end")}</LinkItem>
            </li>
            <li>
              <LinkItem
                to="/back-end"
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-center" aria-current="page"
              >{t("Back-end")}</LinkItem>
            </li>
            <li>
              <LinkItem
                to="/posts"
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-center" aria-current="page"
              >{t("Posts")}</LinkItem>
            </li>
            <li>
              <Link
                target={"_blank"}
                href="https://www.linkedin.com/in/julio-cesar-lima-reis-a8246215b/"
                aria-current="page"
                className={"text-center block py-2 pl-3 pr-4 md:p-0 hover:underline hover:text-primary dark:hover:text-primary transition duration-300 rounded text-black dark:text-white"}
              >LinkedIn</Link>
            </li>
            <li>
              <span className="text-center block mr-3 cursor-pointer hover:text-primary dark:hover:text-primary"
                onClick={themeSwitch}
              >
                {themeSelect === "dark" ? <Sun className="w-5"/> : "80s"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}