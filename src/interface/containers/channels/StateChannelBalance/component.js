/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Heading,
} from 'atomic'

/* ---------------------------- Form Component ------------------------------ */
export default ({styled, ...props}) =>
<Box {...styled} w={1}>
  <Heading f={[3]}>
    Balance: {props.balanceEth}
  </Heading>
  <Heading f={[3]}>
    Staked: {props.balanceStake}
  </Heading>
</Box>