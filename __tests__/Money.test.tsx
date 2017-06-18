import * as React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import { Money } from "../src/Money";

describe("Money Formatter", () => {
  it("does basic formatting - without config", () => {
    // Using the default props to have locale as "en-US" and currency as "USD"
    const wrapper = mount(<Money>3400</Money>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("accepts a locale prop", () => {
    const wrapper = mount(<Money locale="en-IN">3400</Money>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("accepts a currency prop", () => {
    const wrapper = mount(<Money currency="EUR">3400</Money>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("accepts a both a locale prop and a currency prop", () => {
    const wrapper = mount(<Money locale="ja-JP" currency="JPY">3400</Money>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
