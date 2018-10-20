/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import {
  Flex,
  Heading,
  Paragraph,
  List,
  Link,
  Span,
} from "atomic";

/* ------- React Component ------- */
export default props => 
<Flex bg="white" br={5} boxShadow={1} mb={30} w={1}
  hover={{
    boxShadow: 2
  }}
>
  {/* <Flex
    align="center" direction="column"
    bg='green' w={[1,1,0.2]} >
    <Heading f={[5]}>
      Healthy
    </Heading>
    <Heading f={[3]}>
      Status
    </Heading>
  </Flex> */}
  <Flex
    direction="column"
    p={[15]} w={[1,1,0.8]} >
    <Link to={`/state-channel/${props.hash}`} >
      <Heading color='gray' f={[4,5]}>
        {props.name}
      </Heading>
    </Link>
    <Heading color='charcoal' f={[2]} fw='300' >
      <strong>Safe Address:</strong> {props.address}
    </Heading>
    <hr/>
    <Heading color='charcoal' f={[2]} fw='300' >
      <strong>Active Participants:</strong>
    </Heading>
    <List>
      {props.members.map((address, index)=> <Span key={index}>{address}</Span> )}
    </List>
  </Flex>
  <Flex color='white' gradient="bluePurple" p={[15]} w={[1,1,0.2]} >
    <Paragraph f={[1]}>
      Messages: 1
    </Paragraph>
  </Flex>
</Flex>


// const ActiveChannels = [
//   {
//     name: "Big Business",
//     address: "0x3m4323",
//     members: [
//       "0x1...",
//       "0x2...",
//       "0x3...",
//       "0x4...",
//     ],
//     messageCount: "",
//   }
// ]