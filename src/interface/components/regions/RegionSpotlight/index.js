/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
/*-* Atoms *-*/
import {
  Flex, Box
} from 'atomic'
/*-* Containers *-*/
import UPortCredentialsAuthRequest from 'assimilation/containers/uport/UPortCredentialsAuthRequest'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Flex
  bg="#0f0c5d"
  p={12.5}
>
<Flex
  direction={['column']}
  width={[1, 1, 0.5]}
>
<UPortCredentialsAuthRequest display="cardAccount"/>
</Flex>
<Flex
  direction={['column']}
  width={[1, 1, 0.5]}
>
  <Box ta='right'>

  </Box>

</Flex>
  
</Flex>
