/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
// atoms
import StyleFieldDefault from 'static/style/StyleFieldDefault'
import {
  Box, 
  Button, Heading, Paragraph,
  BackgroundImage, List,
  Form, ReduxField
} from 'atomic'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) =>
<Box w={1}>
  <Form {...styled} w={1}>
    <Box >
      <Field 
        type="text" 
        name="ethAddress" 
        placeholder="Address" 
        component={ReduxField} 
        {...StyleFieldDefault} h={50}
      />
      <Field 
        type="text" 
        name="ethPermission" 
        placeholder="Message" 
        component={ReduxField} 
        {...StyleFieldDefault} h={50}
      />    
    {console.log(props)}
    </Box>
    {
      props.status &&
      <Box>
        <Heading f={[3]}>
          Message: 
        </Heading>
        <Paragraph f={[1]}>
          {props.data.message}
        </Paragraph>
        <Heading f={[3]}>
          Signature: 
        </Heading>
        <Paragraph f={[1]}>
          {props.data.signature}
        </Paragraph>
        <Heading f={[2]}>
          Signature Split
          <List>
            <Paragraph f={[1]} color="charcoal" >
              r: {props.data.signatureSplit.r}
            </Paragraph>
            <Paragraph f={[1]}>
              s: {props.data.signatureSplit.s}
            </Paragraph>
            <Paragraph f={[1]}>
              v: {props.data.signatureSplit.v}
            </Paragraph>
          </List>
        </Heading>
      </Box>
    }
    <Box mt={10} >
      <Button type="submit" onClick={handleSubmit} gradient={'cherry'} w={1} py={15} >
        Submit
      </Button>
    </Box>
  </Form>
</Box>