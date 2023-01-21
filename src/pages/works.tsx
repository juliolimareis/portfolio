import React from "react";
import { useTranslation, } from "react-i18next";
import { NavLink, } from "react-router-dom";
import Layout from "../components/Layout";
import Title from "../components/Title";
import works from "../database/works.json";

interface WorkGridProps extends React.HTMLAttributes<Element>{
  _id: string
  title: string;
  thumbnail: string;
}

export const WorkGridItem	= ({ children, _id, title, thumbnail }: WorkGridProps): JSX.Element => (
  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 rounded-lg shadow-lg">
    <NavLink to={`/works/${_id}`}>
      <div className="cursor-pointer">
        <img
          alt={title}
          placeholder="blur"
          src={thumbnail}
          className="w-30"
        />

        <p className="text-xl text-primary text-center p-2">
          {title}
        </p>

        <p className="mt-1 text-sm text-center p-1">
          {children}
        </p>
      </div>
    </NavLink>
  </div>
);

export default function Works(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Layout title="Works">
      <Title>{t("Works")}</Title>

      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {works.map(work => (
            <WorkGridItem
              key={work.id}
              _id={work.id}
              title={work.title}
              thumbnail={work.images[0]}
            >
              {work.description}
            </WorkGridItem>
          ))}
        </div>
      </div>
    </Layout>
  );
}