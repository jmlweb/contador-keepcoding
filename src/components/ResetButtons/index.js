import React from 'react';

import Text from '../Text';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

const ResetButtons = () => (
  <div>
    <Text center color="#ff0000">
      Has llegado al límite
    </Text>
    <ButtonGroup center>
      <Button type="button">
        Reiniciar
      </Button>
    </ButtonGroup>
  </div>
);

export default ResetButtons;
