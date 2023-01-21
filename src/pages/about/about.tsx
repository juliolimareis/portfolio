import React from "react";
import Button from "../../components/Button";
import { ArrowRight, } from "../../components/icons";
import Layout from "../../components/Layout";
import { P, } from "../../components/P";
import Title from "../../components/Title";
import useLocale from "../../hooks/useLocale";
import parser from "html-react-parser";
import { useNavigate, } from "react-router-dom";

export default function About(): JSX.Element {
  const { t } = useLocale();
  const navigate = useNavigate();

  return (
    <Layout className="p-5" title="Home">
      <Title>{t.about}</Title>

      <P className="pb-3">
        {t.introAbout}
      </P>

      <P>
        <b>
          {t.questionLineWork}
        </b>
        <P className="ml-4">
          {t.systemsDevelopment}
        </P>
      </P>

      <P>
        <b>
          {t.questionAbout}
        </b>
        <P className="ml-4">
          {parser(t.startDesc)}
        </P>
      </P>

      <P>
        <b>
          {t.questionDevStrategies}
        </b>
        <P className="ml-4">
          {parser(t.answerDevStrategies)}
        </P>
      </P>

      <P>
        <b>
          {t.questionDoYouLikeWorking}
        </b>
        <P className="ml-4">
          {t.answerDoYouLikeWorking}
        </P>
      </P>

      <P>
        <b>
          {t.questionTechnologyExperience}
        </b>
      </P>

      <div className="text-center mt-7">
        <Button className="pb-4" onClick={() => navigate("/front-end")}>
          Front-End <ArrowRight className="w-4 text-white ml-2"/>
        </Button>
      </div>

      <div className="text-center mt-7">
        <Button className="pb-4" onClick={() => navigate("/back-end")}>
          Back-End <ArrowRight className="w-4 text-white ml-2"/>
        </Button>
      </div>

    </Layout>
  );
}