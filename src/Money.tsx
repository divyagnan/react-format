import * as React from "react";

export interface IMoneyProps {
  locale?: string;
  currency?: string;
  children: any;
}

export const Money: React.SFC<IMoneyProps> = (props): JSX.Element =>
  <span>
    {Intl.NumberFormat(props.locale, {
      style: "currency",
      currency: props.currency
    }).format(props.children)}
  </span>;

Money.defaultProps = {
  locale: "en-US",
  currency: "USD"
};
