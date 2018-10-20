/* --- Global Dependencies --- */
import React from "react";
import { avatarDemo } from "assets/images"
/* --- Local Dependencies --- */
import {
  Box, Flex, Heading, Paragraph, Image, BackgroundGradient
} from "atomic";


const People = [
  {
    avatar: avatarDemo,
    name: 'Kames Geraghty',
    date: 'September 20th, 2018',
    address: '0xkamesGeraghty',
    transferAmount: '$15,432.33',
    transferTo: '0xc78ba87a035...',
  },
  {
    avatar: avatarDemo,
    name: 'Shadow Knight',
    date: 'September 26th, 2018',
    address: '0xkamesGeraghty',
    transferAmount: '$5,236.33',
    transferTo: '0xc78ba87a035...',
  },
  {
    avatar: avatarDemo,
    name: 'VivaLaCodelucion',
    date: 'April 20th, 2018',
    address: '0xkamesGeraghty',
    transferAmount: '$420.69',
    transferTo: '0xc78ba87a035...',
  },
  {
    avatar: avatarDemo,
    name: 'Kames Geraghty',
    date: 'September 20th, 2018',
    address: '0xkamesGeraghty',
    transferAmount: '$15,432.33',
    transferTo: '0xc78ba87a035...',
  },
  {
    avatar: avatarDemo,
    name: 'Shadow Knight',
    date: 'September 26th, 2018',
    address: '0xkamesGeraghty',
    transferAmount: '$5,236.33',
    transferTo: '0xc78ba87a035...',
  },
  {
    avatar: avatarDemo,
    name: 'VivaLaCodelucion',
    date: 'April 20th, 2018',
    address: '0xkamesGeraghty',
    transferAmount: '$420.69',
    transferTo: '0xc78ba87a035...',
  },
]

/* ------- React Component ------- */
export default props => 
<Flex direction='column' >
  {
    People.map((item, index) => 
      <Flex direction='column' mb={20} hover={{boxShadow:1}} br={10} p={8} >
        <Flex align='center'>
          <Box>
            <Image src={item.avatar} br={9999} b='2px solid #FFF' boxShadow={0} mr={10} w={35} h={35} />
          </Box>
          <Flex direction='column' >
            <Heading f={[1]} fw='300' mb={0} >
              {item.name}
            </Heading>
            <Paragraph f={[0]}>
              {item.date}
            </Paragraph>
          </Flex>
        </Flex>
        <Paragraph f={[0]}>
          Transfered: <strong>{item.transferAmount}</strong> to <em>{item.transferTo}</em>
        </Paragraph>
      </Flex>
    )
  }
</Flex>