import React from 'react'
import {
  Box, Flex, Heading, Paragraph, HorizontalRule
} from 'atomic'

import StateChannelCard  from "containers/channels/StateChannelCard"
import ActivityPeople from 'containers/activity/ActivityPeople'

// State Channels
import StateChannelConnext from 'containers/channels/StateChannelConnext'
import StateChannelSend from 'containers/channels/StateChannelSend'

console.log(StateChannelCard)
const ActiveChannels = [
  {
    name: "Global Trade Matrix",
    address: "0xc78ba87a035126d40bff69d731b2e4390fd9f36f",
    hash: '0xmatrix',
    members: [
      "0xbe335c3d8614a863a550966372c865e079cca4e8",
      "0xbe335c3d8614a863a550966372c865e079cca4e8",
      "0xbe335c3d8614a863a550966372c865e079cca4e8",
    ],
    messageCount: "",
  },
  {
    name: "Local Sharing Economy",
    address: "0xc78ba87a035126d40bff69d731b2e4390fd9f36f",
    hash: '0xmatrix',
    members: [
      "0xbe335c3d8614a863a550966372c865e079cca4e8",
      "0xbe335c3d8614a863a550966372c865e079cca4e8",
      "0xbe335c3d8614a863a550966372c865e079cca4e8",
    ],
    messageCount: "",
  },
  {
    name: "World Value Transfer Network",
    address: "0xc78ba87a035126d40bff69d731b2e4390fd9f36f",
    hash: '0xmatrix',
    members: [
      "0xbe335c3d8614a863a550966372c865e079cca4e8",
      "0xbe335c3d8614a863a550966372c865e079cca4e8",
      "0xbe335c3d8614a863a550966372c865e079cca4e8",
    ],
    messageCount: "",
  }
]

const Demo = props =>(
<Box p={[20]} w={[200,270]} >
  <Heading f={[3]}>
    Activity Feed
  </Heading>
  <HorizontalRule/>
  <ActivityPeople/>
</Box>
);

const DashboardDemo = props =>(
<Box p={[30,50]} >
  <StateChannelConnext/>

  <StateChannelSend styled={{mt: 10}} />

  <Box bg='white' br={10} boxShadow={1} mb={20} p={25} w={1} >
    <Heading f={[3]}>
      The Latest Activity
    </Heading>
    <Paragraph f={[1]}>
      A stream of the latest payment channel information
    </Paragraph>
  </Box>
  <Box bg='white' br={10} boxShadow={1} mb={20} p={25} w={1} >
    <Heading f={[3]}>
      The Latest Activity
    </Heading>
    <Paragraph f={[1]}>
      A stream of the latest payment channel information
    </Paragraph>
  </Box>
  <Box bg='white' br={10} boxShadow={1} mb={20} p={25} w={1} >
    <Heading f={[3]}>
      The Latest Activity
    </Heading>
    <Paragraph f={[1]}>
      A stream of the latest payment channel information
    </Paragraph>
  </Box>
</Box>
);

const StateChannels = props => (
<Box p={[30,50]} >
  <Heading color='gray' f={[3]} fw='300' mb={0} >
    Track Business to Business Payments
  </Heading>
  <Heading color='purple' f={[4,5]}>
    Payment Channels
  </Heading>
  <Flex direction="column" >
    {ActiveChannels.map((item, index) => <StateChannelCard key={index} {...item}/> )}
  </Flex>
</Box>
)



export default [
  {
    path: "/",
    main: DashboardDemo,
    panelRight: Demo,
    props: {
      exact: true,
    }
  },
  /* ------------------------- Users -------------------------- */
  {
    path: "/state-channels",
    main: StateChannels,
  },
  {
    path: "/transfers",
    // main: PubSubExample,
  },
  {
    path: "/tokens",
    main: Demo,
  },
  {
    path: "/settings",
    main: Demo,
  },

]