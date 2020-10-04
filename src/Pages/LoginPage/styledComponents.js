import styled from 'styled-components'
import { device } from '../../utils/constants/breakPoints'




export const ErrorLabel = styled.p`
color:red;
@media(${device.mobile})
{
    font-size:16px;
}
@media${device.tablet}
{
    font-size:18px;
}
@media(${device.desktop})
{
    font-size:21px;
}

`

export const Container = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
justify-content:center;
align-items:center;
margin:20px;






`