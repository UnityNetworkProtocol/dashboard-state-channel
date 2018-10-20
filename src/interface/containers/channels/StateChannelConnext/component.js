/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { dataAnalytics } from 'assets/svg'
import StyleFieldDefault from 'static/style/StyleFieldDefault'
import {
  Flex, Box, SVG, 
  Button, Form, ReduxField
} from 'atomic'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) =>
<Box w={1}>
  <Form {...styled} w={1}>
      <Box>
        <Field name="eth-deposit" 
          placeholder="Enter ETH Amount to Deposit(Stake)" 
          component={ReduxField} type="text" 
          {...StyleFieldDefault}
          h={50}
          w={'100%'}
        />    
      </Box>
      <Box >
        <Button type="submit" onClick={handleSubmit} gradient={'blue'} py={8} h={50} w={1} >
          <SVG w={30} h={30} svg={dataAnalytics} svgColor='white' /> Submit Deposit
        </Button>
      </Box>
  </Form>
</Box>