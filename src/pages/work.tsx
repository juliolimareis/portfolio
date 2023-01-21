import React, { useEffect, } from "react";
import Layout from "../components/Layout";
import { Link, } from "../components/Link";
import works from "../database/works.json";
import { useTranslation, } from "react-i18next";
import { ArrowRight, } from "../components/icons";
import { NavLink, useNavigate, useParams, } from "react-router-dom";
import Meta from "../components/Meta";

export default function Works(): JSX.Element {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const work = works.find(work => work.id === id);

  useEffect(() => {
    if(!work) {
      navigate("/404");
    }
  }, []);

  return (
    <Layout title="Works">

      <WorksTitle>
        {t(work?.title ?? "")}
      </WorksTitle>

      <p className="p-3">
        {t(work?.description ?? "")}
      </p>

      {work?.github && (
        <React.Fragment>
          <Meta>Github</Meta>
          <Link
            className="ml-2 text-lg"
            target="_blank"
            href={work?.github}
          >
            {work?.github}
          </Link>
        </React.Fragment>
      )}

      <div className="mt-4">
        {work?.images.map(src => (
          <WorkImage
            key={src}
            src={src}
            alt={t(work?.title) as string}
          />
        ))}
      </div>

    </Layout>
  );
}

export const WorksTitle = (props: React.HTMLProps<Element>): JSX.Element => {
  const { t } = useTranslation();

  return (
    <span>
      <NavLink to="/works">
        {t("Works")}
      </NavLink>

      <ArrowRight className="w-5 ml-2 mr-1 dark:text-white inline-block" />

      <h3 className="inline-block	text-2xl font-bold">
        {props.children}
      </h3>
    </span>
  );
};

export const WorkImage = (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>): JSX.Element => (
  <img
    {...props}
    className={"w-full mb-4 rounded-lg ".concat(" ", props.className ?? "")}
  />
);