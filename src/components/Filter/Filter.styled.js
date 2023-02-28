import styled from 'styled-components';

export const StyledFilter = styled.label`
display: flex;
gap: 10px;
align-items: center;
width: 400px;
color: ${({ theme }) => theme.colors.primaryTextColor};
margin-left: auto;
margin-right: auto;
margin-bottom: 12px;
`;


export const StyledInput = styled.input`
padding: 8px 16px;
border: ${({ theme }) => `1px solid ${theme.colors.borderInputColor}`};
border-radius: 10px;
transition-property: border;
transition: ${({ theme }) => `border ${theme.colors.transition}`};

:focus {
outline: none;
border: ${({ theme }) => `1px solid ${theme.colors.accentColor}`};
}
`;
