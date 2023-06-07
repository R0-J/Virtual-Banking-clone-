import React from 'react'
import { Container,FormWrap, FormContent,  FormInput, Icon, FormH1, FormLabel1,FormButton, Text, Form } from './SignInElements';


const SignIn = () => {
  return (
    <>
       <Container>
        <FormWrap>
            <Icon to='/'>dolla</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel1 htmlFor='for'>Email</FormLabel1>
                    <FormInput type='email' required/>
                    <FormLabel1 htmlFor='for'>Password</FormLabel1>
                    <FormInput type='password' required/>
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forget password</Text>
                </Form>
            </FormContent>
        </FormWrap>
       </Container>
    </>
  )
}

export default SignIn;