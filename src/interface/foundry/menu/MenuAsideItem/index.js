/* ------------------------- External Dependencies -------------------------- */
import lodashMap from 'lodash/map'
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import SVG from 'atoms/SVG'
import Heading from 'atoms/Heading'
import DrawerLink from 'foundry/drawer/DrawerLink'
import PopoverPure from 'containers/popover/PopoverPure'
import { MenuAsideItem as MenuAsideItemRecurse } from 'foundry'

/* ------------------------------- Component -------------------------------- */
const MenuAsideItem = props => {
let SubMenuItems = undefined
if (props.childrenItems) SubMenuItems = <Box bg='white' >{lodashMap(props.childrenItems, MenuAsideItemRecurse)}</Box>
return <Flex 
  {...props}
  {...props.styled} 
  key={props.to}
  style={{borderLeft:'2px solid transparent'}}
  hover={{
    
    background: 'rgba(255,255,255, 0.1)',
    borderLeft: '2px solid #FFF !important'
  }}>
  {console.log(props)}
  {!props.svg ? null :
    <Box flex={['1 1 0']}
      textAlign="center"
      // pr={}
      {...props.styledIconWrapper} 
      >
      <DrawerLink to={props.to}>
        {!props.svg ? null : <SVG svg={props.svg} {...props.icon} color="white" w={[30]} height={[30]} /> }
      </DrawerLink>
    </Box>
  }
  <Box flex={['4 1 0']} py={[10,15]} {...props.titleWrap}>
    <DrawerLink to={props.to}>
      <Heading f={[3]} level={[4]} fontWeight="300" >{props.title}</Heading>
    </DrawerLink>
  </Box>
  {!SubMenuItems? null
  : <Box p={[5]} >
    <PopoverPure delta={`${props.title}${props.owner}SubMenu`} body={SubMenuItems} place="right" preferPlace="right"> 
      <Box mx={[5,10]}><Heading level={[3]} f={[4]}>+</Heading></Box>
    </PopoverPure>
    </Box>
  }
</Flex>
}

MenuAsideItem.defaultProps = {
  align: 'center',
  direction: 'row',
  to: "/",
}

export default MenuAsideItem