import React, { ReactElement } from 'react'
import { styled } from '@mui/material'


const StyledImg = styled('img')(({theme}) => ({
    width: "300px",
    height: "100px"
}));

export default function Advertisement(): ReactElement {
    return (
        <>
          <a href="">
            <StyledImg src={require("../img/giphy.gif")} alt=""/>
          </a>
        </>
    )
}