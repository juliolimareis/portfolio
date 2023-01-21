import React from "react";
import { useNavigate, } from "react-router-dom";
import Button from "../../components/Button";
import useLocale from "../../hooks/useLocale";
import "./style.css";

export default function Page404(){
  const navigate = useNavigate();
  const { t } = useLocale();

  return (
    <React.Fragment>
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>

      <section className="error">
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title text-white dark:text-black">404</h1>
            <h1 className="message__title text-white dark:text-black">{t.page404}</h1>
          </div>

          <Button onClick={() => navigate("/", { replace: true })}>Home</Button>
        </div>
      </section>

    </React.Fragment>
  );
}