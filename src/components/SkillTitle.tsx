import React from "react";
import { useTranslation, } from "react-i18next";
import { Star, } from "./icons";
import Meta from "./Meta";

interface SkillTitleProps extends React.HTMLProps<Element>{
	name: string;
	level?: number;
	years?: string;
	color?: string;
	noExp?: boolean;
}

export default function SkillTitle(
  { name, level, years, color, noExp, className, children }: SkillTitleProps
): JSX.Element {
  const { t } = useTranslation();
  const maxScore = 5;

  return (
    <div className={"mb-4".concat(" ", className ?? "")}>
      <span className="text-lg">
        <b style={{ color }}>{name}</b>
        {
          !noExp && (
            <span className="text-lg font-bold">
							&nbsp;-&nbsp;
              {t("Experiência")} &nbsp;
            </span>
          )
        }

        <span>
          { level && (
            [...Array(level)].map((_, i) => (
              <span key={i}>
                <Star
                  className="mb-2 w-4 dark:text-yellow-300 text-primary"
                />
              </span>
            ))
          )}

          {level && level < maxScore && (
            [...Array(maxScore - level)].map((_, i) => (
              <span key={i}>
                <Star
                  className="mb-2 w-4 dark:text-slate-50 text-slate-300"
                />
              </span>
            ))
          )}
        </span>

				&nbsp;&nbsp;

        {
          years && (
            <Meta>
              {years}
            </Meta>
          )
        }
      </span>

      <div className="pl-6 text-lg">
        {children}
      </div>

    </div>
  );
}