

import React from 'react'
import * as yup from 'yup';
import { FieldContainer, FormContainer } from './styledComponents';
import { Formik } from 'formik';

import StyledButton from '../../components/common/Button';
import ErrorText from '../../components/common/ErrorText';
import StyledInput from '../common/StyledInput';



const validationSchema = yup.object().shape({
    email: yup.string()
        .email()
        .required("Required"),
    password: yup.string()
        .required("No password provided.")
        .min(3, "")

})
export default function Login(props) {
    return (
        <>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(userData, { setSubmitting }) => {
                    setSubmitting(false)
                    props.onSubmission(userData)

                }} validationSchema={validationSchema}>
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;
                    return (
                        <>
                            <FormContainer onSubmit={handleSubmit}>
                                <FieldContainer>
                                    <label htmlFor="email">Email</label>
                                    <StyledInput
                                        name="email"
                                        type="text"
                                        placeholder="Enter email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        data-testid="email" />
                                    {errors.email && touched.email && (
                                        <ErrorText data-testid="error1" title={errors.email} />
                                    )}
                                </FieldContainer>
                                <FieldContainer>
                                    <label htmlFor="password">Password</label>
                                    <StyledInput
                                        name="password"
                                        type="password"
                                        data-testid="password"
                                        placeholder="Enter password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.password && touched.password && "error"}
                                    />
                                    {errors.password && touched.password && (
                                        <ErrorText title={errors.password} />
                                    )}
                                </FieldContainer>

                                <StyledButton type="submit" disabled={isSubmitting} title="Login" />

                            </FormContainer>
                        </>
                    );
                }}
            </Formik>

        </>)
}