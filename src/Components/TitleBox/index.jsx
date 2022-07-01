import styled from "styled-components";
import React from "react";


const TitleBox = (props) => {
    return (
        <NoivosTitle>
            {props.content}
        </NoivosTitle>
    );
};


const NoivosTitle = styled.h1`

    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

    font-family: 'Dancing Script', cursive;
    font-size: 50px;
    /* position: relative; */
    /* grid-column: 3 / 5; */
    
    text-align: center;
`;


export { TitleBox };