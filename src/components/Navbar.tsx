import React, { useState, } from "react";
import useTheme, { ThemeType, } from "../hooks/useTheme";
import Button from "./Button";
import { MoonStar, Sun, } from "./icons";
import LinkItem from "./LinkItem";
import { useTranslation, } from "react-i18next";
import { NavLink, } from "react-router-dom";
import { Link, } from "./Link";

export default function Navbar(): JSX.Element {
  const { t } = useTranslation();
  const { switchTheme } = useTheme();
  const [themeSelect, setThemeSelect] = useState<ThemeType>("light");

  function themeSwitch(){
    const themeName = switchTheme();

    setThemeSelect(themeName);
  }

  return (
    <nav
      className="
      dark:text-white
        fixed
        w-full
        z-10
        pl-3
      bg-grey-transparent
      dark:bg-black-transparent
        font-bold
      "
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="container flex m-auto">
        <div className="flex pt-1">
          <NavLink
            className="
              text-xl
              font-bold
              pt-2
            text-black
            dark:text-white
              mr-3"
            to={"/"}
          >
            Júlio César Lima Reis
          </NavLink>

          <LinkItem to="/about">
            {t("About")}
          </LinkItem>
          <LinkItem to="/works">
            {t("Works")}
          </LinkItem>
          <LinkItem to="/front-end">
            Front-End
          </LinkItem>
          <LinkItem to="/back-end">
            Back-End
          </LinkItem>
          <LinkItem to="/posts">
            Posts
          </LinkItem>
          <Link
            target={"_blank"}
            href="https://www.linkedin.com/in/julio-cesar-lima-reis-a8246215b/"
            className={`
              py-2
              px-4
              text-xl
              hover:underline
            hover:text-primary
            dark:hover:text-primary
              transition duration-300
              rounded
            text-black
            dark:text-white
            `}
          >
            LinkedIn
          </Link>
        </div>

        <Button title={t("Alterar Tema") ?? ""} onClick={themeSwitch}>
          {themeSelect === "dark" ? <Sun className="w-5"/> : "80s"}
        </Button>

      </div>

      <div className="dark:bg-neon mt-1 h-2 dark:animate-spin-slow"></div>
    </nav>
  );
}