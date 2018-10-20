/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex, Heading, Span, SVG,
  BackgroundGradient
} from 'atomic'
export default props => <Box is="aside" {...props} {...props.layout}>
<BackgroundGradient gradient='bluePurple' o={0.35} gradientDir='180deg' />
  {props.children}
</Box>


