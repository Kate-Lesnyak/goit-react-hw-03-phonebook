import styled from 'styled-components';

export const StyledContacts = styled.ul`
width: 400px;
display: flex;
gap: 12px;
flex-direction: column;
padding: 12px;
border: ${({ theme }) => `1px solid ${theme.colors.backgroundAndBorderColor}`};
border-radius: 10px;
margin-left: auto;
margin-right: auto;
margin-bottom: 20px;
`;

export const StyledFormField = styled.label`
display: flex;
flex-direction: column;
gap: 4px;
`;
