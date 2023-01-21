import React from "react";
import HTMLReactParser from "html-react-parser";
import { useNavigate, } from "react-router-dom";
import Button from "../components/Button";
import { ArrowBottom, ArrowRight, Github, LinkedIn, } from "../components/icons";
import Layout from "../components/Layout";
import { Link, } from "../components/Link";
import { P, } from "../components/P";
import Title from "../components/Title";
import useLocale from "../hooks/useLocale";

export default function Home(): JSX.Element {
  const { t } = useLocale();
  const navigate = useNavigate();

  return (
    <Layout title="Home">
      <Hero/>
      <Intro/>

      <div className="text-center mt-7">
        <Button className="pb-4" onClick={() => navigate("/works")}>
          {t.myProjects} <ArrowRight className="w-4 text-white ml-2"/>
        </Button>
      </div>

      <Bio/>
    </Layout>
  );
}

function Bio() {
  const { t } = useLocale();

  return (
    <div>
      <Title>Bio</Title>

      <BioSelection year="1990">
        {t.bornIn}
      </BioSelection>
      <BioSelection year="2017">
        {t.graduation}
      </BioSelection>
      <BioSelection year="2018">
        {t.work1}
      </BioSelection>
      <BioSelection year="2019">
        {t.work2}
      </BioSelection>
      <BioSelection year="2021">
        {t.work3}
      </BioSelection>
      <BioSelection year="2021">
        {t.work4}
      </BioSelection>
      <BioSelection year="2023">
        {t.work5}
      </BioSelection>
    </div>
  );
}

function BioSelection(props: { year: string, children: string }) {
  return (
    <div className="bio-selection">
      <div className="flex">
        <p className="bio-year">
          {props.year}
        </p>
        <p>
          {props.children}
        </p>
      </div>
    </div>
  );
}

function Intro(){
  const { t } = useLocale();

  return (
    <div className="mt-3 p-2">
      <Title>{t.about}</Title>

      <P className="mt-3 mb-3">
        {t.graduated}
      </P>

      <P className="text-justify">
        {HTMLReactParser(t.startDesc)}
      </P>
    </div>
  );
}

function Hero() {
  const { t } = useLocale();

  return (
    <div>
      <div className="">
        <div className={"md:shrink-0 w-full h-[500px] bg-hero-cover bg-cover bg-center"}>
          <div className="pt-10">
            <img
              className="
                m-auto
                -mt-2
                p-2
                rounded-full
                w-44 h-44
                dark:bg-neon
                dark:animate-spin-slow
                bg-gray-transparent
              "
              src="https://media-exp1.licdn.com/dms/image/C4E03AQH-WeO2SXSSuw/profile-displayphoto-shrink_200_200/0/1624736717154?e=2147483647&v=beta&t=Y_i0WVvvHSNwJCnDcl3ufaCnxxVfWI6bo9ySBjcI8BA"
              alt="Júlio César Lima Reis"
            />
          </div>

          <p className="text-white text-xl text-center text p-2 mt-5">
            <b>Júlio César Lima Reis</b>
          </p>
          <p className="text-white text-xl text-center p-2">
            <b>
              {t.dev}
            </b>
          </p>

          <div className="text-center">
            <div className="space-x-4 mb-3 pt-2">
              <Link
                href="https://www.linkedin.com/in/julio-cesar-lima-reis-a8246215b/"
                target="_blank"
              >
                <LinkedIn
                  className="w-9 text-white bg-primary dark:bg-second rounded"
                />
              </Link>
              <Link
                href="https://github.com/juliolimareis/"
                target="_blank"
              >
                <Github
                  className="w-9 text-primary dark:text-second bg-white rounded"
                />
              </Link>
            </div>
            <ArrowBottom className="w-20 text-white animate-bounce mt-5" />
          </div>

        </div>
      </div>
    </div>
  );
}
