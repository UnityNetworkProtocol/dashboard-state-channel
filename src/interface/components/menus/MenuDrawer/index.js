import React from 'react'
import { commerceInvoice, commerceKiosk} from 'assets/svg'
import {
  Box, Flex, Heading, Span, SVG,
  BackgroundGradient
} from 'atomic'
import { MenuAsideItem } from 'foundry'
import { MenuMainDashboard } from 'static/menus'
export default props => <div>

  <Flex direction='column' boxShadow={5} w={[1]} >
  <BackgroundGradient gradient='blue' o={1} gradientDir='180deg' />
  <BackgroundGradient gradient='bluePurple' o={0.45} gradientDir='195deg' />
  <Flex p={[10]}>
    <Flex w={1} py={10} >
      <Flex direction="column" align="center" justify="center" w={[1,1, 0.33]} >
        <Flex align='center' >
          <SVG w={20} h={20} mr={5} svg={commerceInvoice} svgColor='white' /> <Span fw="300">25</Span>
        </Flex>
        <Heading f={[2]} >
          Open
        </Heading>
      </Flex>

      <Flex direction="column" align="center" justify="center" w={[1,1, 0.33]} >
        <Flex align='center' >
          <SVG w={20} h={20} mr={5} svg={commerceInvoice} svgColor='white' /> <Span fw="300">10</Span>
        </Flex>
        <Heading f={[2]} >
          Requests
        </Heading>
      </Flex>

      <Flex direction="column" align="center" justify="center" w={[1,1, 0.33]} >
        <Flex align='center' >
          <SVG w={20} h={20} mr={5} svg={commerceInvoice} svgColor='white' /> <Span fw="300">2</Span>
        </Flex>
        <Heading f={[2]} >
          Exits
        </Heading>
      </Flex>
    </Flex>
  </Flex>
  </Flex>

  {MenuMainDashboard.map(item=> <MenuAsideItem {...props} {...item}/> )}
</div>