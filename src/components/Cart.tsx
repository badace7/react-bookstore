import React, { ReactElement } from 'react'
import { styled } from '@mui/material'
import CartLogo from './CartLogo';



const StyledCart = styled('div')(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    textDecorationInitial: "initial",
    color: "white"
}));


export default function Cart(): ReactElement {
    return (
        <>
            <StyledCart>
                <CartLogo />
                <div>Shopping Cart</div>
            </StyledCart>
        </>
    );
};