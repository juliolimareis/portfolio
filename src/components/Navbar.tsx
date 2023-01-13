import React from "react";
import useTheme, { ThemeType, } from "../hooks/useTheme";
import Button from "./Button";
import { MoonStar, Sun, } from "./icons";
import LinkItem from "./LinkItem";
import { useTranslation, } from "react-i18next";
import { NavLink, } from "react-router-dom";

export default function Navbar(): JSX.Element {
  const { t } = useTranslation(); //i18n.changeLanguage('en-US');
  const { switchTheme } = useTheme();
  const [themeSelect, setThemeSelect] = React.useState<ThemeType>("light");

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
        z-1
        pl-3
        bg-grey-transparent
        dark:bg-black-transparent
        font-bold"
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
          <LinkItem to={{ pathname: "https://www.linkedin.com/in/julio-cesar-lima-reis-a8246215b/" }}
            target="_blank"
          >
            LinkedIn
          </LinkItem>
        </div>

        <Button title="Alterar Tema" onClick={themeSwitch}>
          {themeSelect === "dark" ? <Sun/> : <MoonStar/>}
        </Button>

      </div>

      <div className="dark:bg-neon mt-1 h-2 dark:animate-spin-slow"></div>
    </nav>
  );
}