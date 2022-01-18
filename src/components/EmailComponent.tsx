import React from "react"
import axios from "axios"
import { joinWaitList } from "constants/utils"
import { Field, Form, Formik, FormikHelpers } from "formik"
import * as Yup from "yup"
import { toast } from "react-toastify"
import { CypherTheme } from "styles/ColorStyles"
import styled from "styled-components"
import { Body4 } from "styles/TextStyles"
import Loader from "./Loader"
interface Values {
  email: string
}
const EmailComponent = () => {
  const FormSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
  })

  //when form is submitted function
  const submitForm = (values: Values, onSubmitProps: FormikHelpers<Values>) => {
    onSubmitProps.setSubmitting(true)
    axios
      .post(joinWaitList, { values })
      .then((res) => {
        toast.success("😁😎We have received your interest.")
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
      })
      .catch((err) => {
        onSubmitProps.setSubmitting(false)
      })
  }

  return (
    <Body>
      <Cover>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={submitForm}
          validationSchema={FormSchema}
        >
          {({
            errors,
            touched,
            handleChange,
            isSubmitting,
            values,
            handleBlur,
          }) => (
            <LegendsForm>
              <FormColumn>
                <FormRow>
                  <FormInput
                    id="email"
                    placeholder="Enter Email Address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    as="input"
                    type="email"
                  />

                  <FormButton type="submit">
                    {isSubmitting ? <Loader /> : "Join the Newsletter"}
                  </FormButton>
                </FormRow>
                {errors.email && touched.email && (
                  <FormError>
                    <FormErrorText>Your email is required</FormErrorText>
                  </FormError>
                )}
              </FormColumn>
            </LegendsForm>
          )}
        </Formik>
      </Cover>
    </Body>
  )
}

const Body = styled.section`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${CypherTheme.primary};
  height: 100%;
  padding: 16px;
`

const Cover = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const LegendsForm = styled(Form)`
  max-width: 1020px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
`
const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`
const FormInput = styled(Field)`
  height: 80px;
  background: ${CypherTheme.dark};
  max-width: 584px;
  width: 100%;
  padding: 18px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${CypherTheme.white};
  font-family: "Atures";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  line-height: 43px;
  letter-spacing: 0.05em;

  ::placeholder {
    font-family: "Atures";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    line-height: 43px;
    letter-spacing: 0.05em;

    @media only screen and (max-width: 650px) {
      font-size: 16px;
    }
  }
`
const FormButton = styled.button`
  height: 80px;
  background: ${CypherTheme.white};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 396px;
  margin: 0 0 0 40px;
  padding: 0 18px;
  outline: none;
  border: none;
  cursor: pointer;

  font-family: "Atures";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0.05em;
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    margin: 40px 0;
  }
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`

const FormError = styled.div`
  transition: 0.4s ease-in;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  justify-content: center;
  align-items: flex-start;
  color: ${CypherTheme.red};
`

const FormErrorText = styled(Body4)``

const FormColumn = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export default EmailComponent
