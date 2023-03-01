import styled from 'styled-components';

export const StyledContactListItem = styled.li`
display: flex;
justify-content: space-between;
gap: 12px;
border: ${({ theme }) => `1px solid ${theme.colors.borderInputColor}`};
border-radius: 10px;
padding: 8px 16px;
`;

export const StyledName = styled.p`
font-weight: 500;
`;

export const StyledButton = styled.button`
display: flex;
justify-content: 'center';
align-items: center;
border-radius: 50%;
`;
