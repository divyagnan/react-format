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
  passthrough?: boolean;
}

const validDate = (potentialDate: any): boolean =>
  potentialDate instanceof Date || !!Date.parse(potentialDate);

const formatDate = (props: IDateProps): string =>
  Intl.DateTimeFormat(props.locale, props.options).format(
    Date.parse(props.children)
  );

export const DateFormatter: React.SFC<IDateProps> = (props): JSX.Element => (
  <span>
    {validDate(props.children) ? (
      formatDate(props)
    ) : (
      props.passthrough && props.children
    )}
  </span>
);

DateFormatter.defaultProps = {
  locale: "en-US",
  options: {},
  passthrough: false
};
