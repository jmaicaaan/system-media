
import React from 'react';

import { system } from './lib';

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

export function App() {
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

export default App;
