import React from 'react'
import { useHistory } from 'react-router-dom'
import StyledButton from '../../components/common/Button'
import { Button } from '../../components/common/Button/styledComponents'
import authService from '../../services/authService'
import { Container } from '../LoginPage/styledComponents'
export default function Dashboard() {
    const history = useHistory()

    const handleLogout = () => {
        authService.logout()
        history.push("/")

    }


    return (
        <>  <Container>
            <strong>It is Dashboard</strong>
            <StyledButton title="LOGOUT" onClick={handleLogout} />
        </Container>

        </>)
}