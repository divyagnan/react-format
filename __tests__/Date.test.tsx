import * as React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import * as cases from "jest-in-case";

import { DateFormatter as DateComponent } from "../src/Date";

const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const dateString = "2015-03-25T12:00:00Z";
const zeroDateString = "2015-03-01T00:00:00z";
const badDate = "badDate";

cases(
  "Date Formatter",
  opts => {
    const wrapper = mount(
      <DateComponent locale={opts.locale} options={opts.options}>
        {opts.date}
      </DateComponent>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  },
  [
    {
      name: "Bad Date passed in",
      date: "badDate"
    },
    {
      name: "does basic formatting of a date- without config",
      date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0))
    },
    {
      name: "does basic formatting of a date string- without config",
      date: "2015-03-25T12:00:00Z"
    },
    {
      name: "does basic formatting of a zero date string without UTC option",
      date: "2015-03-01T00:00:00z"
    },
    {
      name: "does basic formatting of a zero date string with UTC option",
      date: "2015-03-01T00:00:00z",
      options: { timeZone: "UTC" }
    },
    {
      name: "is responsive to locale changes",
      date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
      locale: "de-DE"
    },
    {
      name: "takes and applies an options prop",
      date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
      locale: "en-US",
      options: {
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
      }
    }
  ]
);
