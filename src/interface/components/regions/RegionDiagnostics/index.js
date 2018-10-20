/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { logo } from "assets/images"
import {
  Flex, Box, Heading, Span, Image
} from 'atomic'
import DrawerOpen from 'containers/drawer/DrawerOpen'
import MenuPopoverProfile from 'components/menus/MenuPopoverProfile'
import MenuPopoverFeatures from 'components/menus/MenuPopoverFeatures'
import MenuPopoverNetwork from 'components/menus/MenuPopoverNetwork'
import MenuPopoverWithdrawl from 'components/menus/MenuPopoverWithdrawl'
import MenuPopoverActivity from 'components/menus/MenuPopoverActivity'
import MenuPopoverAnalytics from 'components/menus/MenuPopoverAnalytics'
import MenuPopoverReporting from 'components/menus/MenuPopoverReporting'

import FormSearchGlobal from 'forms/FormSearchGlobal'
import StateChannelBalance from 'containers/channels/StateChannelBalance'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box w={[1]} >
  <Flex direction={['column', 'row']} align={"stretch"}
    // gradient="bluePurple" gradientDir="90deg"
    bg="white" boxShadow={1}
    px={15}
    height={'80px'} color='charcoal' pos='relative'>
    <Flex align="center"  w={[1, 1, 0.25]} display={['none', 'none', 'flex']} py={[10]} >
      <Image src={logo} w={40} h={40} mr={20} />
      <Flex direction="column" >
        <Flex direction="column" >
          <StateChannelBalance/>
        </Flex>
      </Flex>
    </Flex>

    <Flex align="center" justify='center'  pr={[null, null, 15]} py={[5, 5, 'inherit']} w={[1, 1, 0.25]}>
      <MenuPopoverFeatures styled={{color: "blue"}} />
      <MenuPopoverActivity styled={{color: "blue"}} />
      <MenuPopoverWithdrawl styled={{color: "blue"}} />
    </Flex>
    <Flex align="center" justify='center' py={[5, 5, 'inherit']} w={[1, 1, 0.25]}>
      <FormSearchGlobal/>
    </Flex>
    <Flex align="center" justify='center' py={[5, 5, 25]} w={[1, 1, 0.25]}>
      <MenuPopoverAnalytics styled={{color: "blue"}} />
      <MenuPopoverReporting styled={{color: "blue"}} />
      <MenuPopoverNetwork styled={{color: "blue"}} />
    </Flex>
    
    <Flex align="center" justify='flex-end' py={[10]} w={[1, 1, 0.10]} textAlign="center">
      {/* <DrawerOpen><Heading f={[2]} level={[4]}><a>Menu</a></Heading></DrawerOpen> */}
      <MenuPopoverProfile/>
    </Flex>
    
  </Flex>

</Box>
