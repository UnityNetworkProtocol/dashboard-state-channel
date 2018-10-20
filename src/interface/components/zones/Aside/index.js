/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Flex, Box, Heading, Span,
} from 'atomic'
/* ------------------------- Internal Dependencies -------------------------- */
import MenuDrawer from 'components/menus/MenuDrawer'
import MenuPopoverProfile from 'components/menus/MenuPopoverProfile'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Flex direction='column' w={[1]} >
  <MenuDrawer owner="aside" />
</Flex>
