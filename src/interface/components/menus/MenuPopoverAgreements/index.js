/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import {commerceInvoice} from 'assets/svg'
import {
 Flex, Box,
 Button, Heading, Link, Paragraph, SVG, List
} from 'atomic'

import { PopoverPure } from 'containers'
import DialogOpen from 'containers/dialog/DialogOpen'
import PopoverClose from 'containers/popover/PopoverClose'
/* ------------------------------- Component -------------------------------- */
export default props => <Flex diretion={['column', 'row']} >
  <Box px={[10]} {...props.styled} >
    <PopoverPure delta='MenuFeatures' body={Body} >
      <Flex align='center' direction='column' justify="center" >
        <SVG w={30} h={30} svg={commerceInvoice}/>
        <Heading f={[1]} fw='300' >
          Agreements
        </Heading>
      </Flex>
    </PopoverPure>
    </Box>
</Flex>


const Body = props => <Box w={[1,1,675]} boxShadow={2} hover={{boxShadow: 3}}  br={10} >
  <Flex direction={['column', 'row']} >
    <Box w={[1,1,0.45]} gradient='bluePurple' color='white' p={[10,20]} bs={1} >
      <PerfectScrollbar>
        <Heading level={[3]} f={[3,4]}>Agreements</Heading>
        <List>
          <Link to="/agreements/open">Open</Link>
          <Link to="/agreements/closed">Closed</Link>
          <Link to="/agreements/dispute">Dispute</Link>
        </List>
      </PerfectScrollbar>
    </Box>
    <Box w={[1,1,0.7]} bg='white' color='charcoal'p={[10,15]} bs={1}>
        <Box h={[300, 450]}>
          <Heading f={[4]} color="blue" >
            Features
          </Heading>
          <Paragraph f={[1]}>
            Phasellus malesuada, ante elementum vehicula pretium, nisi turpis consequat nunc, vitae faucibus massa nulla a dolor. Nullam nec velit a nisi sodales dictum. Sed ac sem quis turpis molestie laoreet quis sed arcu. Aenean ligula risus, bibendum vel commodo vitae, dapibus vel nisl. Sed interdum tortor vitae sapien porttitor gravida eget et risus.
          </Paragraph>
          <Heading f={[3]} color="blue">
            Ready To Go Solutions
          </Heading>
          <Paragraph f={[1]}>
            Sed ac sem quis turpis molestie laoreet quis sed arcu. Aenean ligula risus, bibendum vel commodo vitae, dapibus vel nisl. Sed interdum tortor vitae sapien porttitor gravida eget et risus.
          </Paragraph>
        </Box>
    </Box>
  </Flex>
</Box>
