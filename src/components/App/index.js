import React from 'react';

import Template from '../../layout';
import CounterValue from '../CounterValue';
import OperationButtons from '../OperationButtons';
import ResetButtons from '../ResetButtons';

const value = 6;

const App = () => (
  <Template logo="https://keepcoding.io/es/wp-content/uploads/sites/4/2015/05/logo-keepcoding-web.png">
    <CounterValue value={value} />
    {value > -10 && value < 10 ? (
      <ResetButtons />
    ) : (
      <OperationButtons />
    )}
  </Template>
);

export default App;
