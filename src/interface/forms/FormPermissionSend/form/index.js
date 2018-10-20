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
        name="permissionMessage" 
        placeholder="Message" 
        component={ReduxField} 
        {...StyleFieldDefault} h={50}
      />
      <Field 
        type="text" 
        name="permissionSignature" 
        placeholder="Signature" 
        component={ReduxField} 
        {...StyleFieldDefault} h={50}
      />
      <Field 
        type="text" 
        name="permissionV" 
        placeholder="V" 
        component={ReduxField} 
        {...StyleFieldDefault} h={50}
      />    
      <Field 
        type="text" 
        name="permissionR" 
        placeholder="R" 
        component={ReduxField} 
        {...StyleFieldDefault} h={50}
      />    
      <Field 
        type="text" 
        name="permissionS" 
        placeholder="S" 
        component={ReduxField} 
        {...StyleFieldDefault} h={50}
      />    
    </Box>
    <Box mt={10} >
      <Button type="submit" onClick={handleSubmit} gradient={'cherry'} w={1} py={15} >
        Submit
      </Button>
    </Box>
  </Form>
</Box>