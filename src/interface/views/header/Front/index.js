/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box,
  Container, Heading, Paragraph, Section,
  MacbookDisplay,
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]} color='white' pos='relative' >
  <Container w={[1200]} >
    <Flex direction={['column', 'row']}  mh={['80vh']} align='center' justify={['center']} >
      <Box w={[1,1,0, 0.5]} color='white' px={[20,40]}  >
        <Container mt={25} w={[560]} >
        <Heading level={[3]} f={[4,5]}mb={15}  >
          Permissions On A<br/> Permissionless Blockchain
        </Heading>
        <Heading level={[3]} f={[2,3]}mb={25}  >
          Universal Login & Access Systems with a Web of Trust
        </Heading>
        </Container>
      </Box>

      <Box w={[1,1,0, 0.5]} >
        <Box w={[1,1,0, '130%']} >
          <MacbookDisplay>
            {/* <Image src={INSERT_IMAGE}/> */}
          </MacbookDisplay>
        </Box>
      </Box>

    </Flex>
  </Container>

</Section>
