/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Flex, Box, Absolute, Container,
  Heading, Image, Paragraph, Link, Span, 
} from 'atomic'

import MenuPopoverProfile from 'components/menus/MenuPopoverProfile'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex justify="center" bg="white" gradient="bluePurple" boxShadow={[3]} b={"2px bottom #bb3636"} >
    <Container w={[1280]} >
      <Flex
        direction={['column', 'row']} align={"stretch"} justify="center"
        color={['charcoal']}
        pos='relative'
      >
        <Flex align="center" direction={['row']} justify="left" w={[1, 1, 0.2]} pl={[15]} py={[7]} >
            <Link to="/">
              <Flex align="center" >
                Proof of Trust
              </Flex>
            </Link>
        </Flex>
        
        <Flex align="center" justify="center" display={['none', 'none', 'flex']} py={[15]} w={[1, 1, 0.6]} >
          <Link to="/about" >
          <Heading f={[2]} color='charcoal' fw={'300'} pr={15} >
              About
            </Heading>
          </Link>
          <Link to="/how-it-works" >
            <Heading f={[2]} color='charcoal' fw={'300'} pr={15} >
              How It Works
            </Heading>
          </Link>
        </Flex>
  
        <Flex align="center" justify='flex-end' py={[10]} w={[1, 1, 0.2]} textAlign="center">
          <MenuPopoverProfile/>
        </Flex>
      
    </Flex>
    </Container>


</Flex>