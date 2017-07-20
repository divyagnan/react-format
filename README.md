# React Format [![codecov](https://codecov.io/gh/divyagnan/react-format/branch/master/graph/badge.svg)](https://codecov.io/gh/divyagnan/react-format) [![npm version](https://badge.fury.io/js/react-format.svg)](https://badge.fury.io/js/react-format)
> A React Component to make formatting money/currency easier

### Installation

`npm i react-format --save`

### Usage

```jsx
// First import an available formatting component
import { Money } from 'react-format';

// Then use it
<Money locale="en-US" currency="USD">3400</Money>
// This renders $3,400.00
```

### API
#### Available Formatting Components
* [Money](#money)
* [Date](#date)

##### Money
```jsx
<Money
  /*
   * This is an optional string with the code for the locale.
   * This defaults to "en-US"
   */
  locale="en-US"
  /*
   * This is an optional string with the code for the currency.
   * This defaults to "USD"
   */
  currency="USD"
>
{/* The child should be the number you want formatted */}
</Money>
```
##### Date
```jsx
<Date
  /*
   * This is an optional string with the code for the locale.
   * This defaults to "en-US"
   */
  locale="en-US"
  /*
   * This is an optional object with options that you can pass in.
   * This defaults to an empty object.
   */
  options={}
>
  {/* The child should be the date you want formatted */}
</Date>
```
