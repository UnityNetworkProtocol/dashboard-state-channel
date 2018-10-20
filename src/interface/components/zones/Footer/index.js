/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Flex, Box, Container,
  Heading, Paragraph, Section, 
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section
  color='white'
  bg='charcoal'
  py={[60,90]}
>
  <Container w={[1280]} >
    <Flex align='center' justify='space-between' direction='row' w={[1]} h={'20vh'}  >
      <Box w={[1,1,0.3]} >
        <Heading f={[3,4]}>
          Unity Payments
        </Heading>
        <Paragraph f={[2]}>Business-to-Business Payment Channels</Paragraph>
        <Paragraph f={[0]}>
          Unity Payments channels 
        </Paragraph>
        <Paragraph f={[0]}>
          © 2018 UnityNetwork/ConsenSys
        </Paragraph>
      </Box>
    </Flex>
  </Container>
</Section>
