import React from "react";
import { ArrowForward, } from "../components/icons";
import Layout from "../components/Layout";
import SkillTitle from "../components/SkillTitle";
import useLocale from "../hooks/useLocale";
import parse from "html-react-parser";

export default function BackEnd(): JSX.Element {
  const { t } = useLocale();

  return (
    <Layout className="pl-12" title="Back-End">
      <SkillTitle name='Node' years='2018' level={5} color='#74ab5e'>
        <ArrowDesc>{t.bNode1}</ArrowDesc>
        <ArrowDesc>{t.bNode2}</ArrowDesc>
        <ArrowDesc>{t.bNode3}</ArrowDesc>
        <ArrowDesc>{t.bNode4}</ArrowDesc>
        <ArrowDesc>{t.bNode5}</ArrowDesc>
        <ArrowDesc>{t.bNode6}</ArrowDesc>
        <ArrowDesc>{t.bNode7}</ArrowDesc>
        <ArrowDesc>{t.bNode8}</ArrowDesc>
        <ArrowDesc>{t.bNode9}</ArrowDesc>
      </SkillTitle>

      <SkillTitle name='Java' years='2012' level={4} color='#eb2b2f'>
        <ArrowDesc>{t.bJava1}</ArrowDesc>
        <ArrowDesc>{t.bJava2}</ArrowDesc>
        <ArrowDesc>{t.bJava3}</ArrowDesc>
        <ArrowDesc>{t.bJava4}</ArrowDesc>
        <ArrowDesc>{t.bJava5}</ArrowDesc>
        <ArrowDesc>{t.bJava6}</ArrowDesc>
        <ArrowDesc>{t.bJava7}</ArrowDesc>
      </SkillTitle>

      <SkillTitle name='PHP' years='2015' level={4} color='#7377ad'>
        <ArrowDesc>{t.bPHP1}</ArrowDesc>
        <ArrowDesc>{t.bPHP2}</ArrowDesc>
        <ArrowDesc>{t.bPHP3}</ArrowDesc>
        <ArrowDesc>{t.bPHP4}</ArrowDesc>
        <ArrowDesc>{t.bPHP5}</ArrowDesc>
        <ArrowDesc>{t.bPHP6}</ArrowDesc>
        <ArrowDesc>{t.bPHP7}</ArrowDesc>
      </SkillTitle>

      <SkillTitle name='Spring Boot' years='2021' level={4} color='#6aad3d'>
        <ArrowDesc>{t.bSpringBoot1}</ArrowDesc>
        <ArrowDesc>{t.bSpringBoot2}</ArrowDesc>
        <ArrowDesc>{t.bSpringBoot3}</ArrowDesc>
        <ArrowDesc>{t.bSpringBoot4}</ArrowDesc>
        <ArrowDesc>{t.bSpringBoot5}</ArrowDesc>
      </SkillTitle>

      <SkillTitle name='Linux' years='2013' level={5} color=''>
        <ArrowDesc>{t.bLinux1}</ArrowDesc>
        <ArrowDesc>{parse(t.bLinux2)}</ArrowDesc>
        <ArrowDesc>{t.bLinux3}</ArrowDesc>
        <ArrowDesc>{t.bLinux4}</ArrowDesc>
        <ArrowDesc>{t.bLinux5}</ArrowDesc>
        <ArrowDesc>{t.bLinux6}</ArrowDesc>
      </SkillTitle>

      <SkillTitle name='Docker' years='2013' level={4} color='#1099d3'>
        <ArrowDesc>{t.bDocker1}</ArrowDesc>
        <ArrowDesc>{t.bDocker2}</ArrowDesc>
        <ArrowDesc>{t.bDocker3}</ArrowDesc>
        <ArrowDesc>{t.bDocker4}</ArrowDesc>
      </SkillTitle>

      <SkillTitle noExp name={t.database}/>

      <SkillTitle name='Mongodb' years='2021' level={3} />
      <SkillTitle name='SQL Server' years='2020' level={4} />
      <SkillTitle name='MariaDB' years='2015' level={4} />
      <SkillTitle name='MySQL' years='2015' level={4} />
      <SkillTitle name='PostgreSQL' years='2018' level={4} />
      <SkillTitle name='Firebase' years='2018' level={4} />
      <SkillTitle name='Oracle Database' years='2021' level={3} />
    </Layout>
  );
}

const ArrowDesc = ({ children }: React.HTMLProps<Element>) => (
  <div><ArrowForward className="w-[20px]" /> {children}</div>
);
