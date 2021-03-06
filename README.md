# Welcome to system-media 👋

[![npm version](https://badge.fury.io/js/system-media.svg)](https://badge.fury.io/js/system-media)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> A React utility library to match your props to the given media query

### 🏠 [Homepage](https://github.com/jmaicaaan/system-media)

## Install

```sh
npm install system-media
```

## Usage

### Codesandbox Link:

https://codesandbox.io/s/crazy-zhukovsky-u18zw

```jsx
import React from 'react';

import { system } from 'system-media';

const theme = {
  // Default breakpoints used by styled-system
  breakpoints: ['40em', '52em', '64em'],
};

const Text = ({ value }) => (
  <p
    style={{
      fontFamily: 'comic-sans',
      fontSize: '16px',
    }}
  >
    {system(theme.breakpoints)(value)}
  </p>
);

export default function App() {
  const user = 'Dan Abramov';
  const userDisplayNameMobile = user.split(' ')[0];
  const userDisplayNameDesktop = user;
  return (
    <div className="App">
      <Text
        value={[`Hi ${userDisplayNameMobile}`, `Hi ${userDisplayNameDesktop}`]}
      />
    </div>
  );
}
```

## Author

👤 **JM Santos <johmichaelubas.santos@gmail.com>**

- Website: https://github.com/jmaicaaan
- Github: [@jmaicaaan](https://github.com/jmaicaaan)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/jmaicaaan/system-media/issues).

## Show your support

Give a ⭐️ if this project helped you!
