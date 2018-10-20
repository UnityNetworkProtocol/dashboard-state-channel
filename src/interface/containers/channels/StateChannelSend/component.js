/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import Web3 from 'web3';

/* ------------------------- Internal Dependencies -------------------------- */
import { commerceInvoice } from 'assets/svg'
import StyleFieldDefault from 'static/style/StyleFieldDefault'
import {
  Flex, Box, SVG, 
  Button, Form, ReduxField
} from 'atomic'
import {
  SelectField,
} from 'redux-form-material-ui'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) =>
<Box {...styled} w={1}>
  <Form w={1}>
      <Box>
        <Field name="transactionAmount" 
          placeholder="Amount: $100.00" 
          component={ReduxField} type="text" 
          {...StyleFieldDefault}
          h={50}
          w={'100%'}
        />    
      </Box>
      <Field
        name="transactionParticipant"
        component={SelectField}
        hintText="Select Contact"
        floatingLabelText="Select Contact"
        fullWidth={true}
      >
        {props.participants.map((address, index) => (
          <MenuItem value={address} key={index}>
            {address}
          </MenuItem>
        ))}
      </Field>
      <Box >
        <Button type="submit" onClick={handleSubmit} gradient={'blue'} py={8} h={50} w={1} >
          <SVG w={30} h={30} svg={commerceInvoice} svgColor='white' /> Submit Deposit
        </Button>
      </Box>
  </Form>
</Box>