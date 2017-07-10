import * as React from "react";

export interface IDateProps {
  locale?: string;
  options?: {
    localeMatcher?: "lookup" | "best-fit";
    timeZone?: string;
    hour12?: boolean;
    formatMatcher?: "basic" | "best-fit";
    weekday?: "narrow" | "short" | "long";
    era?: "narrow" | "short" | "long";
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "narrow" | "short" | "long";
    day?: "numeric" | "2-digit";
    hour?: "numeric" | "2-digit";
    minute?: "numeric" | "2-digit";
    second?: "numeric" | "2-digit";
    timeZoneName?: "short" | "long";
  };
  children: any;
}

export const Date: React.SFC<IDateProps> = (props): JSX.Element =>
  <span>
    {Intl.DateTimeFormat(props.locale, props.options).format(props.children)}
  </span>;

Date.defaultProps = {
  locale: "en-US",
  options: {}
};
