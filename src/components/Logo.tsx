import React, { ReactElement } from 'react'
import { styled } from '@mui/material'


const StyledImg = styled('img')(({theme}) => ({
    width: "100px",
    height: "100px"
}));

export default function Logo(): ReactElement {
    return (
        <>
            <a href="#"><StyledImg src={require("../img/bookstore.png")} alt=""/></a>
        </>
    )
}

