import React from 'react'
import { Button } from './styledComponents'
export default function StyledButton({ title, ...rest }) {
    return (
        <>
            <Button {...rest}>{title}</Button>
        </>)
}