# React Format
> A React Component to make formatting money/currency easier

### Installation

`npm i react-format --save`

### Usage

```js
// First import the Money component
import { Money } from 'react-format';

// Then use it
<Money locale="en-US" currency="USD">3400</Money>
// This renders $3,400.00
```

### API
```js
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
{/* The child should be the number you want formatted*/}
</Money>
```