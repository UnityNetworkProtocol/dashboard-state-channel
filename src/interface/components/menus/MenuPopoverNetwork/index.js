/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { networkCloud } from 'assets/svg'
import {
 Flex, Box,
 Button, Heading, Link, Paragraph, SVG, List
} from 'atomic'

import { PopoverPure } from 'containers'
/* ------------------------------- Component -------------------------------- */
export default props => <Flex diretion={['column', 'row']} >
  <Box px={[10]} {...props.styled} >
    <PopoverPure delta='MenuNetwork' body={Body} >
      <Flex align='center' direction='column' justify="center" >
        <SVG w={30} h={30} svg={networkCloud}/>
        <Heading f={[1]} fw='300' >
          Network
        </Heading>
      </Flex>
    </PopoverPure>
    </Box>
</Flex>


const Body = props => <Box w={[1,1,675]} boxShadow={2} hover={{boxShadow: 3}}  br={10} >
  <Flex direction={['column', 'row']} >
    <Box w={[1,1,0.45]} gradient='bluePurple' color='white' p={[10,20]} bs={1} >
      <PerfectScrollbar>
        <Heading level={[3]} f={[3,4]}>Network</Heading>
        <List>
          <Link to="/network/established">Established</Link>
          <Link to="/network/requests">Requests</Link>
          <Link to="/network/completed">Completed</Link>
        </List>
      </PerfectScrollbar>
    </Box>
    <Box w={[1,1,0.7]} bg='white' color='charcoal'p={[10,15]} bs={1}>
        <Box h={[300, 450]}>
          <Heading f={[4]} color="blue" >
            The Network Overview
          </Heading>
 
        </Box>
    </Box>
  </Flex>
</Box>
