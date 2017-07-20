import * as React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import { DateFormatter as DateComponent } from "../src/Date";

const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const dateString = "2015-03-25T12:00:00Z";

describe("Date Formatter", () => {
  it("does basic formatting of a date- without config", () => {
    const wrapper = mount(
      <DateComponent>
        {date}
      </DateComponent>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("does basic formatting of a date string- without config", () => {
    const wrapper = mount(
      <DateComponent>
        {dateString}
      </DateComponent>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("is responsive to locale changes", () => {
    const wrapper = mount(
      <DateComponent locale="de-DE">
        {date}
      </DateComponent>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("takes and applies an options prop", () => {
    const opts = {};
    const wrapper = mount(
      <DateComponent
        locale="en-US"
        options={{
          timeZone: "America/New_York",
          weekday: "long",
          era: "long",
          year: "2-digit",
          month: "long",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "long"
        }}
      >
        {date}
      </DateComponent>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
