/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { ThreeBoxPreview} from 'assets/images'
import {
  Flex, Box, Section, Container, Button,
  Heading, Image, Paragraph, Link,
  BrowserDisplay
} from 'atomic'

import { 
  FormCreatePermission,
  FormPermissionSend,
  FormIdentityDeploy,
  FormERC20Deploy
 } from "forms";

export default props =>
<Section py={[50,100]} >
  <Container w={[520]} >
    <Box ta="center" >
      <Heading f={[4]} color='blue' >
        Create Trust Anchor Permissions
      </Heading>
      <Paragraph f={[1]}>
        Issue an off-chain attestation to a decentralized identity for runtime based permissions.<br/>
        <strong>No Address Whitelist Required.</strong>
      </Paragraph>
    </Box>
    <FormERC20Deploy/>
    <FormCreatePermission/>
    <FormPermissionSend 
      contractName="Verifier"
      contractAddress="0xdfeffeb864e3c02a0dfade1f3b99dc4fdec20095"
    />
  </Container>
</Section>

const PublicProfiles = props => <Flex align='center' mt={[20,40]} >
  
  <Box w={[1,1,0, 0.55]} ta='left' px={[20,40]} >
    <Heading f={[4,5]} color='purple' >
      Public/Private Ethereum Profiles
    </Heading>
    <Heading f={[2,3]} color='charcoal' >
      User Controlled Data
    </Heading>
    <Paragraph color='charcoal' f={[1]} mb={40} >
    Sed vel convallis justo. Vestibulum vel ullamcorper ante. Duis magna neque, pharetra ut luctus nec, egestas sit amet leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam consequat ipsum eros. In hac habitasse platea dictumst. Vivamus commodo risus a dolor rutrum, bibendum consectetur ligula tincidunt. In id laoreet nulla. Proin egestas commodo tellus vel vehicula.
    </Paragraph>
    <Link to='/profile' >
      <Button gradient='cherry' >
          Launch Profile
      </Button>
    </Link>
  </Box>

  <Box w={[1,1,0.45]} py={[20,40]}>
    <BrowserDisplay>
      <Image src={ThreeBoxPreview} w={1} />
    </BrowserDisplay>
  </Box>

</Flex>
