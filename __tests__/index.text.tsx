import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Hello } from "../src";

it("Renders", () => {
  const elem = shallow(<Hello compiler="Typescript" framework="React" />);
  expect(toJson(elem)).toMatchSnapshot();
});
