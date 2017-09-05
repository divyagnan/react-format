import * as React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import * as cases from "jest-in-case";

import { Money } from "../src/Money";

cases(
  "Money Formatter",
  opts => {
    const wrapper = mount(
      <Money locale={opts.locale} currency={opts.currency}>
        {opts.value}
      </Money>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  },
  [
    {
      name: "does basic formatting - without config",
      value: 3400
    },
    {
      name: "accepts a locale prop",
      value: 3400,
      locale: "de-DE"
    },
    {
      name: "accepts a currency prop",
      value: 3400,
      currency: "EUR"
    },
    {
      name: "accepts a both a locale prop and a currency prop",
      value: 3400,
      locale: "de-DE",
      currency: "EUR"
    }
  ]
);
