import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownComponent = () => (
  <Dropdown text="File">
    <Dropdown.Menu>
      <Dropdown.Item text="NewHello" />
      <Dropdown.Divider />
      <Dropdown.Item text="Download" />
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownComponent;
