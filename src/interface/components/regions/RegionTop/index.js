/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
/*-* Atoms *-*/
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import Span from 'atoms/Span'

/*-* Containers *-*/
import UserProfile from 'containers/user/UserProfile'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Flex bg={'blue'} color={['white']} direction={['column', 'row']} align={"stretch"} justify="center" boxShadow={[0]} z='15' pos='relative' display={['none', 'none', 'flex']}>
  <Flex align="center" w={[0.2]} pl={[15]} py={[7.5]}>
    <Link to="/community" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>Community</Heading></Link>
    <Link to="/documentation" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>Documentation</Heading></Link>
  </Flex>
  
  <Flex align="center" w={[0.6]} justify="center" direction={['row']} py={[7.5]}>
    <Link to="/bounties" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>Bounties</Heading></Link>
    <Link to="/projects" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>Projects</Heading></Link>
  </Flex>
  <Flex align="center" justify='flex-end' w={[1, 0.1, 0.2]} pr={[10]} >
    <Link to="/about" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>About</Heading></Link>
    <Link to="/mission" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>Mission</Heading></Link>
  </Flex>
</Flex>