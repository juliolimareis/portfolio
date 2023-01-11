import React from "react";
import { useTranslation, } from "react-i18next";
import Button from "../components/Button";
import { ArrowBottom, } from "../components/icons";
import { Link, } from "../components/Link";
import MagicCard from "../components/MagicCard";
import { P, } from "../components/P";
import Title from "../components/Title";

// export const BioYear = styled.span`
// 	font-weight: bold;
// 	margin-right: 1em;
// `;

function Home(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div
      className="
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
      "
    >
      <Hero/>
      <Intro/>

      <div className="text-center mt-7">
        <Button className="pb-4">
          Meus Projetos {"^"}
        </Button>
      </div>

      <div>

      </div>

      <Bio/>

      {/* <Example/> */}
      {/* <MagicCard/> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function Bio() {
  return (
    <div>
      <Title>Bio</Title>

      <BioSelection year="1990">
        Born in Pedro Canário, Brasil
      </BioSelection>
      <BioSelection year="2017">
        Graduated in Systems Analysis and Development - Federal Institute of Espírito Santo, Brazil.
      </BioSelection>
      <BioSelection year="2018">
        Worked at National Institute of the Atlantic Forest, Brazil.
      </BioSelection>
      <BioSelection year="2019">
       Worked at Healthmap, Brazil.
      </BioSelection>
      <BioSelection year="2021">
        Worked at DixHealth, Brazil.
      </BioSelection>
      <BioSelection year="2021">
        Worked at CSI, Brazil.
      </BioSelection>
      <BioSelection year="2023">
        Dr.Tis Brasil.
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
  return (
    <div className="mt-3">
      <Title>Sobre</Title>

      <P className="pb-3">
        Desenvolvedor full stack graduado em Análise e desenvolvimento de Sistemas pelo Instituto Federal do Espírito Santo(2017).
      </P>

      <P className="text-justify">
        Comecei desenvolvendo sistemas nos projetos da faculdade que
        renderam boas experiências.
        Meu primeiro trabalho profissional foi no Instituto Nacional da Mata
        Atlântica como desenvolvedor onde durou um ano,
        em seguida comecei a jornada na empresa de gestão do cuidado
        <Link isExternal href="https://healthmap.com.br/"> Healthmap</Link> como analista
        desenvolvedor na qual rendeu dois anos. Logo em seguida tive uma rápida passagem
        na empresa
        <Link
          isExternal
          href="https://www.linkedin.com/company/dixhealth/?originalSubdomain=br"
        > DixHealth
        </Link>.

        Iniciei o trabalho na <Link isExternal href="https://www.linkedin.com/company/csiway/">CSI </Link>
        que durou oito meses.

        Hoje trabalho na <Link isExternal href="https://www.linkedin.com/search/results/all/?keywords=dr.%20tis%20-%20plataforma%20de%20telemedicina%20e%20pacs&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=e6727da5-ee6b-41ad-9b40-d936f5c17335&sid=Yn%3A"> Dr.Tis </Link>
        empresa focada em PACS e telemedicina.
      </P>
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="">
        <div className={"md:shrink-0 w-full h-[500px] bg-hero-cover bg-cover bg-center"}>
          <div className="pt-24">
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
              alt="Júlio César Lima reis"
            />
          </div>

          <p className="text-white text-xl text-center text p-2 mt-5">
            <b>Júlio César Lima Reis</b>
          </p>
          <p className="text-white text-xl text-center p-2">
            <b>
              {t("Dev (Full Stack, Analyst, Developer)")}
            </b>
          </p>

          <ArrowBottom className="w-20 text-white animate-bounce m-auto mt-4" />

        </div>

        {/* <div className="p-8 w">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Company retreats
          </div>

          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Incredible accomodation for your team
          </a>

          <p className="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.
          </p>
        </div> */}

      </div>
    </div>
  );
}

const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function Example(): JSX.Element {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
        <Perfil
          key={person.email}
          imageUrl={person.image}
          personName={person.name}
          personEmail={person.email}
        />
      ))}
    </ul>
  );
}

function Perfil(props: { imageUrl: string, personName: string, personEmail: string }): JSX.Element {
  return (
    <li className="py-4 flex">
      <img
        className="h-10 w-10 rounded-full"
        src={props.imageUrl}
        alt={props.personName}
      />

      <div className="ml-3">
        <p className="text-sm font-medium text-grey-900">{props.personName}</p>
        <p className="text-sm text-grey-500">{props.personEmail}</p>
      </div>
    </li>
  );
}

export default Home;
function styled(arg0: string) {
  throw new Error("Function not implemented.");
}

