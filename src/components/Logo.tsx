import React, { ReactElement } from 'react'
import { styled } from '@mui/material'
import { Link } from 'react-router-dom';

const StyledImg = styled('img')(({theme}) => ({
    width: "100px",
    height: "100px"
}));

export default function Logo(): ReactElement {
    return (
        <>
            <Link to="/"><StyledImg src={require("../img/bookstore.png")} alt=""/></Link>
        </>
    )
}

