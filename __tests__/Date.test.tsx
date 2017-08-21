import * as React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import { DateFormatter as DateComponent } from "../src/Date";

const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const dateString = "2015-03-25T12:00:00Z";
const zeroDateString = "2015-03-01T00:00:00z";

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
  it("does basic formatting of a zero date string", () => {
    /**
     * if you have a date string as follows "2015-03-01T00:00:00z"
     * in some locales you will see a date that is one day before
     * in other words the date string above with no UTC option will
     * show 2/28/2015 rather than 3/1/2015. Providing the UTC option
     * will give the expected date.
     */

    // "wrong" date - should equal 2/28/2015
    const noUTCwrapper = mount(
      <DateComponent>
        {zeroDateString}
      </DateComponent>
    );
    expect(noUTCwrapper.html()).toEqual("<span>2/28/2015</span>");
    // "correct" date - should equal 3/1/2015
    const UTCwrapper = mount(
      <DateComponent options={{ timeZone: "UTC" }}>
        {zeroDateString}
      </DateComponent>
    );
    expect(UTCwrapper.html()).toEqual("<span>3/1/2015</span>");
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
