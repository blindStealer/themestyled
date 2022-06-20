import React from 'react';
import styled from "styled-components";
export const Head = ({children, ...props}) => {

    const StyledHead = styled.div`
      
      display: flex;
      flex-direction: column;
      align-items: center;
      
    background-color: ${props => props.theme.body};
    width: 100% ;
    height: 100vh;
    color: ${props => props.theme.fontColor};
    font-size: ${props => props.size};
    
    `

    const StyledButton = styled.button`
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.fontColor};
    
    `


    console.log(props)

    return (
        <StyledHead {...props}>
            <div>
                <StyledButton onClick={() => props.toggler()} >Change theme</StyledButton>
            </div>
            {children}
        </StyledHead>
    );
};

