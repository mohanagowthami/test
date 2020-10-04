import React, { useEffect, useState } from 'react'
import Login from "../../components/Login"
import authService from '../../services/authService'
import Loader from "../../components/common/Loader"
import { INVALID_USER_CREDENTIALS } from '../../utils/constants/errorConstants'
import { Container, ErrorLabel } from './styledComponents'
import { Redirect, useHistory } from 'react-router-dom'

export default function LoginPage() {


    const [isLoading, setLoadingStatus] = useState(false)
    const [error, setError] = useState(null)
    const history = useHistory()




    const onSubmission = async (userData) => {
        setLoadingStatus(true)
        try {
            const result = await authService.login(userData)
            // const response = await result.json()
            console.log(result, "result")
            setLoadingStatus(false)
            history.replace("/dashboard")
        }
        catch (error) {
            console.log(error, "error")
            setError({ message: "something went wrong" })
            setLoadingStatus(false)
        }



    }


    return (
        <>

            <Container>
                {error !== null && <ErrorLabel >{INVALID_USER_CREDENTIALS}</ErrorLabel>}
                {isLoading ?
                    <Loader /> :

                    <Login onSubmission={onSubmission} />}
            </Container>

        </>)
}