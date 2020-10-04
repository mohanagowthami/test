import styled from 'styled-components'
import { device } from '../../utils/constants/breakPoints'



export const FormContainer = styled.form`
border:1px solid black;
border-radius:6px;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
padding:10px;
@media (${device.mobile})
{
    width:85%;
}
@media ${device.tablet}
{
    width:70%;
}
@media (${device.desktop})
{
    width:40%;
}
`



export const FieldContainer = styled.div`
display:flex;
flex-direction:column;
width:90%;

`



