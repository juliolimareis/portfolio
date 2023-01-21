import React from "react";
import { ArrowForward, } from "../components/icons";
import Layout from "../components/Layout";
import SkillTitle from "../components/SkillTitle";
import useLocale from "../hooks/useLocale";

export default function FrontEnd(): JSX.Element {
  const { t } = useLocale();

  return (
    <Layout className="pl-12" title="Front-End">
      <SkillTitle name='Flutter' years='2018' level={4} color='#54c4f8'>
        <ArrowDesc>{t.fFlutter1}</ArrowDesc>
        <ArrowDesc>{t.fFlutter1}</ArrowDesc>
        <ArrowDesc>{t.fFlutter2}</ArrowDesc>
        <ArrowDesc>{t.fFlutter3}</ArrowDesc>
        <ArrowDesc>{t.fFlutter4}</ArrowDesc>
        <ArrowDesc>{t.fFlutter5}</ArrowDesc>
        <ArrowDesc>{t.fFlutter6}</ArrowDesc>
        <ArrowDesc>{t.fFlutter7}</ArrowDesc>
        <ArrowDesc>{t.fFlutter8}</ArrowDesc>
        <ArrowDesc>{t.fFlutter9}</ArrowDesc>
        <ArrowDesc>{t.fFlutter10}</ArrowDesc>
      </SkillTitle>

      <SkillTitle name='Vue' years='2018' level={4} color='#3fb27f'>
        <ArrowDesc>{t.fVue1}</ArrowDesc>
        <ArrowDesc>{t.fVue2}</ArrowDesc>
        <ArrowDesc>{t.fVue3}</ArrowDesc>
        <ArrowDesc>{t.fVue4}</ArrowDesc>
        <ArrowDesc>{t.fVue5}</ArrowDesc>
        <ArrowDesc>{t.fVue6}</ArrowDesc>
        <ArrowDesc>{t.fVue7}</ArrowDesc>
        <ArrowDesc>{t.fVue8}</ArrowDesc>
        <ArrowDesc>{t.fVue9}</ArrowDesc>
        <ArrowDesc>{t.fVue10}</ArrowDesc>
        <ArrowDesc>{t.fVue11}</ArrowDesc>
        <ArrowDesc>{t.fVue12}</ArrowDesc>
        <ArrowDesc>{t.fVue13}</ArrowDesc>
        <ArrowDesc>{t.fVue14}</ArrowDesc>
      </SkillTitle>

      <SkillTitle name='Angular' years='2020' level={4} color='#bd002e'>
        <ArrowDesc>{t.fAngular1}</ArrowDesc>
        <ArrowDesc>{t.fAngular2}</ArrowDesc>
        <ArrowDesc>{t.fAngular3}</ArrowDesc>
        <ArrowDesc>{t.fAngular4}</ArrowDesc>
        <ArrowDesc>{t.fAngular5}</ArrowDesc>
        <ArrowDesc>{t.fAngular6}</ArrowDesc>
        <ArrowDesc>{t.fAngular7}</ArrowDesc>
        <ArrowDesc>{t.fAngular8}</ArrowDesc>
        <ArrowDesc>{t.fAngular9}</ArrowDesc>
        <ArrowDesc>{t.fAngular10}</ArrowDesc>
      </SkillTitle>

      <SkillTitle name='React' years='2021' level={4} color='#5ed3f3'>
        <ArrowDesc>{t.fReact1}</ArrowDesc>
        <ArrowDesc>{t.fReact2}</ArrowDesc>
        <ArrowDesc>{t.fReact3}</ArrowDesc>
        <ArrowDesc>{t.fReact4}</ArrowDesc>
        <ArrowDesc>{t.fReact5}</ArrowDesc>
        <ArrowDesc>{t.fReact6}</ArrowDesc>
        <ArrowDesc>{t.fReact7}</ArrowDesc>
        <ArrowDesc>{t.fReact8}</ArrowDesc>
        <ArrowDesc>{t.fReact9}</ArrowDesc>
        <ArrowDesc>{t.fReact10}</ArrowDesc>
      </SkillTitle>
    </Layout>
  );
}

const ArrowDesc = ({ children }: React.HTMLProps<Element>) => (
  <div><ArrowForward className="w-[20px]" /> {children}</div>
);
